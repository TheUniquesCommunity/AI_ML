"use client";

import { Users, Lightbulb, Rocket, Globe, HeartHandshake } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { motion } from "framer-motion";

export function GlowingCard() {
  return (
    <div className="text-center mx-auto w-full mb-8">
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-lg font-medium text-gray-700 dark:text-gray-300"
      >
        Organized by
      </motion.p>
      <motion.h2
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.2 }}
        className="text-5xl font-bold text-gray-900 dark:text-white mt-2 mb-20"
      >
        The  <span className="text-red-700">Uniques</span> Community
      </motion.h2>
    
      <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[34rem] lg:max-w-6xl mx-auto xl:grid-rows-2">
        <GridItem
          area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
          icon={<Users className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="A Thriving Network"
          description="Join a diverse group of innovators, creators, and changemakers building a better future together."
        />

        <GridItem
          area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
          icon={<Lightbulb className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Innovation at its Core"
          description="We foster creative problem-solving, providing a platform where groundbreaking ideas turn into reality."
        />

        <GridItem
          area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
          icon={<Rocket className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Empowering the Next Leaders"
          description="Our community nurtures talents and equips individuals with skills that drive impact and growth."
        />

        <GridItem
          area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
          icon={<Globe className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Global Reach, Local Impact"
          description="From grassroots initiatives to international collaborations, we make a difference worldwide."
        />

        <GridItem
          area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
          icon={<HeartHandshake className="h-4 w-4 text-black dark:text-neutral-400" />}
          title="Collaboration & Growth"
          description="Connect, learn, and grow with like-minded individuals who believe in the power of community."
        />
      </ul>
    </div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={`min-h-[12rem] list-none ${area}`}>
      <div className="relative h-full rounded-2.5xl border p-2 md:rounded-3xl rounded-lg mx-4 md:p-3">
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex  h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6 dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border border-gray-600 p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl font-semibold font-sans md:text-2xl text-black dark:text-white">
                {title}
              </h3>
              <h2 className="text-sm md:text-base font-sans text-black dark:text-neutral-400">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
