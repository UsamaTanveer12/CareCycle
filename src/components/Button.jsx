import React from 'react';

const Button = ({ 
  children, 
  onClick, 
  type = 'primary', 
  size = 'medium', 
  fullWidth = false,
  className = '',
  disabled = false,
  ...props 
}) => {
  const baseClasses = "font-bold transition-all duration-300 transform hover:scale-105 cursor-pointer rounded-full shadow-xl hover:shadow-2xl";
  
  const typeClasses = {
    primary: "bg-[#579db3] hover:bg-[#eb2978] text-white",
    secondary: "bg-white text-[#579db3] hover:bg-gray-100 border-2 border-[#579db3]",
    outline: "bg-transparent text-[#579db3] hover:bg-[#579db3] hover:text-white border-2 border-[#579db3]"
  };
  
  const sizeClasses = {
    small: "px-6 py-3 text-base", // 16px
    medium: "px-8 py-4 text-base", // 16px
    large: "px-8 py-3 text-[16px]" // 18px
  };
  
  const widthClass = fullWidth ? "w-full" : "w-fit";
  
  const classes = [
    baseClasses,
    typeClasses[type],
    sizeClasses[size],
    widthClass,
    className
  ].filter(Boolean).join(' ');
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={classes}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button; 