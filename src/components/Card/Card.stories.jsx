import React from 'react';
import Card from '.';

export default {
  title: 'Example/Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Small = Template.bind({});

Small.args = {
  companyName: '포코카드',
  cardNumbers: [1111, 2222, 3333, 4444],
  ownerName: 'SUN',
  expiredDate: { month: 12, year: 24 },
};
