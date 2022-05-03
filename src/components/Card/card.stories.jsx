import React from 'react';
import Card from './index';

export default {
  title: 'Card',
  component: Card,
};

const Template = args => <Card {...args} />;

export const Example = Template.bind({});

Example.args = {
  cardInfo: { name: '포코 카드', color: 'red' },
  name: '샐리',
  expiredMonth: '12',
  expiredYear: '24',
  cardNumbers: ['1234', '5678', '1111', '1111'],
};
