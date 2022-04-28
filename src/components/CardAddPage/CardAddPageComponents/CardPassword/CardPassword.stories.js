import React from 'react';
import CardPassword from './CardPassword';

export default {
  title: 'CardPassword',
  component: CardPassword,
};

const Template = (args) => <CardPassword {...args} />;

export const CardPasswordInput = Template.bind({});
CardPasswordInput.args = {
  cardInfo: {
    password1: '',
    password2: '',
  },
};
