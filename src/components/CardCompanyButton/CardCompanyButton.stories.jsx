import React from 'react';
import CardCompanyButton from '.';

export default {
  title: 'Payment/CardCompanyButton',
  component: CardCompanyButton,
};

const Template = args => <CardCompanyButton {...args} />;

export const PocoCard = Template.bind({});
PocoCard.args = {
  color: '#E24141',
  name: '포코카드',
};
