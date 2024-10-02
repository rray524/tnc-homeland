import Image from "next/image";
import React from "react";
import about from "@/public/images/about_us.webp";
import SectionTitle from "@/components/section-title";
import StatsCard from "./component";

const AboutUs = () => {
  return (
    <div className="max-w-[1320px] mx-auto" id="about">
      <div className="">
        <div className="max-w-[1320px] relative grid grid-cols-1 sm:text-center lg:grid-cols-2">
          <div className="relative flex items-center justify-center p-2 rounded-lg shadow-lg w-full h-[370px] lg:w-[500px] ml-0 lg:ml-10">
            <Image
              src={about}
              alt="properties"
              className="h-full object-cover object-center"
              priority={false}
            />
            <span
              className="absolute bottom-2 lg:left-10 left-22 bg-white p-3 rounded-xl"
              data-aos="fade-right"
            >
              <h3 className="text-5xl text-red-500 font-bold">5</h3>
              <p className="text-[18px] text-gray-500">Global Top Awards</p>
            </span>
          </div>

          <div className="text-left p-3 my-10 lg:my-1">
            <SectionTitle
              title="ABOUT US"
              subtitle="Browse our Wide Selection of Luxury Properties"
              description="Discover Your Dream Home with TNC Real Estate. Our deep market insights and commitment to excellence ensure a seamless and enjoyable real estate journey."
              titleClass="text-[16px] text-yellow-500 font-bold"
              subtitleClass="text-[28px] lg:text-[40px] font-bold dark:text-white"
              descriptionClass="font-semibold text-gray-500 text-[18px] my-10"
            />
            <div className="grid grid-cols-3">
              <StatsCard value="15" label="Years of Experience" />
              <StatsCard value="100+" label="Total Sold Properties" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
