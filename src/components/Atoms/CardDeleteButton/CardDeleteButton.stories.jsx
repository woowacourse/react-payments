import React from 'react';
import CardDeleteButton from '.';

export default {
  title: 'Payment/Atoms/CardDeleteButton',
  component: CardDeleteButton,
};

const Template = args => <CardDeleteButton {...args} />;

export const Default = Template.bind({});

Default.args = {
  children: '카드삭제',
};
