"use client";

import { useState } from "react";

function HoverSection() {
  // Default to step 2 (Copy The Snippet) if desired
  const [activeStep, setActiveStep] = useState(2);

  return (
    <section className="relative overflow-hidden z-[1] px-4 py-16 md:py-[100px]">
      <div className="container relative">
        <div className="grid grid-cols-12 relative">
          <div className="col-span-12 md:col-start-3 md:col-span-10 lg:col-start-4 lg:col-span-6 text-center">
            <h2
              className="display-s-semibold md:display-lg-semibold text-gray-700 dark:text-white wow fadeInUp"
              data-wow-delay=".1s"
              style={{
                visibility: "visible",
                animationDelay: "0.1s",
                animationName: "fadeInUp",
              }}
            >
              Make It Yours Just In One Click
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-12 mt-20">
          <div className="col-span-12 lg:col-span-5">
            <ul className="relative z-[1] sm:pl-[125px] sm:before:contents-[''] sm:before:absolute sm:before:-z-[1] before:bg-gradient-to-b before:from-[rgba(0,0,0,0.19)] dark:before:from-slate-700 before:to-80% before:to-transparent dark:before:to-transparent before:left-0 before:-top-[8px] before:w-[77px] before:h-full before:rounded-full">
              <li
                className={`relative cursor-pointer ${
                  activeStep === 1 ? "opacity-100" : "opacity-50"
                }`}
                onMouseEnter={() => setActiveStep(1)}
              >
                <span className="hidden sm:flex justify-center items-center absolute w-[60px] h-[60px] -left-[117px] top-0 bg-black rounded-full text-[20px] text-white font-display shadow-[3px_0_0_#6e36c9]">
                  <span>01</span>
                </span>
                <h4
                  className="display-xs-medium md:display-s-medium font-display wow fadeInUp text-gray-500 dark:text-gray-80"
                  data-wow-delay=".1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Find The Perfect Component
                </h4>
                <p
                  className="text-sm-regular text-gray-300 dark:text-gray-100 mt-6 wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  Every component is embedded live directly on the page, and you
                  can even see what they look like at different breakpoints by
                  selecting device type.
                </p>
              </li>
              <li
                className={`relative cursor-pointer mt-12 ${
                  activeStep === 2 ? "opacity-100" : "opacity-50"
                }`}
                onMouseEnter={() => setActiveStep(2)}
              >
                <span className="hidden sm:flex justify-center items-center absolute w-[60px] h-[60px] -left-[117px] top-0 bg-black rounded-full text-[20px] text-white font-display shadow-[3px_0_0_#6e36c9]">
                  <span>02</span>
                </span>
                <h4
                  className="display-xs-medium md:display-s-medium font-display wow fadeInUp text-gray-700 dark:text-white"
                  data-wow-delay=".1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Copy The Snippet
                </h4>
                <p
                  className="text-sm-regular text-gray-300 dark:text-gray-100 mt-6 wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  Click the "Code" tab to see the code for a component and grab
                  the part that you need, or click the clipboard button to
                  quickly copy the entire snippet.
                </p>
              </li>
              <li
                className={`relative cursor-pointer mt-12 ${
                  activeStep === 3 ? "opacity-100" : "opacity-50"
                }`}
                onMouseEnter={() => setActiveStep(3)}
              >
                <span className="hidden sm:flex justify-center items-center absolute w-[60px] h-[60px] -left-[117px] top-0 bg-black rounded-full text-[20px] text-white font-display shadow-[3px_0_0_#6e36c9]">
                  <span>03</span>
                </span>
                <h4
                  className="display-xs-medium md:display-s-medium font-display wow fadeInUp text-gray-500 dark:text-gray-80"
                  data-wow-delay=".1s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.1s",
                    animationName: "fadeInUp",
                  }}
                >
                  Make It Yours
                </h4>
                <p
                  className="text-sm-regular text-gray-300 dark:text-gray-100 mt-6 wow fadeInUp"
                  data-wow-delay=".2s"
                  style={{
                    visibility: "visible",
                    animationDelay: "0.2s",
                    animationName: "fadeInUp",
                  }}
                >
                  Every component is built by framework utility classes with
                  some custom classes if only needed, so you can easily dive in
                  and adjust anything you want to better fit your use case.
                </p>
              </li>
            </ul>
          </div>
          <div className="col-span-12 lg:col-start-8 lg:col-span-5 flex items-center relative mt-8 lg:mt-0">
            <div className="relative w-full">
              {activeStep === 1 && (
                <img
                  src="https://assets.easyfrontend.com/tailwind/images/resources-easyfrontend.png"
                  alt="Find The Perfect Component"
                  className="w-full rounded-lg shadow-3xl"
                />
              )}
              {activeStep === 2 && (
                <img
                  src="https://assets.easyfrontend.com/tailwind/images/copy-code-easyfrontend.png"
                  alt="Copy The Snippet"
                  className="w-full rounded-lg shadow-3xl"
                />
              )}
              {activeStep === 3 && (
                <img
                  src="https://assets.easyfrontend.com/tailwind/images/use-code-easyfrontend.png"
                  alt="Make It Yours"
                  className="w-full rounded-lg shadow-3xl"
                />
              )}
            </div>
          </div>
        </div>
      </div>
      {/* Updated red gradient using a CSS radial gradient with color #6e36c9 */}
      <img
        src="https://assets.easyfrontend.com/tailwind/images/illustration/bg-color-gradient-circle-green.png"
        alt=""
        className="w-[75%] absolute right-0 bottom-0 translate-x-[40%] translate-y-[15%] pointer-events-none z-[-2]"
      />
    </section>
  );
}


export default HoverSection;