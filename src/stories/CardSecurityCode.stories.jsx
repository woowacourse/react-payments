import React from 'react';
import CardSecurityCode from '../components/CardSecurityCode';

export default {
  title: 'CardSecurityCode',
  component: CardSecurityCode,
};

const Template = args => {
  const correctSecurityCodeCallback = () => {};
  return <CardSecurityCode {...args} correctSecurityCodeCallback={correctSecurityCodeCallback} />;
};

export const Primary = Template.bind({});
