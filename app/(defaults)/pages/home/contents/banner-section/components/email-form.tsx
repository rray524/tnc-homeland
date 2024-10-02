import { sendMail } from "@/app/(defaults)/properties/[id]/action";
import { useToast } from "@/context/toast-context";
import React from "react";
import { useForm } from "react-hook-form";
import { FaLocationArrow } from "react-icons/fa";

interface FormData {
  email: string;
}

const EmailForm: React.FC = () => {
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
      showToast("Your request have been sent successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex flex-col shadow-custom-shadow p-5 gap-2 dark:bg-gulf-blue items-start"
        data-aos="fade-up"
        noValidate
      >
        <div className="flex flex-col sm:flex-row gap-2 w-full ">
          <input
            type="email"
            placeholder="example@gmail.com"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                message: "Please enter a valid email address",
              },
            })}
            className="w-full sm:w-[500px] px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-40"
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="px-6 py-3 w-full md:w-auto text-white font-semibold text-[18px] rounded bg-red-500 duration-1000 hover:bg-blue-800 hover:text-white"
          >
            {isSubmitting ? "Sending..." : <FaLocationArrow />}
          </button>
        </div>
        {errors.email && (
          <p className="text-red-500 pl-4 mt-0">{errors.email.message}</p>
        )}
      </form>
    </>
  );
};

export default EmailForm;
