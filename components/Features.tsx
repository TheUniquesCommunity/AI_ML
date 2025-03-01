import React from "react";
import FeatureDescription from "./elements/FeatureDescription";
import { IoChatbubblesOutline } from "react-icons/io5";
import { FaChalkboardTeacher, FaRobot } from "react-icons/fa";
import { MdOutlineLightbulb, MdOutlineConnectWithoutContact } from "react-icons/md";
import { BsCpu } from "react-icons/bs";
import { AiOutlineProject } from "react-icons/ai";
import { BiNetworkChart } from "react-icons/bi";
import { IoCodeSlash } from "react-icons/io5";

const Features = () => {
  return (
    <>
      <div className="bg-gradient-to-t from-purple-dark to-transparent p-4 md:p-[2rem] ">
        <div className="flex flex-col space-y-1 md:-space-y-2 mb-[4rem] md:mb-[8rem] max-w-[1100px] mx-auto px-4 md:px-8">
          <h1 className="text-3xl md:text-4xl lg:text-4xl capitalize text-center font-semibold ">
          Accelerate Growth with <span className="text-[#6e36c9]">Cutting-Edge <br />AI & ML</span> Technologies
          </h1>
          
        </div>
        <div className="flex justify-center px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-4 w-full max-w-[1100px]">
            <FeatureDescription
              icon={<IoChatbubblesOutline />}
              h1="Expert Panel Discussions"
              p1="Gain insights from industry leaders"
              p2="on AI trends and breakthroughs."
            />
            <FeatureDescription
              icon={<FaChalkboardTeacher />}
              h1="Hands-on AI Workshops"
              p1="Build AI models and applications"
              p2="with expert guidance."
            />
            <FeatureDescription
              icon={<MdOutlineLightbulb />}
              h1="AI/ML Ideathon"
              p1="Solve real-world problems with AI"
              p2="and present your innovative ideas."
            />
            <FeatureDescription
              icon={<BsCpu />}
              h1="AI Research Showcase"
              p1="Explore groundbreaking research"
              p2="and AI-driven innovations."
            />
            <FeatureDescription
              icon={<FaRobot />}
              h1="Live AI Demonstrations"
              p1="Experience cutting-edge AI tech"
              p2="in action."
            />
            <FeatureDescription
              icon={<MdOutlineConnectWithoutContact />}
              h1="Networking & Collaboration"
              p1="Connect with AI experts, developers,"
              p2="and startups."
            />
            <FeatureDescription
              icon={<AiOutlineProject />}
              h1="AI Startup Showcase"
              p1="Discover AI-driven startups"
              p2="and innovative solutions."
            />
            <FeatureDescription
              icon={<BiNetworkChart />}
              h1="Smart AI Hackathons"
              p1="Compete in AI challenges"
              p2="and test your skills."
            />
            <FeatureDescription
              icon={<IoCodeSlash />}
              h1="Coding Challenges"
              p1="Participate in AI coding contests"
              p2="and win exciting prizes."
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
