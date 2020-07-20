import React from 'react';

import Button from '../Button';
import useCopyToClipboard from '../Hooks/useCopyToClipboard';
import Subtitle from '../Subtitle';
import Title from '../Title';

import './styles.css';

type CodeProps = {
  code: string;
};

type CouponProps = {
  company: string;
  title: string;
  url: string;
  expireDate: string;
  image: string;
  description: string;
};

const Coupon = ({
  title,
  url,
  image,
  expireDate,
  code,
  company,
  description,
}: CouponProps & CodeProps): JSX.Element => {
  const { copyText, isCopied } = useCopyToClipboard();

  const handleOnCopyButtonClick = (): void => copyText(code);

  return (
    <div className="w-full flex flex-col coupon-container">
      <Coupon.Info
        company={company}
        description={description}
        expireDate={expireDate}
        image={image}
        title={title}
        url={url}
      />

      <div className="w-full flex items-center px-8">
        <Coupon.Code code={code} />
        <Button filled onClick={handleOnCopyButtonClick} className="w-4/12" type="button">
          {isCopied ? 'Copied' : 'Copy'}
        </Button>
      </div>
    </div>
  );
};

Coupon.Info = ({ company, image, title, expireDate, description, url }: CouponProps) => (
  <>
    <div className="w-full flex self-start pl-8 mb-4">
      <img alt="company-logo" className="company-logo" src={image} />

      <div className="flex flex-col ml-6 -mt-3">
        <Title text={title} />

        <span className="text-sm">
          Valid till <strong>{expireDate}</strong>
        </span>
        <span className="text-sm font-bold">
          Visit more on{' '}
          <a className="text-blue-600" href={url}>
            {company}
          </a>
        </span>
      </div>
    </div>

    <Subtitle text={description} className="mb-8 px-8" />
  </>
);

Coupon.Code = ({ code }: CodeProps) => (
  <span className="w-8/12 border border-r-0 bg-blue-300 bg-opacity-25 border-blue-500 text-blue-700 font-bold p-2 uppercase">
    {code}
  </span>
);

export default Coupon;
