import React from 'react';
import AddCard from '.';

export default {
  title: 'Payment/Modules/AddCard',
  component: AddCard,
};

const Template = args => <AddCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
