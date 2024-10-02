import SectionTitle from "@/components/section-title";
import { FetureData } from "@/data/featured-data";
import Image from "next/image";
import React from "react";

const ServiceCards = () => {
  return (
    <div className="my-0 lg:my-20 max-w-[1320px] mx-auto">
      <div className="my-5 mx-10" data-aos="fade-left">
        <SectionTitle
          title="WHY CHOOSE US"
          subtitle="Discover Your Dream Home: Browse our Wide Selection of Luxury Properties"
          titleClass="text-[16px] text-yellow-500 text-right font-bold dark:text-white"
          subtitleClass="md:text-[42px] text-[23px] font-semibold text-right dark:text-white"
        />
        <hr className="border-black dark:border-white my-5" />
      </div>
      <div className="">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-6 text-center lg:grid-cols-4 px-4 md:px-12">
          {FetureData.map((card, index) => (
            <div
              key={index}
              className="my-6 bg-white rounded-lg shadow-lg border border-transparent dark:border-gray-700 hover:shadow-xl flex flex-col items-center justify-center"
              data-aos="fade-up"
              data-aos-delay={50 * (index + 1)}
            >
              <div className="lg:h-[200px] h-[150px] mx-auto flex items-center justify-center">
                <Image
                  src={card.image}
                  alt="card"
                  className="object-cover"
                  height={110}
                  width={100}
                  priority={false}
                />
              </div>

              <h5 className="my-2 text-[18px] mx-4 tracking-tight text-gray-700 dark:text-black text-center">
                {card.type}
              </h5>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServiceCards;
