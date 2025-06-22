"use client";
import Header from "../components/Header";
import About from "../components/landing/About";
import Contact from "../components/landing/Contact";
import Hero from "../components/landing/Hero";
import KeyNotes from "../components/landing/KeyNotes";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import RegisterModal from "../components/RegisterModal";
import { Toaster } from "sonner";

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 800, // animation duration in ms
      easing: "ease-in-out", // default easing
      once: false, // whether animation should happen only once
      mirror: false, // animate on scroll up as well
    });
  }, []);

  return (
    <>
      <Header />
      <Hero />
      <About />
      <KeyNotes />
      <Contact />
      <RegisterModal />

      <Toaster position="top-right" richColors theme="light" />
    </>
  );
}
