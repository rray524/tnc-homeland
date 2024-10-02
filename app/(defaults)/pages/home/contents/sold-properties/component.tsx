import React from "react";
import { LuScale3D } from "react-icons/lu";
import { FaBed, FaBath } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import DetailsButton from "./components/details-button";
import { formatPrice } from "@/helpers/utils";

interface PropertyCardProps {
  image: string;
  squre: number;
  bedrooms: number;
  bathrooms: number;
  name: string;
  location: string;
  price: string;
  category: string;
  link: string;
}

const PropertyCard: React.FC<PropertyCardProps> = ({
  image,
  squre,
  bedrooms,
  bathrooms,
  name,
  location,
  price,
  category,
  link,
}) => {
  return (
    <div className="border bg-white shadow-lg w-full sm:w-auto transform transition-transform hover:scale-105 duration-500 dark:bg-gulf-blue">
      <div className="h-[225px] overflow-hidden relative">
        <Link href={`properties/${link}`}>
          <Image
            src={image}
            alt="card"
            className="w-full h-full object-cover object-center hover:scale-125 duration-1000"
            width={900}
            height={700}
            priority={false}
          />
        </Link>
        <span
          className={`absolute top-0 left-0 bg-red-500 mt-3  p-2 text-[15px] font-semibold text-white ${
            category === "pre-constructed" ? "w-[155px]" : "w-[55px]"
          }`}
        >
          {category}
        </span>
      </div>
      <div className="border-gray-300 my-4">
        <div className="flex flex-wrap lg:justify-start space-x-2">
          <span className="py-1 text-[14px] px-5 mb-2 flex items-center">
            <LuScale3D className="mr-2 text-red-500 text-xl" />
            <span className="font-semibold text-gray-600 dark:text-white">
              {squre}
            </span>
          </span>
          <span className="py-2 text-[14px] px-5 mb-2 flex items-center">
            <FaBed className="mr-2 text-red-500 text-xl" />
            <span className="font-semibold text-gray-600 dark:text-white">
              {bedrooms}
            </span>
          </span>
          <span className="py-1 text-[14px] px-5 mb-2 flex items-center">
            <FaBath className="mr-2 text-red-500 text-xl" />
            <span className="font-semibold text-gray-600 dark:text-white">
              {bathrooms}
            </span>
          </span>
        </div>
      </div>

      <p className="mb-3 text-[15px] mx-4 text-gray-500 text-left dark:text-white h-[46px]">
        {location}
      </p>
      <div className="flex justify-between items-center p-4">
        <p className="my-2 text-[13px] sm:text-[15px] md:text-[18px] text-red-500 font-bold dark:text-white">
          ${formatPrice(price)}
        </p>
        <Link href={`properties/${link}`}>
          <DetailsButton text="View Details" />
        </Link>
      </div>
    </div>
  );
};

export default PropertyCard;
