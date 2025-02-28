"use client";

import React, { useState } from "react";
import { Scrollama, Step } from "react-scrollama";

interface StepData {
  title: string;
  description: string;
}

const steps: StepData[] = [
  {
    title: "Select Language and Framework",
    description:
      "Choose the Lang./ Framework and UI kit that best fits your project's design requirements",
  },
  {
    title: "Add Components",
    description:
      "Use the editor to add components to any page. Customize styles, adjust settings, and modify components to fit your project requirements.",
  },
  {
    title: "Edit Components",
    description:
      "Edit each component individually to fine-tune its appearance and functionality. Make changes directly within the editor to see immediate results.",
  },
  {
    title: "Export Project",
    description:
      "Once your project is complete, export it as a ZIP file or JSON file. Choose the appropriate export option based on your needs for sharing or deployment.",
  },
];

const EditorSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const onStepEnter = ({ data }: { data: number }) => {
    setActiveStep(data);
  };

  return (
    <section className="hidden md:flex relative z-[1] px-4 pt-16 lg:pt-[130px] pb-16 md:pb-[60px]">
      <div className="container">
        <div className="flex items-start">
          {/* Left Side Sticky Indicators */}
          <div className="flex flex-col gap-2 sticky top-36 -ml-4 pr-1">
            <div className="w-2 h-5 rounded-full transition-all duration-300 border border-white dark:border-slate-700 bg-gray-40"></div>
            <div className="w-2 h-5 rounded-full transition-all duration-300 border border-white dark:border-slate-700 bg-gray-40"></div>
            <div className="w-2 h-5 rounded-full transition-all duration-300 border border-white dark:border-slate-700 bg-emerald-400"></div>
            <div className="w-2 h-5 rounded-full transition-all duration-300 border border-white dark:border-slate-700 bg-gray-40"></div>
          </div>
          <div className="flex-1 grid grid-cols-3 gap-8 lg:gap-[80px]">
            {/* Left Column: Title & Image */}
            <div className="col-span-2 h-[80vh] sticky top-36">
              <div className="col-span-12 md:col-start-3 md:col-span-8 lg:col-start-3 lg:col-span-8 text-left">
                <h2
                  className="display-md-semibold md:display-lg-semibold text-gray-600 dark:text-white wow fadeInUp"
                  data-wow-delay=".1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Discover Our powerful Editor
                </h2>
              </div>
              <div className="mt-16">
                <div className="relative">
                  <div className="absolute w-full left-0 top-0 opacity-100 translate-y-0 scale-100">
                    <img
                      src="https://assets.easyfrontend.com/tailwind/images/edit-component-easyfrontend.png"
                      alt="Edit Components"
                      className="w-full rounded-lg shadow-3xl h-[40vh]"
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* Right Column: Scrollama Steps */}
            <div className="col-span-1 mt-0">
              <Scrollama onStepEnter={onStepEnter} offset={0.5}>
                {steps.map((step, index) => (
                  <Step data={index} key={index}>
                    <li className="relative cursor-pointer py-8 h-screen md:min-h-[60vh] flex items-center justify-center">
                      <div
                        className={`flex flex-col gap-6 justify-start mt-0 bg-gradient-to-r from-white dark:from-slate-700 md:from-white dark:md:from-transparent via-white md:via-white dark:via-slate-700 dark:md:via-slate-700 to-white md:to-white dark:to-slate-700 dark:md:to-slate-700 p-4 lg:p-12 rounded-2xl border-y border-r border-[#dfe5ff]/50 dark:border-transparent shadow-[37px_0px_19px_rgba(0,0,0,.02)] transition-all duration-300 ${
                          activeStep === index ? "opacity-100" : "opacity-50"
                        }`}
                      >
                        <div>
                          <span className="flex justify-center items-center w-[60px] h-[60px] bg-black rounded-full text-[20px] text-white font-display shadow-[3px_0_0_#EF4444]">
                            <span>{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                          </span>
                        </div>
                        <div>
                          <h4 className="display-md-medium md:display-s-medium font-display text-gray-500 dark:text-white">
                            {step.title}
                          </h4>
                          <p className="text-sm-regular text-gray-300 dark:text-gray-50 leading-7 mt-6">
                            {step.description}
                          </p>
                        </div>
                      </div>
                    </li>
                  </Step>
                ))}
              </Scrollama>
            </div>
          </div>
        </div>
      </div>
      {/* Background Gradients */}
      <div className="w-full absolute left-0 top-0 translate-x-[-40%] translate-y-[-30%] pointer-events-none z-[-2]">
        <img
          src="https://assets.easyfrontend.com/tailwind/images/illustration/bg-color-gradient-circle-red.png"
          alt=""
          className="w-full"
        />
      </div>
      <div className="w-[75%] absolute right-0 bottom-0 translate-x-[40%] translate-y-[30%] pointer-events-none z-[-2]">
        <img
          src="https://assets.easyfrontend.com/tailwind/images/illustration/bg-color-gradient-circle-green.png"
          alt=""
          className="w-full"
        />
      </div>
    </section>
  );
};

export default EditorSection;
