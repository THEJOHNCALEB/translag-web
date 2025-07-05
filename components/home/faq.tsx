"use client";

import { useState } from "react";
import { ArrowBigDownIcon, ArrowBigUpIcon } from "lucide-react";

interface FaqItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  toggle: () => void;
}

function FaqItem({ question, answer, isOpen, toggle }: FaqItemProps) {
  return (
    <div
      className='p-4 bg-slate-50 rounded-md border border-stone-300 opacity-70 cursor-pointer'
      onClick={toggle}
    >
      <div className='flex justify-between items-center'>
        <h3 className='text-lg font-semibold text-zinc-900'>{question}</h3>
        <span className='text-zinc-500'>
          {isOpen ? <ArrowBigUpIcon /> : <ArrowBigDownIcon />}
        </span>
      </div>
      {isOpen && <p className='mt-2 text-gray-600 opacity-90'>{answer}</p>}
    </div>
  );
}

export default function Faq() {
  const [faqs, setFaqs] = useState([
    {
      question: "What languages does Translag support?",
      answer:
        "Translag currently supports translation between English and three major African languages: Yoruba, Igbo, and Hausa. Each language comes with its own native voice option for text-to-speech functionality.",
      isOpen: false,
    },
    {
      question: "How does the token system work?",
      answer:
        "Translag uses a token-based system where each translation consumes one token. You can purchase tokens through the app using Paystack. Tokens are non-refundable and non-transferable. The number of tokens required may vary based on the length and complexity of the translation.",
      isOpen: false,
    },
    {
      question: "What voice options are available?",
      answer:
        "Translag offers authentic voice options for each language: Femi for Yoruba, Ngozi for Igbo, Hasan for Hausa, and Lucy for English. These voices are designed to provide natural-sounding speech in their respective languages.",
      isOpen: false,
    },
    {
      question: "Is my translation history saved?",
      answer:
        "Yes, your translation history is automatically saved and stored securely. You can access your past translations at any time, and they are protected by your account's authentication.",
      isOpen: false,
    },
    {
      question: "Can I use Translag offline?",
      answer:
        "Translag requires an internet connection to provide real-time translations and access to the voice features. However, you can view your saved translation history offline.",
      isOpen: false,
    },
  ]);

  function toggleFaq(index: number) {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  }

  return (
    <div className="container my-10 opacity-95 w-full max-w-screen-xl flex-1 justify-center gap-5 px-5 xl:px-0">
      <div className='flex justify-center items-center'>
        <div id='faq' className='w-full pb-10 pt-10 '>
          <div className='sm:mx-20 mx-5'>
            <h2 className='text-3xl font-bold text-black opacity-70 text-center pb-5'>
              Frequently Asked Questions
            </h2>
            <div className='flex flex-col gap-9'>
              {faqs.map((faq, index) => (
                <FaqItem
                  key={index}
                  question={faq.question}
                  answer={faq.answer}
                  isOpen={faq.isOpen}
                  toggle={() => toggleFaq(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
