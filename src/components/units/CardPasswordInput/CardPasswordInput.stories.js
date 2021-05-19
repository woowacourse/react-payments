/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardPasswordInput from './index';
import INPUT_TYPE from '../../../constants/constants';

export default {
  title: 'units/CardPasswordInput',
  component: CardPasswordInput,
};

const Template = (args) => <CardPasswordInput {...args} />;

export const Default = Template.bind({});
Default.args = {
  ...INPUT_TYPE.PASSWORD,
  cardPassword: '',
  setCardPassword: () => {},
};
