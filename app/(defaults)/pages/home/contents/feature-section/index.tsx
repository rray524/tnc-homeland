"use click";
import React, { useState } from "react";
import Image from "next/image";
import about from "@/public/images/cardtwo-2.png";
import SectionTitle from "@/components/section-title";
import FeatureStats from "./components/feature-stats";
import ContactButton from "./components/contact-button";
import Modal from "@/components/modal";

const FeatureSection: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="max-w-[1320px] mx-auto lg:my-[100px]" id="featured">
      <div className="">
        <div className="max-w-[1320px] relative grid grid-cols-1 sm:text-center lg:grid-cols-2 justify-items-center">
          <div className="text-left p-3 my-10 lg:my-1" data-aos="fade-right">
            <SectionTitle
              title="FEATURED OF MONTH"
              subtitle="Stunning Three-Bedroom Home with Spacious Backyard"
              description="Explore Our Handpicked Selection of Premier Properties Across Various Budgets and Locations. Whether you're looking for a cozy apartment or a luxurious estate, TNC Real Estate has something for everyone."
              titleClass="text-[16px] text-yellow-500 font-semibold"
              subtitleClass="text-[30px] sm:text-[40px] font-semibold dark:text-white"
              descriptionClass="text-[15px] sm:text-[18px] my-5 dark:text-gray-500"
            />
            <FeatureStats />
            <ContactButton
              text="Contact for Buying"
              onClick={() => setModalOpen(true)}
            />
          </div>

          <div
            className="relative flex items-center justify-center p-2 rounded-lg shadow-lg w-full h-[370px] lg:w-[500px] ml-0 lg:ml-10"
            data-aos="fade-left"
          >
            <Image
              src={about}
              alt="properties"
              className="h-full object-cover object-center"
              priority={false}
            />
            <span className="absolute bottom-2 lg:left-10 left-22 bg-white p-3 rounded-xl">
              <h1 className="text-4xl sm:text-5xl text-red-500 font-bold">5</h1>
              <p className="text-[16px] sm:text-[18px] text-gray-500">
                Global Top Awards
              </p>
            </span>
          </div>
        </div>
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
};

export default FeatureSection;
