import React, { useState } from 'react';
import CardShape from '../components/CardShape';

export default {
  title: 'CardShape',
  component: CardShape,
  argTypes: {
    cardCompany: { control: 'object' },
    cardNumber: { control: 'text' },
    cardOwnerName: { control: 'text' },
    cardDate: { control: 'object' },
    dimensions: { control: 'object' },
  },
};

const Template = args => {
  const [cardCompany, setCardCompany] = useState({
    hexColor: '',
    name: '',
  });

  return <CardShape {...args} setCardCompany={setCardCompany} cardCompany={cardCompany} />;
};

export const Primary = Template.bind({});

Primary.args = {
  cardNumber: '0000-0000-****-****',
  cardOwnerName: 'COKE TAETAE',
  cardDate: { month: '01', year: '23' },
  dimensions: {
    width: 754,
    height: 200,
  },
};
