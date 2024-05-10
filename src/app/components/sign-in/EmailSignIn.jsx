"use client";

import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function EmailSignIn() {
  // const [user, setUser] = useState = ("");
  const [password, setPassword] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log("User created.");
      setEmail("");
      setPassword("");
    } catch (error) {
      console.error("Error in sign up.", error);
    }

    const handleShow = () => {
      setShow(true);
    }

    return (
      <div>
        <Button variant="primary" onClick={handleShow}>

        </Button>
        <form>
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={handleSubmit}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}
