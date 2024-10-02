import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { testimonials } from "@/data/testimonial-data";
import Testimonial from "./components/slider-component";

const TestimonialSsection: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: (
      <button className="slick-prev bg-black text-white p-2 rounded-full shadow-md">
        ←
      </button>
    ),
    nextArrow: (
      <button className="slick-next bg-black text-white p-2 rounded-full shadow-md">
        →
      </button>
    ),
    appendDots: (dots: React.ReactNode) => (
      <div>
        <ul className="flex justify-center space-x-2 mt-4">{dots}</ul>
      </div>
    ),
    customPaging: () => (
      <div className="w-3 h-3 bg-red-500 rounded-full cursor-pointer active-dot"></div>
    ),
  };

  return (
    <div className="bg-testimonial-bg dark:bg-gulf-blue" id="testimonial">
      <div
        className="max-w-[1320px] mx-auto flex flex-col md:flex-row newBanner bg-no-repeat relative bg-right-bottom bg-blend-darken bg-contain newBanner-mobile-hidden"
        data-aos="fade-up"
      >
        <div className="my-20">
          <div
            className=" grid lg:grid-cols-2 md:grid-cols-1 grid-cols-1"
            data-aos="fade-right"
          >
            <Slider {...settings}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="px-2 sm:px-4">
                  <Testimonial
                    text={testimonial.text}
                    author={testimonial.author}
                    position={testimonial.position}
                    rating={testimonial.rating}
                  />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSsection;
