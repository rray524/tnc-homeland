import React from "react";
import { LuScale3D } from "react-icons/lu";
import { FaBed, FaBath } from "react-icons/fa6";

const FeatureStats: React.FC = () => {
  return (
    <div className="border-gray-300">
      <div className="flex flex-wrap justify-center sm:justify-start space-x-2">
        <span className="py-2 text-[14px] px-5 bg-gray-200 mb-2 flex items-center">
          <LuScale3D className="mr-2 text-red-500 text-xl" />
          <span className="font-semibold text-gray-600">960 SqFt</span>
        </span>
        <span className="py-2 text-[14px] px-5 bg-gray-200 mb-2 flex items-center">
          <FaBed className="mr-2 text-red-500 text-xl" />
          <span className="font-semibold text-gray-600">3 Beds</span>
        </span>
        <span className="py-2 text-[14px] px-6 bg-gray-200 mb-2 flex items-center">
          <FaBath className="mr-2 text-red-500 text-xl" />
          <span className="font-semibold text-gray-600">3 Baths</span>
        </span>
      </div>
    </div>
  );
};

export default FeatureStats;
