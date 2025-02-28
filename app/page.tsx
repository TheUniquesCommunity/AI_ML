"use client";

import Clients from "@/components/Clients";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import HoverSection from "@/components/HoverSection";
import Map from "@/components/Map/Wom"

export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <HoverSection />
      <Partners />
      <Highlights />
      <Features />
      <Map/>
      <Clients />
      <Footer />
    </div>
  );
}


