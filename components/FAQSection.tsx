"use client"
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: 'What is Easy Frontend?',
      answer: 'EasyFrontend offers a collection of UI Components, Blocks, and Sections built with HTML, React, Bootstrap, and Tailwind CSS. These components are designed to boost your development workflow by providing over 600+ free UI components. Developers can utilize these components by copy-pasting code directly into their projects.',
      isOpen: true
    },
    {
      question: 'What does EasyFrontend editor do?',
      answer: 'The editor allows users to create, edit, and download complete websites and landing pages without the need for coding from scratch. Users can leverage this editor to customize and integrate the UI components from the collection seamlessly into their projects.'
    },
    {
      question: 'How often does your team upload resources?',
      answer: 'We are uploading resources every week.'
    },
    {
      question: 'EasyFrontend License',
      answer: 'All freebies available on EasyFrontend are free to use for both personal and commercial purposes...'
    }
  ]);

  const toggleFAQ = (index: number) => {
    setFaqs(faqs.map((faq, i) => ({
      ...faq,
      isOpen: i === index ? !faq.isOpen : false
    })));
  };

  return (
    <section className="px-4 md:py-[100px] ">
      <div className=" relative z-[1] mx-auto ">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="mb-12">
              <h2 className="text-3xl   md:text-7xl font-semibold text-white text-center mb-8">
                Frequently<br /> Asked Questions
              </h2>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12">
          <div className="col-span-12 lg:col-start-2 lg:col-span-10">
            <div className="border-t-2 md:border-t-[3px] border-white">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b-2 md:border-b-[3px] border-white">
                  <button 
                    onClick={() => toggleFAQ(index)}
                    className="w-full flex justify-between items-center px-0 py-6"
                  >
                    <h3 className="text-lg md:text-xl font-medium text-white text-left">
                      {faq.question}
                    </h3>
                    <div className="text-2xl text-white">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        strokeWidth="0"
                        viewBox="0 0 384 512"
                        className={`transition-transform ${faq.isOpen ? 'rotate-0' : 'rotate-45'}`}
                        style={{ width: '1em', height: '1em' }}
                      >
                        <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"></path>
                      </svg>
                    </div>
                  </button>
                  <div className={`overflow-hidden transition-all duration-300 ${faq.isOpen ? 'max-h-96' : 'max-h-0'}`}>
                    <div className="text-gray-300 text-base md:text-lg pb-6">
                      {faq.answer}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;