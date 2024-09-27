import React from "react";

type ButtonProps = {
  label: string;
  className?: string;
  onClick?: () => void; // Pour gérer les clics sur le bouton
};

const Button: React.FC<ButtonProps> = ({
  label,
  className,
  onClick
}) => {
  return (
    <input
      type="button"
      value={label}
      className={`${
        className ? className : "border rounded-sm  border-gray-400 outline-none focus:border-primary focus:ring-primary "
      }`}
      onClick={onClick}
    />
  );
};

export default Button;
