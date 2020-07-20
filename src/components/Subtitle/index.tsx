import React from 'react';
import cn from 'classnames';

type SubtitleProps = {
  text: string;
  className?: string;
};

const Subtitle = ({ text, className }: SubtitleProps): JSX.Element => (
  <h2
    className={cn('max-w-xs text-lg font-semibold', {
      [className || '']: className,
    })}
  >
    {text}
  </h2>
);

export default Subtitle;
