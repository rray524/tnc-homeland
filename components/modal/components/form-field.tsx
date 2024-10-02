import React from "react";
import { useFormContext } from "react-hook-form";

interface FormFieldProps {
  name: string;
  type: "text" | "email" | "number" | "textarea";
  placeholder: string;
  validationRules?: object;
  maxLength?: number;
}

const FormField: React.FC<FormFieldProps> = ({
  name,
  type,
  placeholder,
  validationRules = {},
  maxLength,
}) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const errorMessage = errors[name]?.message as unknown as string;

  return (
    <div className="text-left">
      {type === "textarea" ? (
        <textarea
          placeholder={placeholder}
          {...register(name, validationRules)}
          className="w-full p-3 border border-gray-300 rounded"
        />
      ) : (
        <input
          type={type}
          placeholder={placeholder}
          {...register(name, validationRules)}
          maxLength={maxLength}
          pattern={name === "phone" ? "\\d*" : undefined}
          className="w-full p-3 border border-gray-300 rounded"
        />
      )}
      {errorMessage && <span className="text-red-500">{errorMessage}</span>}
    </div>
  );
};

export default FormField;
