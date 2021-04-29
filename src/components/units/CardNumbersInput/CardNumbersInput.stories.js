/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardNumbersInput from './index';

export default {
  title: 'units/CardNumbersInput',
  component: CardNumbersInput,
};

const Template = (args) => <CardNumbersInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  cardNumbers: { 1: '', 2: '', 3: '', 4: '' },
};
