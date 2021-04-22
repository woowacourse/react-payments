import React from 'react';
import Card from '.';

export default {
  title: 'Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const Default = Template.bind({});

Default.args = {
  cardCompanyName: '로이드카드',
  cardNumber: '1234-1234-3456-1234',
  userName: 'bran',
  expirationDate: '11/21',
};

export const Large = Template.bind({});

Large.args = {
  cardCompanyName: '로이드카드',
  cardColor: '#04C092',
  cardNumber: '1234-1234-3456-1234',
  userName: 'bran',
  expirationDate: '11/21',
  size: 'large',
};
