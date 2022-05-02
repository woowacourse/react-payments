import React from 'react';
import CardOwnerInput from '.';

export default {
  title: 'Payment/CardOwnerInput',
  component: CardOwnerInput,
};

const Template = args => <CardOwnerInput {...args} />;

export const Default = Template.bind({});

Default.args = {};
