import React from "react";

interface PropertyTypeProps {
  category: string;
  status: string;
}

const PropertyType: React.FC<PropertyTypeProps> = ({ category, status }) => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center px-3 lg:px-0">
      <div className="flex items-center gap-2">
        <p className="dark:text-white">Property Status: </p>
        <p className="capitalize rounded-full bg-yellow-500 py-1 px-2 text-xs font-medium text-white w-auto my-3 flex items-center justify-center">
          {category}
        </p>
      </div>
      <div className="flex items-center gap-2">
        <p className="dark:text-white">Available For: </p>
        <p className="capitalize rounded-full bg-green-500 py-1 px-2 text-xs font-medium text-white w-auto my-3 flex items-center justify-center">
          {status}
        </p>
      </div>
    </div>
  );
};

export default PropertyType;
