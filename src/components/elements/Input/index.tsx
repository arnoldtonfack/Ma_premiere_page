import React from "react";
import { ErrorMessage, FieldHookConfig, useField } from "formik";

type Props = FieldHookConfig<string> & {
  label?: string;
  placeholder?:string
  type?: string
  className?: string
  containerClassName?: string;
  labelClassName?: string;
};

const Input: React.FC<Props> = ({
  label,
  placeholder,
  className,
  type = "text",
  containerClassName,
  labelClassName,
  ...props
}) => {
  const [field, meta] = useField(props);
    
  
  return (
    <div
      className={`${
        containerClassName ? containerClassName : "flex flex-col gap-1"
      }`}
    >
      {label && (
        <label
          htmlFor={props.name}
          className={`${
            labelClassName ? labelClassName : "text-sm first-letter:uppercase"
          }`}
        >
          {label}
        </label>
      )}

      <input
        {...field}
        {...meta}
        type={type}
        id={props.name}
        placeholder={placeholder}
        className="border rounded-sm  w-full  border-gray-400 p-5  outline-none focus:border-primary focus:ring-primary"
      />
      <ErrorMessage
        name={props.name}
        component={"small"}
        className="text-red-600"
      />
    </div>
  );
};

export default Input;
