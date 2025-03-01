import Clients from "@/components/Clients";
import ClippedCard from "@/components/ClippedCard/ClippedCard";
import Features from "@/components/Features";
import Footer from "@/components/Footer";
import { GlowingCard } from "@/components/GlowingCard/GlowingCard";
import Hero from "@/components/Hero";
import Highlights from "@/components/Highlights";
import Navbar from "@/components/Navbar";
import Partners from "@/components/Partners";


export default function Home() {
  return (
    <div className="bg-black">
      <Navbar />
      <Hero />
      <Partners />
      <Highlights />
      {/* <ClippedCard/> */}
      <GlowingCard/>
      <Features />
      <Clients />
      <Footer />
    </div>
  );
}
