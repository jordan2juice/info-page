"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function NavBar() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className=" container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={""}>
            <Image height={50} width={150} src={"/logo.png"}></Image>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={""} className="mr-5 hover: text-red-900">
              Home
            </Link>
            <Link href={""} className="mr-5 hover: text-red-900">
              About
            </Link>
            <Link href={""} className="mr-5 hover: text-red-900">
              Contact
            </Link>
            <Link href={""} className="mr-5 hover: text-red-900">
              Blog
            </Link>
          </nav>
          <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
            Sign up
          </button>
        </div>
      </header>
    </div>
  );
}
