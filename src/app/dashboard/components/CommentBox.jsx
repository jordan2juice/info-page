"use client";

import React, { useEffect, useState } from "react";
import { db, auth } from "../../../../firebase.config";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";

export default function CommentBox() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [user, setUser] = useState(null);
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");



  const getUser = (user) => {
    setUser(user);
  };

  const mm = new Date().getMonth() + 1;
  const dd = String(new Date().getDate()).padStart(2, "0");
  const yyyy = new Date().getFullYear();

  const hh = String(new Date().getHours()).padStart(2, "0");

  useEffect(() => {});
  // Listen for authentication state to know if a user is logged in or not

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      getUser(user);
    });
  }, []);

  useEffect(() => {
    // Get the current date and time using JavaScript's built-in Date
    const today = new Date();
    const dd = String(today.getDate()).padStart(2, "0");
    setDate(dd + "/" + mm + "/" + yyyy);
    setTime(`${hh}:${mm}`);
  }, []);

  useEffect(() => {
    // Listen for new comments and add them to the comments array
    const usub = onSnapshot(collection(db, "comments"), (comments) => {
      const todoArray = comments.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setComments(todoArray);
    });
    return () => usub();
  }, []);

  async function deleteComments(post) {
    await deleteDoc(doc(db, "comments", post.id));
    setDeleteComment(post.id);
    console.log("Comment deleted");
  }

  async function addComment() {
    const userId = auth.currentUser?.uid;
    const newComment = {
      comment: comment,
      userId: userId,
      date: date,
    };
    await addDoc(collection(db, "comments"), newComment);
    console.log("Comment added");
    setComment("");
    setDate(dd + "/" + mm + "/" + yyyy);
    setTime(`${hh}:${mm}`);
  }

  console.log("Comment added");

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      await addComment();
      setComment("");
      console.log("Comment added");
    } catch (error) {
      console.error("Error in comment submit.", error);
    }
  };

  return (
    <>
      <form
        className=" border-slate-400 borderflex flex-col items-center justify-center gap-3"
        onSubmit={submitHandler}
      >
        <label htmlFor="comment" className=" mr-1 ml-1 gap-1">
          Comment:
          <input
            id="comment"
            name="comment"
            placeholder="Add a comment..."
            className="rounded-md h-10 px-6 bg-slate-300 mb-3 outline-red-500"
            type="text"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <button
          type="submit"
          className="w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        >
          Submit
        </button>
      </form>
      <div className=" m-1 p-1 bg-slate-100 flex flex-col gap-3">
        {comments.map((comment) => (
          <div key={comment.id}>
            <div>
              <ul>
                <li>{comment.comment}</li>
                
              </ul>
              <small>{comment.date}</small>
            </div>
            <div className="flex gap-3 justify-items-end">
              <button
                onClick={deleteComments}
                className="w-1/4 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full"
              >
                Delete
              </button>
              <small>{comment.date}</small>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
