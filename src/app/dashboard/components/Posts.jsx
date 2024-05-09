"use client";

import { collection, onSnapshot, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { auth, db } from "../../../../firebase.config";
import Post from "./Post";
import { onAuthStateChanged } from "firebase/auth";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
  });

  useEffect(() => {
    const userId = auth.currentUser?.uid;
    if (user) {
      const q = query(collection(db, "posts"), where("userId", "==", "userId"));
      const unsub = onSnapshot(collection(db, "posts"), (snapshot) => {
        const todoArray = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPosts(todoArray);
      });
      return () => unsub();
    }
  }, [user]);

  return (
    <section>
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </section>
  );
}
