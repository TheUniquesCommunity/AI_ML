"use client";
import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
  isOpen?: boolean;
}

const FAQSection = () => {
  const [faqs, setFaqs] = useState<FAQItem[]>([
    {
      question: 'What is the AI/ML Convention?',
      answer: 'The AI/ML Convention is a premier gathering of AI and machine learning enthusiasts, researchers, and professionals. It features keynotes, panel discussions, and networking opportunities to explore the latest trends and advancements in the field.',
      isOpen: true
    },
    {
      question: 'What is the Ideathon?',
      answer: 'The Ideathon is a competition where participants pitch innovative ideas related to AI/ML. Teams collaborate to develop solutions that address real-world challenges, with mentorship and guidance from industry experts.'
    },
    {
      question: 'Who can participate in the AI/ML Convention and Ideathon?',
      answer: 'Students, professionals, researchers, and AI enthusiasts from all backgrounds are welcome to join. Whether you’re a beginner or an expert, there’s something for everyone!'
    },
    {
      question: 'What are the benefits of attending?',
      answer: 'Attendees gain exposure to cutting-edge AI/ML research, network with industry leaders, and have the chance to participate in hands-on workshops and the Ideathon, where they can showcase their innovative ideas.'
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
      <div className="relative z-[1] mx-auto ">
        <div className="grid grid-cols-12">
          <div className="col-span-12">
            <div className="mb-12">
              <h2 className="text-3xl md:text-5xl font-semibold text-white text-center mb-8 animate-pulse">
              Frequently Asked Questions
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
