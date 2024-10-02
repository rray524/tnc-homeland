"use client";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import SectionTitle from "@/components/section-title";
import { sendMail } from "../action";
import FormField from "./form-field";
import { useToast } from "@/context/toast-context";

interface FormData {
  name: string;
  email: string;
  contact: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const { showToast } = useToast();
  const methods = useForm<FormData>();

  const {
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (data: FormData) => {
    const templateParams = {
      from_email: data.email,
      firstName: data.name.split(" ")[0],
      lastName: data.name.split(" ")[1] || "",
      phone: data.contact,
      email: data.email,
      message: data.message,
    };

    try {
      await sendMail(templateParams);
      showToast("Your message have been sent successfully!", "success");
      reset();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  return (
    <div
      className="dark:border max-w-[800px] mx-auto bg-white p-8 rounded-lg shadow-md dark:bg-gulf-blue my-8"
      id="contact"
    >
      <SectionTitle
        title="CONTACT US"
        subtitle='"Get In Touch With Us Contact TNC Homeland Today!"'
        description="Fill up the forms with your contact information"
        titleClass="text-Bold text-orange-500 my-2 text-center"
        subtitleClass="font-semibold text-4xl dark:text-white text-center"
        descriptionClass="my-5 dark:text-white text-center"
      />
      <FormProvider {...methods}>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="space-y-4"
          noValidate
        >
          <FormField
            id="name"
            label="Name"
            placeholder="John Doe"
            validation={{ required: "Name is required" }}
            type="text"
          />
          <FormField
            id="email"
            label="Email"
            placeholder="@abcgmail.com"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            }}
            type="email"
          />
          <FormField
            id="contact"
            label="Phone Number"
            placeholder="+123-1200-254"
            validation={{
              required: "Phone number is required",
              pattern: {
                value: /^\d{10}$/,
                message: "Phone number must be 10 digits & neumaric",
              },
            }}
            type="text"
            maxLength={10}
          />
          <FormField
            id="message"
            label="Message"
            placeholder="Enter text here..."
            validation={{ required: "Message is required" }}
            type="textarea"
          />
          <div className="my-5">
            <button
              type="submit"
              className="w-full bg-yellow-500 text-white p-2 rounded-md shadow-md hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default ContactForm;
