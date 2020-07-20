import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import Button from '..';

import { noop } from '../../../utils';

describe('<Button />', () => {
  test('should render a button', () => {
    render(
      <Button onClick={noop} type="submit">
        my button
      </Button>,
    );

    const result = screen.getByText('my button') as HTMLButtonElement;

    expect(result).toHaveClass('text-blue-700 hover:text-white hover:bg-blue-500');
    expect(result.type).toBe('submit');
  });

  test('should render a filled button', () => {
    render(
      <Button onClick={noop} filled type="button">
        my button
      </Button>,
    );

    const result = screen.getByText('my button') as HTMLButtonElement;

    expect(result).toHaveClass('text-white bg-blue-500');
    expect(result.type).toBe('button');
  });

  test('should render a button with extra class', () => {
    render(
      <Button onClick={noop} className="my-class" type="button">
        my button
      </Button>,
    );

    const result = screen.getByText('my button') as HTMLButtonElement;

    expect(result).toHaveClass('my-class');
  });
});
