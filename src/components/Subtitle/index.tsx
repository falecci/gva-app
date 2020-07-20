import React from 'react';
import cn from 'classnames';

type SubtitleProps = {
  text: string;
  className?: string;
};

const Subtitle = ({ text, className }: SubtitleProps): JSX.Element => (
  <span
    className={cn('max-w-xs text-center text-lg font-semibold', {
      [className || '']: className,
    })}
  >
    {text}
  </span>
);

export default Subtitle;
