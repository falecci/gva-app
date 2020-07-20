import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import Subtitle from '..';

describe('<Subtitle />', () => {
  test('should render a subtitle', () => {
    render(<Subtitle className="my-class" text="my subtitle" />);

    const result = screen.getByRole('heading', { name: 'my subtitle' });

    expect(result).toHaveClass('subtitle font-semibold my-class');
  });
});
