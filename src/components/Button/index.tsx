import React from 'react';
import cn from 'classnames';

type ButtonProps = {
  type: 'button' | 'submit';
  className?: string;
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ children, type, onClick, className }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cn(
        'focus:outline-none p-2 border border-blue-500 text-blue-700 font-bold pointer hover:text-white hover:bg-blue-500',
        {
          [className || '']: className,
        },
      )}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
