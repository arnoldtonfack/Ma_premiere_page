import React, { ReactNode } from "react";
type HeatingProps = {
  children: ReactNode;
  variante?: string;
  theme?: string; //style comme la police
  display?: string; // color
  alignement?: string
  className?: string
};

const Heating: React.FC<HeatingProps> = ({
  children,
  variante,
  theme,
  display,
  alignement,
  className
}) => {
  const classDefault = " uppercase ";
  let font;
  let color;
  let align;

  switch (theme) {
    case "secondary":
      font = "font-secondary";
      break;
    default:
      font = "tracking-tighter";
  }
  switch (display) {
    case "gray":
      color = "text-gray-600";
      break;
    default:
      color = "text-secondary";
  }
  switch (alignement) {
    case "center":
      align = "justify-center";
      break;
    case "right":
      align = "justify-end";
      break;
    default:
      align = "justify-start";
  }
  switch (variante) {
    case "h3":
      return (
        <div className={`flex ${align}`}>
          <h3 className={` text-2xl ${classDefault}  ${className} ${font} ${color}`}>
            {children}
          </h3>
        </div>
      );
    case "h4":
      return (
        <div className={`flex ${align}`}>
          <h3 className={` text-lg ${classDefault} ${className}  ${font} ${color}`}>
            {children}
          </h3>
        </div>
      );

    default:
      return (
        <div  className={`flex ${align}`}>
          <h2 className={` ${className}   ${theme === "secondary"? "text-5xl ": "text-3xl"} ${classDefault} ${font} ${color}`}>
            {children}
          </h2>
        </div>
      );
  }
};

export default Heating;
