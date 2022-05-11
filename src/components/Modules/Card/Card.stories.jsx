import React from 'react';
import Card from '.';
import '../../../index.css';

export default {
  title: 'Payment/Modules/Card',
  component: Card,
  argTypes: {
    expiredDate: { control: { type: 'text' } },
  },
};

const Template = args => <Card {...args} />;

export const Small = Template.bind({});

Small.args = {
  companyNameString: '신한카드',
  cardNumberString: { first: '', second: '', third: '', four: '' },
  expiredDateString: { month: '', year: '' },
  ownerNameString: 'kam',
};
