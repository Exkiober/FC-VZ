import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, className, onClick }) => {
  return (
    <button className={`${className} bg-white text-black px-4 py-2 rounded-md hover:bg-[rgba(255,255,255,0.9)] hover:cursor-pointer`} onClick={onClick}>
      {children}
    </button>
  );
};

export { Button }