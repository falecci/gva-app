import React from 'react';
import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import Modal from '..';

import { noop } from '../../../utils';

describe('<Modal />', () => {
  test('should render a modal', () => {
    render(
      <Modal open onClose={noop}>
        <h1>My modal</h1>
      </Modal>,
    );

    const result = screen.getByRole('heading', { name: 'My modal' });

    expect(result).toBeInTheDocument();
  });
});
