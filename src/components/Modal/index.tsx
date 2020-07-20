import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import type { ChildrenProps, GenericKeyboardEvent, Nullable } from '../../types';

import useWindowEventListener from '../Hooks/useWindowEventListener';

import './styles.css';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  fadeDuration?: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
} & ChildrenProps;

const ESC_KEYS = ['Escape', 'esc'];

const Modal = ({
  open,
  onClose,
  children,
  fadeDuration = 200,
}: ModalProps): Nullable<JSX.Element> => {
  const [animated, setAnimated] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (open && !visible) {
      setVisible(true);
    }

    if (!open && visible) {
      setTimeout(() => setVisible(false), fadeDuration);
    }
  }, [animated, open, visible]);

  useEffect(() => {
    if (visible) {
      setTimeout(() => setAnimated(visible), fadeDuration);
    }
  }, [visible]);

  const handleOnClose = (): void => {
    setAnimated(false);
    setTimeout(() => {
      onClose();
    }, fadeDuration);
  };

  const handleOnEscapeKeyPress = ({ key }: GenericKeyboardEvent): void => {
    if (ESC_KEYS.includes(key)) {
      handleOnClose();
    }
  };

  useWindowEventListener('keyup', handleOnEscapeKeyPress);

  if (!visible) {
    return null;
  }

  return (
    <div
      className={cn(
        `transition-opacity ease-in duration-${fadeDuration} fixed h-full w-full block z-50`,
        {
          'opacity-0': !animated,
          'opacity-1': animated,
        },
      )}
      role="dialog"
    >
      <div className="absolute h-full w-full bg-gray-500 opacity-25" onTouchEnd={handleOnClose} />
      <div className="relative bg-white mx-auto overflow-y-auto z-50 rounded-lg shadow-2xl modal">
        <div
          className="absolute cursor-pointer mt-4 mr-4 z-50 top-0 right-0"
          onClick={handleOnClose}
          onKeyUp={handleOnEscapeKeyPress}
          role="button"
          tabIndex={0}
        >
          <svg
            className="fill-current text-blue-500"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </div>
        <div className="h-full">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
