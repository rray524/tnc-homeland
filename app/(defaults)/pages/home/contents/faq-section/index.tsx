import SectionTitle from "@/components/section-title";
import { frequentlayAskQuestion } from "@/data/faq-data";
import React, { useState, useCallback } from "react";
import { FaPlus } from "react-icons/fa";
import { GoDash } from "react-icons/go";

interface AccordionItem {
  title: string;
  description: string;
}

const FAQSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = useCallback((index: number) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  }, []);

  return (
    <div className="max-w-[800px] mx-auto my-10 p-[10px]" id="faq">
      <div className="">
        <div className="text-center">
          <SectionTitle
            title="FAQS"
            subtitle="Frequently asked questions"
            description="Unlocking Essential Information: Explore and Find Answers to Frequently Asked Questions about TNC Real Estate Services."
            titleClass="text-[18px] text-yellow-500 font-semibold"
            subtitleClass="lg:text-[45px] text-[28px] font-semibold my-5 dark:text-white"
            descriptionClass="text-[17px] text-gray-500"
          />
        </div>
        <div className="w-full my-5 flex justify-center">
          <div className="w-[1320px] rounded-lg">
            {frequentlayAskQuestion.map(
              (item: AccordionItem, index: number) => (
                <div
                  key={index}
                  className="dark:border-b last:border-b-0 shadow-faq-shadow my-7 cursor-pointer"
                >
                  <div
                    className={`px-5 py-3 flex items-center justify-between ${
                      activeIndex === index
                        ? "bg-gray-100 rounded-md dark:bg-gulf-blue"
                        : ""
                    }`}
                    onClick={() => toggleAccordion(index)}
                  >
                    <p className="flex-1 text-left text-[18px] font-normal dark:text-white">
                      {item.title}
                    </p>
                    <span className="shadow-lg w-[20px] rounded-full bg-yellow-500 h-[20px] flex items-center font-bold justify-center text-white">
                      {activeIndex === index ? <GoDash /> : <FaPlus />}
                    </span>
                  </div>
                  {activeIndex === index && (
                    <div className="px-5 py-4">
                      <p className="flex-1 dark:text-white">
                        {item.description}
                      </p>
                    </div>
                  )}
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQSection;
