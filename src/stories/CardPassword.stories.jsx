import React from 'react';
import CardPassword from '../components/CardPassword';

export default {
  title: 'CardPassword',
  component: CardPassword,
};

const Template = args => {
  const dispatch = () => {};
  return <CardPassword {...args} dispatch={dispatch} />;
};

export const Primary = Template.bind({});
