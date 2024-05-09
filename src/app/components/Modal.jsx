"user client";

import { addDoc, collection } from "firebase/firestore";
import React, { useState } from "react";
import { auth, db } from "../../../firebase.config";

export default function Modal({ onShow }) {
  const [show, setShow] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  async function addPost() {
    // const userId = auth.currentUser?.uid;
    const newPost = {
      title: title,
      content: content,
    //   userId: userId,
    };
    await addDoc(collection(db, "posts"), newPost);
  }

  async function handleSubmit(e) {
    console.log("Error submitting");
    e.preventDefault;
    try {
      await addPost();
      setTitle("");
      setContent("");
      onShow(false);
    } catch (error) {
      console.error("Error in sign up.", error);
    }
  }

  return (
    <div>
      <div className="fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">
        <div className="w-full max-w-lg bg-white shadow-lg rounded-md p-6 relative">
          <div className="flex items-center pb-3 border-b text-black">
            <h3 className="text-xl font-bold flex-1">Add Post</h3>
            <svg
              onClick={() => onShow(false)}
              xmlns="http://www.w3.org/2000/svg"
              className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
              viewBox="0 0 320.591 320.591"
            >
              <path
                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                data-original="#000000"
              ></path>
              <path
                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                data-original="#000000"
              ></path>
            </svg>
          </div>
          <div className="my-6">
            <form onSubmit={handleSubmit}>
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
              <label htmlFor="content">
                Content:
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  name="content"
                  id="content"
                  className="px-6 py-2 rounded-md text-black text-sm border-none outline-red-500 bg-slate-300 hover: bg-gray-200 active: bg-slate-200"
                ></textarea>
              </label>
            </form>
          </div>
          <div className="border-t flex justify-end pt-6 space-x-4">
            <button
              onClick={() => onShow(false)}
              type="button"
              className="px-6 py-2 rounded-md text-black text-sm border-none outline-none bg-gray-200 hover:bg-gray-300 active:bg-gray-200"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              type="button"
              className="px-6 py-2 rounded-md text-white text-sm border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
            >
              Save
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
