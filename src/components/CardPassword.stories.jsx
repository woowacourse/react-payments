import React from 'react';
import CardPassword from './CardPassword';

export default {
  title: 'CardPassword',
  component: CardPassword,
};

const Template = args => {
  const correctCardPwdCallback = () => {};
  return <CardPassword {...args} correctCardPwdCallback={correctCardPwdCallback} />;
};

export const Primary = Template.bind({});
