import React from 'react';
import CardAddForm from '.';

export default {
  title: 'Payment/CardAddPage',
  component: CardAddForm,
};

const Template = args => <CardAddForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
