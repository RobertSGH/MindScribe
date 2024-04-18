import React from 'react';

interface ButtonProps {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  type?: 'button' | 'submit' | 'reset';

  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  shape?: 'rounded' | 'square';
  icon?: React.ReactElement;

  isLoading?: boolean;
  children?: React.ReactNode;
}

const Button = ({
  label,
  onClick,
  disabled,
  type = 'button',
  variant = 'primary',
  size = 'md',
  shape = 'rounded',
  icon,
  isLoading,
  children,
  ...rest
}: ButtonProps) => {
  const variantClasses = {
    primary:
      'bg-primaryLight hover:bg-primary transition duration-300 text-white px-4 py-2',
    secondary:
      'bg-secondary transition duration-300 text-white px-4 py-2 hover:bg-primaryLight',
    outline:
      'border border-dropdownBg text-white px-4 py-2 hover:bg-primaryLight transition duration-300 ',
    ghost: 'text-white hover:text-dropdownBg px-4 py-2',
  };

  const sizeClasses = {
    sm: 'text-sm md:text-md',
    md: 'text-md lg:text-xl',
    lg: 'text-lg xl:text-2xl',
    xl: 'text-xl 2xl:text-3xl',
  };

  const shapeClasses = {
    rounded: 'rounded-full',
    square: 'rounded-none',
  };

  const combinedClasses = `
    ${variantClasses[variant]} ${sizeClasses[size]} ${shapeClasses[shape]} ${
    disabled || isLoading ? 'cursor-not-allowed opacity-50' : ''
  }

  `;

  // Render button content based on props
  const content = () => {
    if (isLoading) {
      return (
        <div className='animate-spin mx-2 h-5 w-5 border-2 rounded-full border-blue-500'></div>
      );
    }

    return (
      <>
        {icon && <span className='mr-2'>{icon}</span>}
        {label}
      </>
    );
  };

  return (
    <button
      type={type}
      disabled={disabled || isLoading}
      className={combinedClasses}
      onClick={onClick}
      {...rest}
    >
      {content()}
      {children}
    </button>
  );
};

export default Button;
