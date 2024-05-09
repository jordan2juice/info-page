"use client";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import LocalNews from "./components/LocalNews";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import { auth } from "../../firebase.config";
import { onAuthStateChanged } from "firebase/auth";

export default function Home() {
  const [user, setUser] = useState(null);

  const getUser = (user) => {
    setUser(user);
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <main>
      <NavBar />
      <HeroSection />
      <LocalNews />
      <Sponsors />
      <Footer />
    </main>
  );
}
