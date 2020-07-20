import React from 'react';
import cn from 'classnames';

import './styles.css';

type TitleProps = {
  text: string;
  className?: string;
};

const Title = ({ text, className }: TitleProps): JSX.Element => (
  <h1
    className={cn('font-extrabold title', {
      [className || '']: className,
    })}
  >
    {text}
  </h1>
);

export default Title;
