"use client";

import Image from "next/image";
import React, { useState } from "react";
import ModalSignUp from "./ModalSignUp";
import ModalSignIn from "./ModalSignIn";

export default function HeroSection() {
  const [showIn, setShowIn] = useState(false);
  const handleCloseIn = () => setShowIn(false);
  const handleShowIn = () => setShowIn(true);
  const [showUp, setShowUp] = useState(false);
  const handleCloseUp = () => setShowUp(false);
  const handleShowUp = () => setShowUp(true);

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              alt="hero"
              className="object-cover object-center rounded"
              height={300}
              width={500}
              src={"/hero-image.jpg"}
            ></Image>
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Your local news and community site.
              <br className="hidden lg:inline-block" />
              News and Connection.
            </h1>
            <p className="mb-8 leading-relaxed">
              Copper mug try-hard pitchfork pour-over freegan heirloom neutra
              air plant cold-pressed tacos poke beard tote bag. Heirloom echo
              park mlkshk tote bag selvage hot chicken authentic tumeric
              truffaut hexagon try-hard chambray.
            </p>
            <div className="flex justify-center gap-4">
              <button
                onClick={handleShowIn}
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg"
              >
                Sign In
              </button>
              <ModalSignIn
                show={showIn}
                handleClose={handleCloseIn}
                handleShow={handleShowIn}
              />
              <button
                className="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-700 rounded text-lg"
                onClick={handleShowUp}
              >
                Sign Up
              </button>
              <ModalSignUp
                show={showUp}
                handleClose={handleCloseUp}
                handleShow={handleShowUp}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
