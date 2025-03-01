// "use client";

// import Clients from "@/components/Clients";
// import ClippedCard from "@/components/ClippedCard/ClippedCard";
// import Features from "@/components/Features";
// import Footer from "@/components/Footer";
// import { GlowingCard } from "@/components/GlowingCard/GlowingCard";
// import Hero from "@/components/Hero";
// import Highlights from "@/components/Highlights";
// import Navbar from "@/components/Navbar";
// import Partners from "@/components/Partners";
// import About from "@/components/About";
// import { CardBody } from "@/components/ui/3Dcard";
// import HoverSection from "@/components/HoverSection";
// import Map from "@/components/Map/Wom";
// import FAQSection from "@/components/FAQSection";
// import { FeaturesSectionDemo } from "@/components/FeatureSection";

// export default function Home() {
//   return (
//     <div className="bg-black">
//       <Navbar />
//       <Hero />
//       <div className="p-10"></div>
//       <FeaturesSectionDemo/>
//       <div className="p-10"></div>
//       <HoverSection />
//       <div className="p-10"></div>
//       <Highlights />
//       <div className="p-10"></div>
//       <Map/>
      
      
//       {/* <ClippedCard/> */}
     
//       <Features />
//       {/* <div className="p-10"></div>
//       <Partners /> */}
      
//       {/* <Clients /> */}
      
//       <div className="p-10"></div>
//       <GlowingCard/>
      
//       <div className="p-10"></div>
//       <FAQSection />
//       <Footer />
//     </div>
//   );
// }

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
      {/* Navbar */}
      <Navbar />

      {/* Sections with IDs for navigation */}
      <section id="home">
        <Hero />
      </section>

      <div className="space-y-10"> 
        <section id="about">
          <FeaturesSectionDemo />
        </section>

        <section id="sessions">
          <HoverSection />
        </section>

        <section id="ideathon">
          <Highlights />
        </section>

        <section id="map">
          <Map />
        </section>

        <section id="benefits">
          <Features />
        </section>

        {/* Uncomment if needed */}
        {/* <section id="partners">
          <Partners />
        </section> */}

        {/* <Clients /> */}

        <section id="glowing-card">
          <GlowingCard />
        </section>

        <section id="faq">
          <FAQSection />
        </section>
      </div>

      {/* Footer */}
      <section id="contact">
      <Footer />
      </section>
      
    </div>
  );
}

