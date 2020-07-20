import type { Coupon } from '../types';

const COUPONS: Partial<Coupon>[] = [
  {
    title: 'Black Friday',
    description: 'Get up to 40% Off',
    company: 'Nike',
    image: 'http://instantlogosearch.ils.netdna-cdn.com/svg/instantlogosearch/Nike.svg',
  },
  {
    title: 'Black Friday',
    description: 'Free Shipping on Your +$25 Order',
    company: 'Reebok',
    image:
      'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122014/reebok_logo_detail_0.png?itok=yMstJ-Zo',
  },
  {
    title: 'Black Friday',
    description: 'Get up to 90% Off in your second purchase',
    company: 'Nike',
    image: 'http://instantlogosearch.ils.netdna-cdn.com/svg/instantlogosearch/Nike.svg',
  },
  {
    title: 'Black Friday',
    description: 'Get up to 20% Off in selected items',
    company: 'Adidas',
    image: 'http://instantlogosearch.ils.netdna-cdn.com/svg/instantlogosearch/adidas.svg',
  },
  {
    title: 'Black Friday',
    description: 'Buy one get one free!',
    company: 'Super Dry',
    image:
      'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/032012/superdry.png?itok=QPkUP1Xs',
  },
  {
    title: 'Black Friday',
    description: 'Get up to 60% Off in purses',
    company: 'Zara',
    image:
      'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102018/untitled-1_126.png?hcPCsZ8XUExsIkcIU9H7Tt6302sEDCzH&itok=Tn23AB70',
  },
  {
    title: 'Black Friday',
    description: 'Get up to 10% Off',
    company: 'Billabong',
    image:
      'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0011/2981/brand.gif?itok=CYOE5xCz',
  },
  {
    title: 'Black Friday',
    description: 'Get up to 40% Off',
    company: 'Reebok',
    image:
      'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/122014/reebok_logo_detail_0.png?itok=yMstJ-Zo',
  },
  {
    title: 'Black Friday',
    description: 'Get up to 40% Off',
    company: 'Tupperware',
    image:
      'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/0001/8676/brand.gif?vYM6VXrBvGGbQaTl3nXg05.ziJLy9e3h&itok=dSr1z09v',
  },
  {
    title: 'Black Friday',
    description:
      'Free Delivery off first order of $15+ with code Available for delivery orders only. Cannot be combined with other discounts or cash. Order must be $15.00, before tax, tip and fees. Discount will apply to delivery fee. Up to $4.00 will be taken off your de',
    company: 'Apple',
    image:
      'https://d1yjjnpx0p53s8.cloudfront.net/styles/logo-thumbnail/s3/102014/apple_30th_0.png?itok=7NiBSilq',
  },
];

const getRandomCode = (): string => Math.random().toString(36).substring(2, 7);

export const getCoupon = (): Coupon => {
  const random = Math.floor(Math.random() * 10);
  const result = COUPONS[random];

  result.code = getRandomCode();
  result.url = `https://${result.company}.com/`;
  result.expireDate = '07/28/20';

  return result as Coupon;
};
