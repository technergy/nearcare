import React from 'react';

export const Logo = ({ className = "h-16 w-auto", layout, theme = "light" }: { className?: string, layout?: "vertical" | "horizontal", theme?: "light" | "dark" | "icon" }) => {
  const imgSrc = theme === "dark" ? "/logo-dark.png" : theme === "icon" ? "/images/logo-transparent.png" : "/logo-white-bg.png";
  
  return (
    <div className={`flex items-center justify-center`}>
      <img 
        src={imgSrc} 
        alt="Near Care Support Logo" 
        className={`${className} object-contain`} 
      />
    </div>
  );
};
