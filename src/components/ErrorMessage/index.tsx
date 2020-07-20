import React from 'react';
import type { Nullable } from '../../types';

type ErrorMessageProps = {
  visible: boolean;
  text: string;
};

const ErrorMessage = ({ visible, text }: ErrorMessageProps): Nullable<JSX.Element> => {
  if (!visible) {
    return null;
  }

  return <span className="mt-2 text-center text-sm text-red-500">{text}</span>;
};

export default ErrorMessage;
