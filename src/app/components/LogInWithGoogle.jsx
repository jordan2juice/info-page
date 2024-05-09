"use client";

import React, { useState } from "react";
import { auth, googleProvider } from "../../../firebase.config";

export default function LogInWithGoogle({ getUser }) {
  const [user, setUser] = useState(null);

  const signInWithGoogle = async () => {
    try {
      const result = await signInWithGoogle(auth, googleProvider);
      // rest of your code
      const user = result.user;
      setUser(result.user);
      getUser(user);
    } catch (error) {
      // handle error
      console.error("Error with user Google log in.", error);
    }
  };
  // rest of your code

  return (
    <div
      onClick={signInWithGoogle}
      className="px-6px-6 py-2.5 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
    ></div>
  );
}
