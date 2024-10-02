import React from "react";
interface CustomButtonProps {
  text: string;
}
const DetailsButton: React.FC<CustomButtonProps> = ({ text }) => {
  return (
    <button className="bg-yellow-500 text-white font-semibold py-2 px-2 sm:py-2 sm:px-2 md:py-3 md:px-5 lg:py-2 lg:px-5 relative inline-flex items-center justify-center overflow-hidden transition duration-500 ease-out shadow-md group">
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-red-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6 text-gray-100"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
          <path
            d="M12 11l8-8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-gray-100 transition-all duration-300 transform group-hover:translate-x-full ease">
        {text}
      </span>
      <span className="relative invisible">{text}</span>
    </button>
  );
};

export default DetailsButton;
