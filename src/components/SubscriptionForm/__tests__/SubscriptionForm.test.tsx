import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { screen } from '@testing-library/dom';

import SubscriptionForm from '..';

describe('<SubscriptionForm />', () => {
  test('should render error messages correctly', async () => {
    render(<SubscriptionForm />);

    const userEmail = screen.getByRole('textbox', { name: 'Email' });
    const submitButton = screen.getByRole('button', { name: 'Subscribe' });

    expect(userEmail).toBeInTheDocument();
    fireEvent.click(submitButton);

    const emptyEmailError = screen.getByText('You must enter your email');
    expect(emptyEmailError).toBeInTheDocument();

    fireEvent.change(userEmail, { target: { value: 'asdasd' } });
    fireEvent.click(submitButton);

    const invalidEmailError = screen.getByText('You must enter a valid email address');
    expect(invalidEmailError).toBeInTheDocument();
  });
});
