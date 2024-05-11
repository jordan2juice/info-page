"use client";

import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Modal from "../components/Modal";
import Sponsors from "../components/Sponsors";
import Footer from "../components/Footer";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase.config";
import { useRouter } from "next/navigation";
import Posts from "./components/Posts";

export default function page() {
  const [show, setShow] = useState(true);
  const [user, setUser] = useState(null);
  const router = useRouter();

  function onShow(bool) {
    setShow(bool);
    console.error("Not closing box");
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        router.push("/");
      }
      return () => unsub();
    });
  }, []);

  return (
    <main>
      <NavBar />
      <Posts />
      {show && <Modal show={show} onShow={onShow} />}
      <Sponsors />
      <Footer />
    </main>
  );
}
