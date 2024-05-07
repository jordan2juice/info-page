"use client";

import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import LocalNews from "./components/LocalNews";
import Sponsors from "./components/Sponsors";
import Footer from "./components/Footer";

export default function Home() {
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
