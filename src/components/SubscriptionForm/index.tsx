import React, { useState, FormEvent } from 'react';
import cn from 'classnames';

import { validateEmail } from '../../utils';
import Button from '../Button';

const SubscriptionForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [hasErrors, setHasErrors] = useState(false);

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault();
    setHasErrors(false);

    if (!email || (email && !validateEmail(email))) {
      setHasErrors(true);
    }
  };

  return (
    <form className="w-full flex flex-col items-center py-16 px-12">
      <span className="font-semibold">Hi, there</span>
      <h1 className="font-extrabold text-5xl">Join & enjoy</h1>

      <span className="text-center mt-2 font-semibold">
        Subscribe to keep up with the greatest deals, hottest offers and latest news.
      </span>

      <input
        value={email}
        onChange={ev => setEmail(ev.target.value)}
        className={cn('p-2 mt-8 w-full', {
          'border border-red-500': hasErrors,
        })}
        placeholder="Enter your email address"
      />

      <Button onClick={handleOnSubmit} filled className="w-full mt-4" type="submit">
        Subscribe
      </Button>
    </form>
  );
};

export default SubscriptionForm;
