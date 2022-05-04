import React from 'react';
import Card from '.';

export default {
  title: 'Payment/Card',
  component: Card,
  argTypes: {
    expiredDate: { control: { type: 'text' } },
  },
};

const Template = args => <Card {...args} />;

export const Small = Template.bind({});

Small.args = {
  cardCompany: { name: '포코카드', color: '#E24141' },
  cardNumbers: ['1111', '2222', '3333', '4444'],
  ownerName: 'SUN',
  expiredDate: '12/22',
};
