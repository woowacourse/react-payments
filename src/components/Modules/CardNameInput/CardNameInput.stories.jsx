import React from 'react';
import CardNameInput from '.';

export default {
  title: 'Payment/Modules/CardNameInput',
  component: CardNameInput,
};

const Template = args => <CardNameInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
