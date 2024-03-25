"use client"
import { useState } from "react";

function FAQItem({ question, answer }: any) {
  const [expanded, setExpanded] = useState(false);

  return (
    <li>
      <button
        className="relative flex gap-2 items-center w-full py-5 text-base font-semibold text-left border-t md:text-lg border-base-content/10"
        aria-expanded={expanded}
        onClick={() => setExpanded(!expanded)}
      >
        <span className="flex-1 text-base-content">{question}</span>
        <svg
          className="flex-shrink-0 w-4 h-4 ml-auto fill-current"
          viewBox="0 0 16 16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              expanded ? "" : "rotate-90"
            }`}
          ></rect>
        </svg>
      </button>
      <div
        className="transition-all duration-300 ease-in-out max-h-0 overflow-hidden"
        style={{ maxHeight: expanded ? "100%" : "0" }}
      >
        <div className="pb-5 leading-relaxed">
          <div className="space-y-2 leading-relaxed">{answer}</div>
        </div>
      </div>
    </li>
  );
}

function FAQList() {
  return (
    <div className="py-24 px-8 max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
      <div className="flex flex-col text-left basis-1/2">
        <p className="inline-block font-semibold text-primary mb-4">
          Insurance FAQ
        </p>
        <p className="sm:text-4xl text-3xl font-extrabold text-base-content">
          Frequently Asked Questions
        </p>
      </div>
      <ul className="basis-1/2">
        <FAQItem
          question="How secure is my insurance information?"
          answer="We prioritize the security of your insurance information. We use advanced encryption and strict data protection measures to ensure your data is safe and confidential."
        />
        <FAQItem
          question="How can I customize my insurance coverage?"
          answer="Our insurance plans are customizable. You can tailor your coverage to meet your specific needs and budget."
        />
        <FAQItem
          question="Is there a waiting period for insurance claims?"
          answer="There may be a waiting period for certain insurance claims, depending on the policy terms and conditions. Please refer to your policy documents for details."
        />
      </ul>
    </div>
  );
}

export default FAQList;