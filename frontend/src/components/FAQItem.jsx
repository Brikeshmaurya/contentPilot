import React, { useState } from "react";

/**
 * FAQItem - single accordion item
 * Props:
 *  - id: unique id
 *  - question: string
 *  - answer: string (or React node)
 *  - isOpen: boolean
 *  - onToggle: () => void
 */
function FAQItem({ id, question, answer, isOpen, onToggle }) {
  return (
    <div className="w-full">                                          
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        className="
          flex items-center justify-between
          w-full text-left
          bg-white
          px-5 py-4
          rounded-xl
          border border-gray-200
          
          hover:shadow-md
          transition
        "
      >
        <span className="text-gray-800 font-medium">{question}</span>

        <svg
          className={`w-5 h-5 text-gray-500 transform transition-transform duration-200 ${isOpen ? "rotate-180" : "rotate-0"}`}
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden
        >
          <path d="M5 8l5 5 5-5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Animated answer panel */}
      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-btn-${id}`}
        className={`
          mt-3 px-5
          overflow-hidden
          transition-all duration-300
          ${isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
        `}
      >
        <div className="pb-4 text-sm text-gray-600">
          {answer}
        </div>
      </div>
    </div>
  );
}

/**
 * FAQs - main section component
 * - uses a list of {question, answer} and renders accordion with single-open behavior
 */
export default function FAQs() {
  const faqs = [
  {
    q: "What problem does this platform solve?",
    a: "It automates high-volume content creation for media, education, advertising, and public outreach, removing delays, manual workload, and content bottlenecks.",
  },
  {
    q: "What types of content can it generate?",
    a: "The platform generates scripts, articles, blogs, social media posts, educational material, posters, and ad copy—all in one place.",
  },
  {
    q: "Does it support multiple languages?",
    a: "Yes. It can create multilingual content with cultural nuance, making communication accessible to diverse audiences.",
  },
  {
    q: "Do I need technical or design skills?",
    a: "No. The system is built for ease of use. Anyone can generate ready-to-publish content without writing or design expertise.",
  },
  {
    q: "How does it ensure content relevance?",
    a: "The platform adapts outputs based on audience type, tone, and trending topics, ensuring context-aware and up-to-date content every time.",
  },
];


  const [openIndex, setOpenIndex] = useState(0); // default first open; set to null if none

  const toggle = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <div className="bg-white rounded-3xl p-10 ">
        <header className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">FREQUENTLY ASKED QUESTIONS</h2>
          <p className="text-gray-500 mt-2">Find quick answers to the most common questions</p>
        </header>

        <div className="space-y-4">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              id={i}
              question={f.q}
              answer={f.a}
              isOpen={openIndex === i}
              onToggle={() => toggle(i)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
