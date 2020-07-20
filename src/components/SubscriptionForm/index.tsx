import React, { useState, FormEvent } from 'react';
import cn from 'classnames';

import { validateEmail } from '../../utils';
import Button from '../Button';
import useFetch from '../Hooks/useFetch';
import ErrorMessage from '../ErrorMessage';
import Subtitle from '../Subtitle';
import Spinner from '../Spinner';

type SubscriptionResponse = {
  status: 'success' | 'failure';
};

const SubscriptionForm = (): JSX.Element => {
  const { doFetch, loading, error, retrying, data } = useFetch<SubscriptionResponse>(
    'subscription',
  );
  const [email, setEmail] = useState({
    value: '',
    error: '',
  });

  const handleOnSubmit = (evt: FormEvent) => {
    evt.preventDefault();

    if (loading || retrying) {
      return;
    }

    setEmail({ ...email, error: '' });

    if (!email.value) {
      setEmail({ ...email, error: 'You must enter your email' });
      return;
    }

    if (email.value && !validateEmail(email.value)) {
      setEmail({ ...email, error: 'You must enter a valid email adress' });
      return;
    }

    doFetch({ body: { email }, method: 'POST' });
  };

  return (
    <form className="w-full flex flex-col items-center py-16 px-12">
      <span className="font-semibold">Hi, there</span>
      <h1 className="font-extrabold text-5xl">Join & enjoy</h1>

      <Subtitle
        text="Subscribe to keep up with the greatest deals, hottest offers and latest news."
        className="mt-2"
      />

      {data?.status === 'success' && 'YAAAAAAAAAY'}

      {!data && (
        <>
          <input
            value={email.value}
            onChange={ev => setEmail({ ...email, value: ev.target.value })}
            className={cn('p-2 mt-8 w-full', {
              'border border-red-500': email.error,
            })}
            placeholder="Enter your email address"
          />

          <ErrorMessage text={email.error} visible={!!email.error} />

          <Button onClick={handleOnSubmit} filled className="w-full mt-4" type="submit">
            {loading ? <Spinner /> : 'Subscribe'}
          </Button>

          <ErrorMessage
            visible={retrying}
            text="Oops! We are having some issues. Hang on a bit and we'll fix them for you!"
          />

          <ErrorMessage visible={error} text="We can't subscribe you right now :(" />
        </>
      )}
    </form>
  );
};

export default SubscriptionForm;
