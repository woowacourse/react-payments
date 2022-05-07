import React from 'react';
import CardNickNameForm from '.';

export default {
  title: 'Payment/Template/CardNickNameForm',
  component: CardNickNameForm,
};

const Template = args => <CardNickNameForm {...args} />;

export const Default = Template.bind({});

Default.args = {};
