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
      <div className="p-10"></div>
      <HoverSection />
      <div className="p-10"></div>
      <Partners />
      <div className="p-10"></div>
      <Highlights />
      <div className="p-10"></div>
      <Features />
      <div className="p-10"></div>
      <Map/>
      {/* <Clients /> */}
      <div className="p-10"></div>
      <Footer />
    </div>
  );
}


