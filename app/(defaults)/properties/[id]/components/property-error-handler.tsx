import React from "react";

const PropertyNotFoundFallback = () => {
  return (
    <div className="my-16 w-[70%] mx-auto text-center min-h-[300px] flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mb-4 dark:text-white">
        Property Not Found
      </h1>
      <p className="text-xl my-10 dark:text-gray-400">
        Sorry, the property you are looking for does not exist or has been
        removed.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-yellow-400 text-white text-sm font-medium rounded hover:bg-red-500 transition duration-200"
      >
        Go Back Home
      </a>
    </div>
  );
};

export default PropertyNotFoundFallback;
