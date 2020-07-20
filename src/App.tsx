import React, { useState } from 'react';
import Button from './components/Button';
import Modal from './components/Modal';
import Coupon from './components/Coupon';
import SubscriptionForm from './components/SubscriptionForm';

function App(): JSX.Element {
  const [open, setOpen] = useState(false);

  const handleOnButtonClick = () => setOpen(true);
  const handleOnModalClose = () => setOpen(false);

  return (
    <div className="h-full flex items-center justify-center">
      <Modal onClose={handleOnModalClose} open={open}>
        <div className="flex w-full h-full">
          <div className="w-6/12 h-full flex items-center justify-center">
            <Coupon
              url=""
              title="Udemy"
              code="FSDAD"
              description="Free Shipping on Your +$25 Order"
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
