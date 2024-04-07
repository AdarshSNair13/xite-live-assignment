'use client'
import { faqData } from "@/constants";
import Image from "next/image";
import React, { useState } from "react";

const Faq = () => {
  const [openAccordionId, setOpenAccordionId] = useState();

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
                      className={`accordion-toggle group inline-flex items-center justify-between text-xl font-normal leading-8 text-white w-full transition duration-500 hover:text-white ${
                        openAccordionId === index
                          ? "accordion-active:text-white accordion-active:font-medium"
                          : ""
                      }`}
                      onClick={() => toggleAccordion(index)}
                    >
                      <h5>{item.question}</h5>
                      <svg
                        className={`text-white transition duration-500 group-hover:text-white ${
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        ></path>
                      </svg>
                    </button>
                    <div
                      className={`accordion-content w-full px-0 overflow-hidden pr-4 ${
                        openAccordionId === index ? "active" : "hidden"
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
            <Image src="/images/faq.jpg" height={100} width={500} alt="FAQ tailwind section" className="w-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;