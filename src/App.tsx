import React, { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import Coupon from './components/Coupon';

function App(): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleOnButtonClick = () => setOpen(true);
  const handleOnModalClose = () => setOpen(false);

  return (
    <div className="h-full flex items-center justify-center">
      <Modal onClose={handleOnModalClose} open>
        <div className="flex w-full h-full">
          <div className="w-6/12 h-full flex items-center justify-center">
            <Coupon code="FSDAD" description="Free Shipping on Your +$25 Order" />
          </div>
          <div
            className="w-6/12 h-full"
            style={{
              background:
                'linear-gradient(90deg, rgba(244,241,222,1) 0%, rgba(242,204,143,0.5) 100%)',
            }}
          >
            <Coupon
              code="7SFU-2020-COCACOLA"
              description="Get 75% off at Coca Cola. Offer ends on 01/02/2021 at 6:00 AM PST"
            />
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
