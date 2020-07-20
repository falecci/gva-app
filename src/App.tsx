import React, { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import Coupon from './components/Coupon';
import SubscriptionForm from './components/SubscriptionForm';
import type { Coupon as CouponType } from './types';
import { getCoupon } from './data';

function App(): JSX.Element {
  const [open, setOpen] = useState(false);
  const [coupon, setCoupon] = useState<CouponType>(getCoupon());

  const handleOnButtonClick = () => {
    setOpen(true);
    setCoupon(getCoupon());
  };
  const handleOnModalClose = () => setOpen(false);

  const { company, description, url, title, code, image, expireDate } = coupon;

  return (
    <div className="h-full flex items-center justify-center">
      <Modal onClose={handleOnModalClose} open={open}>
        <div className="flex w-full h-full">
          <div className="w-6/12 h-full flex items-center justify-center">
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
            className="w-6/12 h-full flex items-center justify-center"
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
  );
}

export default App;
