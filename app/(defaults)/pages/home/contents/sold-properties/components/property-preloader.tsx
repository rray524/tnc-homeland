import React from "react";

const PreloadingProperty = () => {
  return (
    <div className="animate-pulse space-y-2">
      <div className="bg-gray-200 h-48"></div>
      <div className="flex-1 space-y-2">
        <div className="h-16 bg-gray-200 w-full"></div>
        <div className="space-x-2 flex">
          <div className="h-8 bg-gray-200 w-full"></div>
          <div className="h-8 bg-gray-200 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default PreloadingProperty;
