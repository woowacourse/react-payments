import React from 'react';
import CardAddForm from '.';

export default {
  title: 'Payment/Template/CardAddForm',
  component: CardAddForm,
};

const Template = args => <CardAddForm {...args} />;

export const Default = Template.bind({});

Default.args = {
  link: '',
};
