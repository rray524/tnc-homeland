import React from "react";
import StarRating from "./star-component";

interface TestimonialProps {
  text: string;
  author: string;
  position: string;
  rating: number;
}

const Testimonial: React.FC<TestimonialProps> = ({
  text,
  author,
  position,
  rating,
}) => {
  return (
    <div className="p-4 sm:p-6 text-center">
      <div className="flex text-left mb-2 sm:mb-4"></div>
      <p className="text-base sm:text-lg text-left italic text-gray-900 dark:text-gray-200 mb-2 sm:mb-4">
        {text}
      </p>
      <h3 className="text-lg sm:text-[20px] text-left font-semibold my-1 dark:text-white">
        {author}
      </h3>
      <p className="text-gray-600 text-[15px] text-left dark:text-gray-50">
        {position}
      </p>
      <div className="flex text-left mb-2 sm:mb-4 my-5">
        <StarRating rating={rating} />
      </div>
      <hr className="border-black my-5 dark:border-white" />
    </div>
  );
};

export default Testimonial;
