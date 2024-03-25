'use client'
import React, { useState } from "react";

const Faq = () => {
  const [openAccordionId, setOpenAccordionId] = useState(null);

  const toggleAccordion = (accordionId:any) => {
    setOpenAccordionId((prevId) => (prevId === accordionId ? null : accordionId));
  };

  return (
    <section className="py-24">
      <div className="flex justify-center">
        <h2 className="mb-12 text-3xl font-bold text-white mx-auto">FAQs</h2>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-center items-center gap-x-16 gap-y-5 xl:gap-28 lg:flex-row lg:justify-between max-lg:max-w-2xl mx-auto max-w-full">
          <div className="w-full lg:w-1/2">
            <div className="lg:max-w-xl">
              <div className="mb-6 lg:mb-16">
                {faqData.map((item, index) => (
                  <div
                    className="accordion pb-8 border-b border-solid border-gray-200"
                    key={index}
                  >
                    <button
                      className={`accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-gray-600 w-full transition duration-500 hover:text-white ${
                        openAccordionId === index
                          ? "accordion-active:text-white accordion-active:font-medium"
                          : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h5>{item.question}</h5>
                      <svg
                        className={`text-gray-900 transition duration-500 group-hover:text-white ${
                          openAccordionId === index
                            ? "accordion-active:text-white accordion-active:rotate-180"
                            : ""
                        }`}
                        width="22"
                        height="22"
                        viewBox="0 0 22 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M16.5 8.25L12.4142 12.3358C11.7475 13.0025 11.4142 13.3358 11 13.3358C10.5858 13.3358 10.2525 13.0025 9.58579 12.3358L5.5 8.25"
                          stroke="currentColor"
                          strokeWidth="1.6"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                        openAccordionId === index ? "active" : ""
                      }`}
                      aria-labelledby={`basic-heading-${index}-with-arrow-always-open`}
                    >
                      <p className="text-base font-normal text-white">{item.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2">
            <img src="/faq.jpg" alt="FAQ tailwind section" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;

// Sample FAQ data
const faqData = [
  {
    question: "How to create an account?",
    answer:
      "To create an account, find the 'Sign up' or 'Create account' button, fill out the registration form with your personal information, and click 'Create account' or 'Sign up.' Verify your email address if needed, and then log in to start using the platform.",
  },
  {
    question: "Have any trust issue?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
  },
  {
    question: "How can I reset my password?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
  },
  {
    question: "What is the payment process?",
    answer:
      "Our focus on providing robust and user-friendly content management capabilities ensures that you can manage your content with confidence, and achieve your content marketing goals with ease.",
  },
];
