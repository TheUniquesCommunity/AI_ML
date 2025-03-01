import React from "react";
import CustomCard from "./CustomCard";

const Highlights = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center mt-4 md:mt-[2rem] p-4 md:p-[5rem]">
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light text-center max-w-[900px] tracking-tighter">
          <span className="text-3xl md:text-5xl lg:text-6xl font-medium">
            The Ultimate <span className="text-[#6e36c9]">Ideathon</span> Experience
          </span>
           <br />
          
        </h1>
        <p className="text-white text-lg md:text-xl lg:text-lg gap-1 mt-3">
            From registration to the Grand Finale, an AI/ML-powered journey of innovation and problem-solving!
          </p>
      </div>
      <div className="flex flex-col items-center justify-center px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-[1100px]">
          <div className="md:col-span-1 md:pr-2">
            <CustomCard
              src="/assets/Images/visual-element.png"
              alt="Visual"
              height={400}
              width={400}
              h3="Step 1: Register"
              p1="Kickstart your Ideathon journey!"
              p2="Sign up and join the revolution."
            />
          </div>
          <div className="md:col-span-1">
            <CustomCard
              src="/assets/Images/app-widget-trim.png"
              alt="Visual"
              height={400}
              width={350}
              h3="Step 2: Submit Your Idea"
              p1="Showcase your AI/ML-driven innovation."
              p2="The best ideas move forward!"
            />
          </div>
          <div className="md:col-span-1">
            <CustomCard
              src="/assets/Images/app-widget-2.png"
              alt="Visual"
              height={400}
              width={350}
              h3="Step 3: Shortlisting"
              p1="Experts evaluate and select"
              p2="the most promising solutions."
            />
          </div>
          <div className="md:col-span-1 md:pl-2">
            <CustomCard
              src="/assets/Images/cone.png"
              alt="Visual"
              height={400}
              width={400}
              h3="Step 4: Final Showdown"
              p1="Top teams pitch their ideas"
              p2="Live at the event to win big!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
