"use client";

import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../../firebase.config";
import Post from "./Post";
import { onAuthStateChanged } from "firebase/auth";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);
  const [displayName, setDisplayName] = useState("");

  const getDisplayName = (displayName) => {
    setDisplayName(displayName);
    console.log(displayName);
  };

  const getUser = (user) => {
    setUser(user);
  };

  // Get posts when the component mount

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (user) {
      const q = query(
        collection(db, "posts"),
        where("userId", "==", "user uid")
      );
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        const todoArray = snapshot.docs
          .map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }))
          .sort();
        setPosts(todoArray);
        console.log("user of post");
        console.log(user.email);
      });
      return () => unsub();
    }
  }, [user]);

  useEffect(() => {
    const name = auth.currentUser?.displayName;
    setDisplayName(name);
    console.log(displayName);
  }, [displayName]);

  console.log(posts);
  console.log(user);

  return (
    <section>
      <div className="max-w-4xl mx-auto">
        {posts.map((post) => (
          <Post key={post.id} post={post} getDisplayName={getDisplayName} />
        ))}
      </div>

      {user && <p className="text-center">{user.email}</p>}
    </section>
  );
}
