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
  }

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        // router.push("/");
      }
      return () => unsub();
    });
  }, []);

  return (
    <main>
      <NavBar />
      <Posts />
      <div className="w-full md:w-1/2 xl:w-1/3 p-4">
        <form>
          <input type="text" />
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* {show && <Modal onShow={onShow} />} */}
      <Sponsors />
      <Footer />
    </main>
  );
}
