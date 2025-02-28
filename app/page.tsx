"use client";

import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import HoverSection from "@/components/HoverSection";
import EditorSection from "@/components/EditorSection";

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <HoverSection />
      <Partners />
      <EditorSection />
      <Highlights />
      <Features />
      <Clients />
      <Footer />
    </div>
  );
}


