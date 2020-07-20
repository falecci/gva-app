import React from 'react';
import cn from 'classnames';

import './styles.css';

type PanelProps = {
  filled?: boolean;
  children: React.ReactNode;
};

const Panel = ({ filled, children }: PanelProps): JSX.Element => (
  <div
    className={cn('flex justify-center panel', {
      'background-filled': filled,
    })}
  >
    {children}
  </div>
);

export default Panel;
