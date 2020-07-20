import React, { useState, useEffect } from 'react';
import cn from 'classnames';

import Button from './components/Button';
import Modal from './components/Modal';
import Coupon from './components/Coupon';
import SubscriptionForm from './components/SubscriptionForm';
import useWindowEventListener from './components/Hooks/useWindowEventListener';

import type { Coupon as CouponType } from './types';
import { getCoupon } from './data';

export const DisplayContext = React.createContext(false);

function App(): JSX.Element {
  const [isSmallDisplay, setIsSmallDisplay] = useState(false);

  const handleOnWindowResize = () => {
    if (window.innerWidth < 750) {
      setIsSmallDisplay(true);
      return;
    }

    setIsSmallDisplay(false);
  };

  useWindowEventListener('resize', handleOnWindowResize);

  useEffect(() => handleOnWindowResize(), []);

  const [open, setOpen] = useState(false);
  const [coupon, setCoupon] = useState<CouponType>(getCoupon());

  const handleOnButtonClick = () => {
    setOpen(true);
    setCoupon(getCoupon());
  };
  const handleOnModalClose = () => setOpen(false);

  const { company, description, url, title, code, image, expireDate } = coupon;

  return (
    <DisplayContext.Provider value={isSmallDisplay}>
      <div className="h-full flex items-center justify-center">
        <Modal onClose={handleOnModalClose} open={open}>
          <div
            className={cn('flex w-full h-full', {
              'flex-col': isSmallDisplay,
            })}
          >
            <div
              className={cn('h-full flex justify-center', {
                'w-6/12': !isSmallDisplay,
                'w-full': isSmallDisplay,
              })}
            >
              <Coupon
                company={company}
                code={code}
                description={description}
                expireDate={expireDate}
                image={image}
                title={title}
                url={url}
              />
            </div>
            <div
              className={cn('h-full flex justify-center', {
                'w-6/12': !isSmallDisplay,
                'w-full': isSmallDisplay,
              })}
              style={{
                background:
                  'linear-gradient(90deg, rgba(244,241,222,1) 0%, rgba(242,204,143,0.5) 100%)',
              }}
            >
              <SubscriptionForm />
            </div>
          </div>
        </Modal>
        <Button onClick={handleOnButtonClick} type="button">
          GET MY COUPON
        </Button>
      </div>
    </DisplayContext.Provider>
  );
}

export default App;
