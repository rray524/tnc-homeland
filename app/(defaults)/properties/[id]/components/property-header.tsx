import React from "react";
import { LuScale3D } from "react-icons/lu";
import { FaBed, FaBath } from "react-icons/fa6";
import { PropertyDetails } from "@/types/types";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PropertySlider from "./image-slider";
import { formatPrice } from "@/helpers/utils";
import PropertyType from "./property-type";

interface PropertyInfoProps {
  property: PropertyDetails;
}

const PropertyInfo: React.FC<PropertyInfoProps> = ({ property }) => {
  const imageUrls = property.image_urls;

  return (
    <div className="flex flex-col items-center justify-center">
      <div className="w-[70%]">
        <PropertyType
          category={property.category}
          status={property.available_for}
        />
      </div>
      <div className="flex items-center justify-between gap-5 md:gap-8 w-[70%]">
        <div>
          <h2 className="font-bold text-3xl text-left dark:text-white">
            {property?.name}
          </h2>
          <p className="text-gray-500 text-[18px] text-left my-3">
            {property.general_details.address}
          </p>
        </div>
        <div>
          <span className="text-xl md:text-3xl text-orange-400 font-semibold my-5">
            ${formatPrice(property.general_details.price)}
          </span>
        </div>
      </div>
      <PropertySlider imageUrls={imageUrls} />
      <div className="border-gray-300 my-4">
        <div className="flex flex-wrap justify-center sm:justify-start space-x-5">
          <span className="py-2 text-[14px] px-5 mb-2 flex items-center bg-gray-200">
            <LuScale3D className="mr-2 text-red-500 text-2xl" />
            <span className="font-semibold text-gray-600">
              {property.square_feet} SqFt
            </span>
          </span>
          <span className="py-2 text-[14px] px-5 mb-2 flex items-center bg-gray-200">
            <FaBed className="mr-2 text-red-500 text-2xl" />
            <span className="font-semibold text-gray-600">
              {property.at_a_glance.beds} Beds
            </span>
          </span>
          <span className="py-2 text-[14px] px-5 mb-2 flex items-center bg-gray-200">
            <FaBath className="mr-2 text-red-500 text-2xl" />
            <span className="font-semibold text-gray-600">
              {property.at_a_glance.baths} Baths
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PropertyInfo;
