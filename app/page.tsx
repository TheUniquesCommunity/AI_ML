"use client";

import Clients from "@/components/Clients";
import ClippedCard from "@/components/ClippedCard/ClippedCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { GlowingCard } from "@/components/GlowingCard/GlowingCard";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";
import About from "@/components/About";
import { CardBody } from "@/components/ui/3Dcard";
import HoverSection from "@/components/HoverSection";
import Map from "@/components/Map/Wom";
import FAQSection from "@/components/FAQSection";
import { FeaturesSectionDemo } from "@/components/FeatureSection";

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
      {/* <ClippedCard/> */}
      <GlowingCard/>
      <Features />
      <div className="p-10"></div>
      <Map/>
      <div className="p-10"></div>
      <FeaturesSectionDemo/>
      {/* <Clients /> */}
      <div className="p-10"></div>
      <FAQSection />
      <div className="p-10"></div>
      <Footer />
    </div>
  );
}
