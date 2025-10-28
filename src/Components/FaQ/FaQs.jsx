import { useState } from "react";
import CustomBtn from "../CustomBtn/CustomBtn";
import { IoMdArrowDropleft } from "react-icons/io";
import { IoMdArrowDropright } from "react-icons/io";

function FaQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "[Add your question here] Lorem ipsum dolor sit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "[Add your question here] Lorem ipsum dolor sit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      question: "[Add your question here] Lorem ipsum dolor sit",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-32 mx-auto bg-white rounded-xl">
      <div className="text-center mb-12 space-y-4">
        <div className="flex justify-center mb-10">
        <img src="/arrowVector.png" alt="image" className="object-cover max-w-[8rem] w-full" />
        </div>
        <div className="flex flex-col items-center gap-y-5">
          <h2 className="text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-muted-foreground max-w-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mauris
            tellus, facilisis eget lacus in.
          </p>
        </div>
      </div>

      <div className="space-y-4 mb-12">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-300 rounded-lg overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-4 flex items-center justify-between bg-card hover:bg-muted transition text-left"
            >
              <span className="font-semibold text-foreground">
                {faq.question}
              </span>
              <svg
                className={`w-5 h-5 text-muted-foreground transition-transform ${
                  openIndex === index ? "rotate-45" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 4v16m8-8H4"
                />
              </svg>
            </button>

            {openIndex === index && (
              <div className="px-6 py-4 bg-background border-t border-gray-300">
                <p className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="text-center">
        <CustomBtn
          label="Contact Me ~ it's free"
          styling="bg-black text-white hover:bg-gray-900"
        />
      </div>
    </section>
  );
}

export default FaQs;
