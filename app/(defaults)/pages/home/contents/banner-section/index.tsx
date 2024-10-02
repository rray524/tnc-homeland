import React, { useState } from "react";
import Image from "next/image";
import propeties from "@/public/images/banner.webp";
import BannerTitle from "./components/banner-title";
import EmailForm from "./components/email-form";
import { ToggleButton } from "./components/toggle-button";

const Banner: React.FC = () => {
  const [toggle, setToggle] = useState(1);

  const handleToggle = (id: number) => {
    setToggle(id);
  };

  return (
    <div className="pb-[10px] pt-[100px] lg:pb-[100px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="flex flex-col-reverse lg:flex-row lg:gap-[50px] items-center sm:text-center mt-20">
          <div className="text-left p-3 my-10 lg:my-1">
            <BannerTitle
              title="YOUR DREAM HOME AWAITS."
              subtitle=" - Seize the opportunity today!"
              titleClass="text-[28px] lg:text-[40px] font-bold dark:text-white uppercase"
              subtitleClass="text-yellow-500 text-[28px] lg:text-[35px] font-semibold"
              titleAnimation="fade-down"
              subtitleAnimation="fade-down"
              descriptionAnimation="fade-up"
            />

            <div className="flex mt-10" data-aos="fade-up">
              <ToggleButton
                label="Rent"
                isActive={toggle === 1}
                onClick={() => handleToggle(1)}
              />
              <ToggleButton
                label="Buy"
                isActive={toggle === 2}
                onClick={() => handleToggle(2)}
              />
            </div>

            {toggle === 1 ? <EmailForm /> : <EmailForm />}
          </div>
          <div className="relative max-lg:pb-9  dark:z-20">
            <div
              className="absolute bg-banner-red  h-[470px] right-0 top-32 w-[700px] -z-10 mr-[-506px] mt-[-176px]"
              data-aos="fade-left"
              data-aos-delay="350"
            ></div>
            <div
              className="p-2 rounded-lg shadow-lg mx-auto w-full max-w-[500px] h-[370px]"
              data-aos="fade-left"
            >
              <Image
                src={propeties}
                alt="properties"
                className="w-full h-full object-cover object-center rounded-lg"
                priority={false}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
