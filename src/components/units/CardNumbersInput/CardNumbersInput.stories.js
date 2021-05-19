/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardNumbersInput from './index';
import INPUT_TYPE from '../../../constants/constants';

export default {
  title: 'units/CardNumbersInput',
  component: CardNumbersInput,
};

const Template = (args) => <CardNumbersInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...INPUT_TYPE.CARD_NUMBERS,
  cardNumbers: { 1: '', 2: '', 3: '', 4: '' },
  setCardNumbers: () => {},
};
