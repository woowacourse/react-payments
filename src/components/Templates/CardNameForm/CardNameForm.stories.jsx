import React from 'react';
import CardNameForm from '.';

export default {
  title: 'Payment/Template/CardNameForm',
  component: CardNameForm,
};

const Template = args => <CardNameForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
