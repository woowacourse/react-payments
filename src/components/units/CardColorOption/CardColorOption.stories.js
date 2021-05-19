/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardColorOption from './index';

export default {
  title: 'units/CardColorOption',
  component: CardColorOption,
};

const Template = (args) => <CardColorOption {...args} />;

export const PocoCardOption = Template.bind({});
PocoCardOption.args = {
  onClickOption: () => {},
  bankId: '1p',
};

export const DobyCardOption = Template.bind({});
DobyCardOption.args = {
  onClickOption: () => {},
  bankId: '6d',
};
