import React, { useState, FormEvent, useContext } from 'react';
import cn from 'classnames';

import Button from '../Button';
import ErrorMessage from '../ErrorMessage';
import Spinner from '../Spinner';
import Subtitle from '../Subtitle';
import Title from '../Title';

import PendingMailIcon from '../../icons/pending-email.svg';
import SuccessMailIcon from '../../icons/success-email.svg';
import useFetch from '../Hooks/useFetch';
import { DisplayContext } from '../../App';
import { validateEmail } from '../../utils';

type SubscriptionResponse = {
  status: 'success' | 'failure';
};

const SubscriptionForm = (): JSX.Element => {
  const isSmallDisplay = useContext(DisplayContext);
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
      setEmail({ ...email, error: 'You must enter a valid email address' });
      return;
    }

    doFetch({ body: { email }, method: 'POST' });
  };

  return (
    <form
      className={cn('w-full flex flex-col items-center px-12', {
        'py-16': !isSmallDisplay,
        'py-2': isSmallDisplay,
      })}
    >
      {!isSmallDisplay && (
        <img
          src={!data ? PendingMailIcon : SuccessMailIcon}
          alt="subscription-mail"
          className="-mt-8 h-24 w-24"
        />
      )}

      <Title text="Join & enjoy" />

      {data && (
        <>
          <Subtitle text="Thank you so much for subscribing!" className="text-center mt-2" />
          <Subtitle
            text="You'll be hearing from us soon with the best offers available."
            className="text-center mt-2"
          />
        </>
      )}

      {!data && (
        <>
          <Subtitle
            text="Subscribe to keep up with the greatest deals, hottest offers and latest news."
            className="text-center mt-2"
          />

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
