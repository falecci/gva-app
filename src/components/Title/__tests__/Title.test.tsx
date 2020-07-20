import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import Title from '..';

describe('<Title />', () => {
  test('should render a title', () => {
    render(<Title className="my-class" text="my title" />);

    const result = screen.getByRole('heading', { name: 'my title' });

    expect(result).toHaveClass('font-extrabold title my-class');
  });
});
