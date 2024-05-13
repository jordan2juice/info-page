"use client";

import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../../firebase.config";

export default function PostForm({ onShow }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function addPost() {
    const userId = auth.currentUser.uid;
    const newPost = {
      title: title,
      content: content,
      userId: userId,
      username: auth.currentUser.displayName,
    };
    console.log(newPost);
    console.log(userId);
    await addDoc(collection(db, "posts"), newPost);
  }

  async function handleSubmit(e) {
    e.preventDefault;
    try {
      await addPost();
      setTitle("");
      setContent("");
      onShow(false);
    } catch (error) {
      console.error("Error submitting.", error);
    }
  }

  return (
    <div
      className="flex justify-center items-center bg-slate-400 bg-opacity-10">
      <form
        onSubmit={handleSubmit}
        className=" w-7/12 max-w-lg flex flex-col bg-white shadow-lg rounded-md p-6 justify-center align-middle"
      >
        <label htmlFor="title">
          Title:
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            name="title"
            type="text"
            id="title"
            placeholder="Your title here..."
            className="w-full rounded-md h-10 px-6 bg-slate-300 mb-3 outline-red-500"
          />
        </label>
        <label htmlFor="content" className=" mr-1 gap-1">
          Content:
          <input
            value={content}
            onChange={(e) => setContent(e.target.value)}
            name="content"
            id="content"
            placeholder="Your content here..."
            className="w-full rounded-md h-10 px-6 bg-slate-300 mb-3 outline-red-500"
          ></input>
        </label>
        <button onClick={handleSubmit} type="button">
          Add Post
        </button>
      </form>
    </div>
  );
}
