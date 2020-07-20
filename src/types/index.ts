export type ChildrenProps = {
  children: React.ReactNode;
};

export type GenericKeyboardEvent = React.KeyboardEvent<HTMLDivElement> | KeyboardEvent;

export type Nullable<T> = T | null;

// eslint-disable-next-line
export type ValidAny = any;

export type Coupon = {
  code: string;
  url: string;
  expireDate: string;
  title: string;
  company: string;
  image: string;
  description: string;
};
