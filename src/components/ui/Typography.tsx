import React from 'react';

interface TypographyProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span'; // Define the variants you want to support
  children: React.ReactNode; // Content to display
  className?: string; // Optional additional class names
  onClick?: () => void; // Optional click handler
}

const Typography: React.FC<TypographyProps> = ({ variant = 'p', children, className, onClick }) => {
  const Tag = variant; // Use the variant as the HTML tag

  const baseStyles = 'text-gray-800'; // Base styles for all typography
  const variantStyles = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-semibold',
    h3: 'text-2xl font-medium',
    h4: 'text-xl font-medium',
    h5: 'text-lg font-medium',
    h6: 'text-base font-medium',
    p: 'text-base',
    span: 'text-sm',
  };

  return (
    <Tag className={`${baseStyles} ${variantStyles[variant]} ${className} ${onClick ? 'cursor-pointer' : ''} `} onClick={onClick}>
      {children}
    </Tag>
  );
};

export { Typography }