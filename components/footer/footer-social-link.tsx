"use client";
import { useToast } from "@/context/toast-context";
import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { sendMail } from "../modal/action";
import { useForm } from "react-hook-form";
type FormData = {
  email: string;
};
const FooterSocialLinks: React.FC = () => {
  const { showToast } = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      from_email: data.email,
      email: data.email,
    };

    try {
      await sendMail(templateParams);
      showToast("Your email has been subscribed successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error subscribing your email.", "error");
    }
  };
  return (
    <div>
      <h1 className="text-[20px] font-semibold my-5 dark:text-white">
        Newsletter
      </h1>
      <p className="text-[17px] py-1 text-gray-600 dark:text-gray-200 ">
        Stay informed about the latest real estate trends and offerings.
      </p>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col xl:flex-row items-center mt-3 mb-1 space-y-2 xl:space-y-0 md:space-x-1"
        noValidate
      >
        <input
          type="email"
          placeholder="example@gmail.com"
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.(com|net|org|edu|gov|co|info|io|biz|us|uk|ca|de|fr|jp|cn|au|ru|in|ch|es|it|nl|se|no)$/,
              message: "Please enter a valid email address",
            },
          })}
          className="block w-full xl:w-auto px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
        />
        <div className="w-full xl:w-auto">
          <button
            type="submit"
            className="px-6 py-3 w-full xl:w-auto text-white text-[18px] rounded bg-yellow-500 duration-1000 hover:bg-blue-800 hover:text-white "
            disabled={isSubmitting}
          >
            {isSubmitting ? "..." : <FaLocationArrow />}
          </button>
        </div>
      </form>
      {errors.email && (
        <p className="text-red-500 pl-4">{errors.email.message}</p>
      )}
      <div className="flex flex-wrap justify-center lg:justify-start gap-3 my-3">
        <span className="p-1.5 border rounded-full bg-blue-900 text-white hover:bg-red-500 hover:text-white text-sm sm:text-base md:text-lg">
          <FaFacebook />
        </span>
        <span className="p-1.5 border rounded-full shadow bg-white-900 text-red-500 hover:bg-red-500 hover:text-white text-sm sm:text-base md:text-lg">
          <FaYoutube />
        </span>
        <span className="p-1.5 border rounded-full shadow text-blue-500 hover:bg-red-500 hover:text-white text-sm sm:text-base md:text-lg">
          <FaTwitter />
        </span>
        <span className="p-1.5 border rounded-full shadow text-red-500 hover:bg-red-500 hover:text-white text-sm sm:text-base md:text-lg">
          <FaInstagram />
        </span>
      </div>
    </div>
  );
};

export default FooterSocialLinks;
