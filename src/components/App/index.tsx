import React, { useState } from 'react';
import cn from 'classnames';

import Button from '../Button';
import Modal from '../Modal';
import Coupon from '../Coupon';
import Panel from '../Panel';
import SubscriptionForm from '../SubscriptionForm';

import type { Coupon as CouponType } from '../../types';
import { getCoupon } from '../../data';

import './styles.css';

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
        <div className="flex w-full h-full dual-container">
          <Panel>
            <Coupon
              company={company}
              code={code}
              description={description}
              expireDate={expireDate}
              image={image}
              title={title}
              url={url}
            />
          </Panel>

          <Panel filled>
            <SubscriptionForm />
          </Panel>
        </div>
      </Modal>
      <Button onClick={handleOnButtonClick} type="button">
        GET MY COUPON
      </Button>
    </div>
  );
}

export default App;
