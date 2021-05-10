import React from 'react';
import CardRegisterPage from './CardRegisterPage';

export default {
  component: CardRegisterPage,
  title: 'Pages/CardRegisterPage',
};

const Template = (args) => <CardRegisterPage {...args} />;

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
