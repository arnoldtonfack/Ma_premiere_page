import React from 'react'
type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  color?: 'primary' | 'secondary' | 'danger';
  theme?: 'small' | 'big';
};

const Button:React.FC<ButtonProps> = ({children, className, color, theme}) => {
  let background
switch (color) {
  case 'secondary': background = 'bg-secondary hover:bg-secondary-hover'
    break;

    case 'danger': background = 'bg-red-primary hover:bg-red-primary-hover'
    break

  default: background = 'bg-primary hover:bg-primary-hover'
    break;
}
  
  switch (theme) {
    case 'small':
      return (
        <div >
          <button className={`${className}  ${background}  px-4  py-2 text-sm font-medium  shadow-xl cursor-pointer uppercase text-white  text-center  transition duration-500 ease-out`}>{children}</button>
        </div>
      )

      case 'big':
        return (
          <div >
            <button className={`${className}  ${background} px-4 py-3 md:px-4 md:py-3 text-xs  font-medium  shadow-xl md:text-base cursor-pointer uppercase text-white tracking-widest  text-center  transition duration-500 ease-out`}>{children}</button>
          </div>
        )
    
    default:

    return (
      <div >
        <button className={`${className} px-4 ${background}  py-3 text-xs md:text-sm font-medium  shadow-xl cursor-pointer uppercase text-white  text-center  transition duration-500 ease-out`}>{children}</button>
      </div>
    )
      
  }
 
}

export default Button