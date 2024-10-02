import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  id: string;
  label: string;
  placeholder: string;
  validation: any;
  type: "text" | "email" | "tel" | "textarea" | "number";
  maxLength?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  id,
  label,
  placeholder,
  validation,
  maxLength,
  type,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();
  return (
    <div>
      <label
        htmlFor={id}
        className="block text-[16px] font-medium text-gray-700 text-left dark:text-white"
      >
        {label}
      </label>
      {type === "textarea" ? (
        <textarea
          id={id}
          placeholder={placeholder}
          {...register(id, validation)}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        ></textarea>
      ) : (
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          {...register(id, validation)}
          maxLength={maxLength}
          pattern={id === "contact" ? "\\d*" : undefined}
          className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
        />
      )}
      {errors[id] && (
        <p className="text-red-500">{errors[id]?.message?.toString()}</p>
      )}
    </div>
  );
};

export default FormField;
