"use client";
import ContactButton from "@/components/button/contact-button";
import React, { useState } from "react";
import CTAsectionTitle, { CTAsectionSubtitle } from "./component";
import Modal from "@/components/modal";
type ctaprops = {
  isSingle?: boolean;
};
const CTASection: React.FC<ctaprops> = ({ isSingle }) => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div
      className={`max-w-[1320px] mx-auto ${
        isSingle ? "lg:my-[20px]" : "lg:my-[100px]"
      } px-4 sm:px-6 lg:px-8`}
    >
      <div className="">
        <div className="relative grid grid-cols-1 content-center bg-red-500 rounded-xl p-10 sm:text-center">
          <CTAsectionTitle text="Do you have questions?" />
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-10 mt-5 sm:mt-0">
            <CTAsectionSubtitle text="Call or text today, we are here to help!" />
            <ContactButton
              text="Contact us"
              onClick={() => setModalOpen(true)}
            />
            <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
          </div>
          <p className="text-white text-3xl mt-5 sm:mt-0 text-center sm:text-left">
            916-555-2284
          </p>
        </div>
      </div>
    </div>
  );
};

export default CTASection;
