import React from 'react';
import AddCard from '.';

export default {
  title: 'Components/AddCard',
  component: AddCard,
};

const Template = (args) => <AddCard {...args} />;

export const Default = Template.bind({});

Default.args = {};
