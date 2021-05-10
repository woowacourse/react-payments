import React from 'react';
import CardAddPage from './CardAddPage';

export default {
  component: CardAddPage,
  title: 'Pages/CardAddPage',
};

const Template = (args) => <CardAddPage {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumbers: {
    first: '1234',
    second: '1234',
    third: '1234',
    fourth: '1234',
  },
  cardCompany: {
    name: '유조',
    color: '유조',
  },
  expiration: {
    month: '11',
    year: '17',
  },
  ownerName: 'YUJO',
  securityCode: '123',
  password: {
    first: '1',
    seconde: '2',
  },
};
