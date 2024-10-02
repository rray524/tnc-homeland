import React from "react";
import { useForm, SubmitHandler, FormProvider } from "react-hook-form";
import FormField from "./components/form-field";
import { sendMail } from "./action";
import { useToast } from "@/context/toast-context";
import { FaEnvelope, FaHome, FaPhoneAlt } from "react-icons/fa";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
}

type FormValues = {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

const Modal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  const methods = useForm<FormValues>({
    mode: "onChange",
  });
  const { showToast } = useToast();
  const {
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit: SubmitHandler<FormValues> = async (data) => {
    const templateParams = {
      from_email: data.email,
      name: data.name,
      phone: data.phone,
      email: data.email,
      message: data.message,
    };

    try {
      await sendMail(templateParams);
      showToast("Your message has been sent successfully!", "success");
      reset();
      onClose();
    } catch (error) {
      showToast("There was an error sending your message.", "error");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 ">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden w-11/12 lg:w-[85%] xl:w-[70%] overflow-y-auto max-h-[450px] scrollable-container">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">Contact Information</h2>
          <button
            onClick={onClose}
            className="text-black text-2xl h-8 w-8 rounded-full border flex items-center justify-center"
          >
            &times;
          </button>
        </div>
        <div className="flex flex-col lg:flex-row">
          <div className="p-4 bg-white shadow-custom-shadow rounded-lg m-0 md:m-4 w-full lg:w-1/2">
            <div className="p-6">
              <p className="text-gray-700 mb-4 text-left">
                Contact TNC Homeland for tailored property solutions.
              </p>
              <div className="flex items-center mb-2 gap-2">
                <FaHome className="w-6 h-6 text-gray-500" />
                <p>2X64 Royal Ln. Mesa, New Jersey 454XX</p>
              </div>
              <div className="flex items-center mb-2 gap-2">
                <FaPhoneAlt className="w-5 h-5 text-gray-500 " />
                <p>(406) 555-01XX</p>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="w-5 h-5 text-gray-500" />
                <p>tnchomelandX@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/2">
            <FormProvider {...methods}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-4"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <FormField
                    name="name"
                    type="text"
                    placeholder="Name"
                    validationRules={{ required: "Name is required" }}
                  />
                  <FormField
                    name="phone"
                    type="text"
                    placeholder="Phone No"
                    validationRules={{
                      required: "Phone number is required",
                      pattern: {
                        value: /^\d{10}$/,
                        message: "Phone number must be 10 digits & neumaric",
                      },
                    }}
                    maxLength={10}
                  />
                  <FormField
                    name="email"
                    type="email"
                    placeholder="Email"
                    validationRules={{
                      required: "Email is required",
                      pattern: {
                        value:
                          /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                        message: "Please enter a valid email address",
                      },
                    }}
                  />
                  <FormField
                    name="subject"
                    type="text"
                    placeholder="Subject"
                    validationRules={{ required: "Subject is required" }}
                  />
                </div>
                <FormField
                  name="message"
                  type="textarea"
                  placeholder="Your Message"
                  validationRules={{ required: "Message is required" }}
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 text-white p-3 rounded"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Submitting..." : "Send Message"}
                </button>
              </form>
            </FormProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
