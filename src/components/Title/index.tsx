import React from 'react';

type TitleProps = {
  text: string;
};

const Title = ({ text }: TitleProps): JSX.Element => (
  <h1 className="font-extrabold text-3xl">{text}</h1>
);

export default Title;
