import React from "react";
import { FaHome, FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import headerImage from "@/public/images/header_image.webp";
import Image from "next/image";

const FooterContactInfo: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      <div>
        <Image
          src={headerImage}
          className="h-[40px] mx-auto md:mx-0 w-[50%]"
          alt="header-image"
          width={200}
          height={45}
          priority={false}
        />
      </div>
      <p className="text-[17px]  text-gray-600 text-center md:text-left dark:text-gray-200 ">
        Discover your dream home with TNC Homeland Real Estate.
      </p>
      <div className="flex flex-col md:flex-row md:items-center  text-gray-600 dark:text-gray-200 ">
        <FaHome className="mr-6 text-3xl text-center md:text-left w-full md:w-[15%]" />
        <span>4XX7 Washington Ave. Manchester, Kentucky 394XX.</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center  text-gray-600 dark:text-gray-200 ">
        <FaPhoneAlt className="mr-2 text-xl  text-center md:text-left w-full md:w-[15%]" />
        <span>(406) 55X-01XX</span>
      </div>
      <div className="flex flex-col md:flex-row md:items-center  text-gray-600 dark:text-gray-200 ">
        <CgMail className="mr-2 text-2xl text-center md:text-left w-full md:w-[15%]" />
        <span>tnchomel@gmail.com</span>
      </div>
    </div>
  );
};

export default FooterContactInfo;
