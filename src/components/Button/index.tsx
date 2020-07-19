import React, { MouseEventHandler } from 'react';
import cn from 'classnames';

type ButtonProps = {
  type: 'button' | 'submit';
  filled?: boolean;
  className?: string;
  onClick: MouseEventHandler;
  children: React.ReactNode;
};

const Button = ({ children, type, onClick, filled, className }: ButtonProps): JSX.Element => {
  return (
    <button
      onClick={onClick}
      className={cn('focus:outline-none p-2 border border-blue-500 font-bold pointer', {
        'text-blue-700 hover:text-white hover:bg-blue-500': !filled,
        'text-white bg-blue-500': filled,
        [className || '']: className,
      })}
      // eslint-disable-next-line react/button-has-type
      type={type}
    >
      {children}
    </button>
  );
};

export default Button;
