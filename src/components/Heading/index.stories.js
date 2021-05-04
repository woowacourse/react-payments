import React from 'react';
import { Heading } from '.';

export default {
  title: 'Component/Heading',
  component: Heading,
};

const Template = (args) => <Heading {...args} />;

export const CardList = Template.bind({});
CardList.args = {
  children: '보유카드',
};

export const CardAddition = Template.bind({});
CardAddition.args = {
  children: '카드 추가',
};
