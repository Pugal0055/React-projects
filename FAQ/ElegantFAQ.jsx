import React, { useState } from "react";
import "./ElegantFAQ.css";

const ElegentFAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is React?",
      answer:
        "React is a JavaScript library for building user interfaces, particularly for single-page applications.",
    },
    {
      question: "How do you create a React component?",
      answer:
        'You can create a React component by using the "function" or "class" syntax.',
    },
    {
      question: "What is JSX?",
      answer:
        "JSX (JavaScript XML) is a syntax extension for React that allows you to write HTML-like code in your JavaScript.",
    },
  ]);

  const toggleAccordion = (index) => {
    console.log(faqs, "check");

    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => {
        return i === index
          ? { ...faq, isOpen: !faq.isOpen }
          : { ...faq, isOpen: false };
      })
    );
  };

  return (
    <div className="faq-accordion-container">
      <h2 className="faq-title">Frequently Asked Questions</h2>
      <p className="faq-description">
        Get answers to commonly asked questions about React.
      </p>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className={`faq-item ${faq.isOpen ? "open" : ""}`}
          onClick={() => toggleAccordion(index)}
        >
          <div className="faq-question">
            {faq.question}
            <span className={`expand-icon ${faq.isOpen ? "open" : ""}`}>▼</span>
          </div>
          <div className={`faq-answer ${faq.isOpen ? "open" : ""}`}>
            {faq.answer}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ElegentFAQ;
