import React from 'react';
import CardPreview from './CardPreview';

export default {
  title: 'Component/CardPreview',
  component: CardPreview,
};

const cardExample = {
  brand: '우아한카드',
  firstCardNumber: '1234',
  secondCardNumber: '1234',
  thirdCardNumber: '1234',
  fourthCardNumber: '1234',
  expiredMonth: '01',
  expiredYear: '23',
  owner: 'WOO',
};

const Template = ({ icon, children, ...args }) => (
  <CardPreview icon={icon} {...args}>
    {children}
  </CardPreview>
);

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  ...cardExample,
};

export const Big = Template.bind({});
Big.args = {
  size: 'big',
  ...cardExample,
};
