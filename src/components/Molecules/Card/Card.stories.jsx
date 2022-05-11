import React from 'react';
import Card from '.';
import { CARD_SIZE } from 'constant/';

export default {
  title: 'Molecules/Card',
  component: Card,
  argTypes: {
    size: { control: 'select', options: [CARD_SIZE.MEDIUM, CARD_SIZE.LARGE] },
  },
};

const Template = args => {
  return (
    <Card
      cardCompany={{ name: '포코카드', color: '#E24141' }}
      cardNumbers={['1111', '2222', '3333', '4444']}
      ownerName="VICTOR"
      expiredDate={{ month: '12', year: '22' }}
      {...args}
    />
  );
};

export const Medium = Template.bind({});

Medium.args = {
  size: CARD_SIZE.MEDIUM,
};

export const Large = Template.bind({});

Large.args = {
  size: CARD_SIZE.LARGE,
};
