import React from 'react';
import CardExpirationDate from './CardExpirationDate';

export default {
  title: 'CardExpirationDate',
  component: CardExpirationDate,
};

const Template = (args) => <CardExpirationDate {...args} />;

export const CardExpirationDateInput = Template.bind({});
CardExpirationDateInput.args = {
  cardInfo: {
    month: '',
    year: '',
  },
};
