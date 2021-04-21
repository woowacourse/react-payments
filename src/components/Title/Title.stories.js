import React from 'react';
import { Title } from '.';

export default {
  title: 'Component/Title',
  component: Title,
};

const Template = (args) => <Title {...args} />;

export const CardList = Template.bind({});
CardList.args = {
  children: '보유카드',
};

export const CardAddition = Template.bind({});
CardAddition.args = {
  children: '카드 추가',
};
