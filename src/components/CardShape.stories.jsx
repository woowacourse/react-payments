import React from 'react';
import CardShape from './CardShape';

export default {
  title: 'CardShape',
  component: CardShape,
  argTypes: {
    cardCompany: { control: 'text' },
    cardNumber: { control: 'text' },
    cardOwner: { control: 'text' },
    cardDate: { control: 'text' },
  },
};

const Template = args => <CardShape {...args} />;

export const Primary = Template.bind({});

Primary.args = {
  cardCompany: '국민카드',
  cardNumber: '0000-0000-****-****',
  cardOwner: 'COKE TAETAE',
  cardDate: '05 / 21',
};
