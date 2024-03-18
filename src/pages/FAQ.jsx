import { useState } from "react";
import Accordion from "../utils/Accordion";

function FAQ() {
  const FAQAndAnswers = [
    {
      id: 1,
      question: "Are you available for full time job?",
      answer:
        "Yes, I am available for a full-time remote position. Please provide more information about your company?",
    },
    {
      id: 2,
      question:
        "Are you open to learning new technologies or stacks for a project?",
      answer:
        "Yes, I'm flexible and open to learning new technologies or stacks for a project.",
    },
    {
      id: 3,
      question: "Are you comfortable on meet/zoom to discuss any project?",
      answer:
        "Certainly, I'm available for Zoom or other meetings to discuss any project.",
    },
    {
      id: 4,
      question: "How do you handle pricing discussions with clients?",
      answer:
        "I approach pricing discussions with clients by carefully considering project scope and the value it delivers.",
    },
  ];

  return (
    <>
      <section
        id="projects"
        className="mt-10 w-full rounded-2xl bg-white px-8 py-12 font-inter lg:px-16"
      >
        <h1 className="pb-4 text-xl font-bold text-deepNaviBlue">
          Frequently Asked Question
        </h1>
        <article>
          {FAQAndAnswers.map((data) => (
            <Accordion
              key={data.id}
              question={data.question}
              answer={data.answer}
            />
          ))}
        </article>
      </section>
    </>
  );
}

export default FAQ;