import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import type { ChildrenProps, GenericKeyboardEvent } from '../../types';

import useWindowEventListener from '../Hooks/useWindowEventListener';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  fadeDuration?: 75 | 100 | 150 | 200 | 300 | 500 | 700 | 1000;
} & ChildrenProps;

const ESC_KEYS = ['Escape', 'esc'];

const Modal = ({ open, onClose, children, fadeDuration = 200 }: ModalProps): JSX.Element | null => {
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
        `transition-opacity ease-in duration-${fadeDuration} modal fixed h-full w-full flex items-center justify-center z-50`,
        {
          'opacity-0': !animated,
          'opacity-1': animated,
        },
      )}
      role="dialog"
    >
      <div className="modal-container bg-white mx-auto h-full w-full overflow-y-auto">
        <div
          className="modal-close absolute top-0 right-0 cursor-pointer flex flex-col items-center mt-4 mr-4 text-white text-sm z-50"
          onClick={handleOnClose}
          onKeyUp={handleOnEscapeKeyPress}
          role="button"
          tabIndex={0}
        >
          <svg
            className="fill-current text-white"
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
          >
            <path d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z" />
          </svg>
        </div>
        <div className="h-full modal-content text-left p-8">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
