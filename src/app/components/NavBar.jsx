"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import ModalSignUp from "./ModalSignUp";
import { auth } from "../../../firebase.config";
import { useRouter } from "next/navigation";

export default function NavBar() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const router = useRouter();

  async function handleLogOut() {
    await auth.signOut();
    router.push("/");
  }

  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={""}>
            <Image height={50} width={150} src={"/logo.png"}></Image>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover: text-red-900">
              Home
            </Link>
            <Link href={"/dashboard"} className="mr-5 hover: text-red-900">
              Dashboard
            </Link>
            <Link href={""} className="mr-5 hover: text-red-900">
              Contact
            </Link>
            <Link href={""} className="mr-5 hover: text-red-900">
              Blog
            </Link>
          </nav>
          <button
            onClick={handleShow}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Sign up
          </button>
          <ModalSignUp
            show={show}
            handleClose={handleClose}
            handleShow={handleShow}
          />
          <button
            onClick={handleLogOut}
            className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0"
          >
            Log Out
          </button>
        </div>
      </header>
    </div>
  );
}
