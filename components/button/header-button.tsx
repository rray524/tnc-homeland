import React from "react";

interface HeaderButtonProps {
  text: string;
  onClick?: () => void;
}

const HeaderButton: React.FC<HeaderButtonProps> = ({ text, onClick }) => {
  return (
    <button
      className="sm:text-center text-center !bg-red-500 text-[17px] px-8 py-3 rounded-lg text-white font-semibold relative inline-flex items-center justify-center p-4 overflow-hidden  transition duration-500 ease-out shadow-md group"
      onClick={onClick}
    >
      <span className="absolute inset-0 flex items-center justify-center w-full h-full text-white duration-300 -translate-x-full bg-yellow-500 group-hover:translate-x-0 ease">
        <svg
          className="w-6 h-6 text-gray-100"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2zm0 2v1.2l8 4.8 8-4.8V6H4zm16 12V8.8l-8 4.8-8-4.8V18h16z" />
        </svg>
      </span>
      <span className="absolute flex items-center justify-center w-full h-full text-gray-100 transition-all duration-300 transform group-hover:translate-x-full ease">
        {text}
      </span>
      <span className="relative invisible"> {text}</span>
    </button>
  );
};

export default HeaderButton;
