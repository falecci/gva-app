import React from 'react';
import Button from '../Button';
import useCopyToClipboard from '../Hooks/useCopyToClipboard';
import Subtitle from '../Subtitle';

type CouponProps = {
  code: string;
  description: string;
};

const Coupon = ({ code, description }: CouponProps): JSX.Element => {
  const { copyText, isCopied } = useCopyToClipboard();

  const handleOnCopyButtonClick = (): void => copyText(code);

  return (
    <div className="w-full flex flex-col items-center py-16 px-2">
      <img
        alt="company-logo"
        className="rounded-full w-24 h-24 mb-8"
        src="https://www.pipelinersales.com/wp-content/uploads/2019/06/large-udemy.jpg"
      />

      <Subtitle text={description} className="mb-8" />

      <div className="w-full flex items-center px-8">
        <span className="w-8/12 border border-r-0 bg-blue-300 bg-opacity-25 border-blue-500 text-blue-700 font-bold p-2">
          {code}
        </span>
        <Button filled onClick={handleOnCopyButtonClick} className="w-4/12" type="button">
          {isCopied ? 'Copied' : 'Copy'}
        </Button>
      </div>
    </div>
  );
};

export default Coupon;
