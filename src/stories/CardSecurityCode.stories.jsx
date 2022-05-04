import React from 'react';
import CardSecurityCode from '../components/CardSecurityCode';

export default {
  title: 'CardSecurityCode',
  component: CardSecurityCode,
};

const Template = args => {
  const dispatch = () => {};
  return <CardSecurityCode {...args} dispatch={dispatch} />;
};

export const Primary = Template.bind({});
