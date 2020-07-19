import React from 'react';

type ButtonProps = {
  type: 'button' | 'submit';
  onClick: () => void;
  children: React.ReactNode;
};

const Button = ({ children, type, onClick }: ButtonProps): JSX.Element => {
  return (
    // eslint-disable-next-line react/button-has-type
    <button onClick={onClick} className="rounded-lg" type={type}>
      {children}
    </button>
  );
};

export default Button;
