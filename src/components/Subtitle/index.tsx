import React from 'react';
import cn from 'classnames';

import './styles.css';

type SubtitleProps = {
  text: string;
  className?: string;
};

const Subtitle = ({ text, className }: SubtitleProps): JSX.Element => (
  <h2
    className={cn('subtitle font-semibold', {
      [className || '']: className,
    })}
  >
    {text}
  </h2>
);

export default Subtitle;
