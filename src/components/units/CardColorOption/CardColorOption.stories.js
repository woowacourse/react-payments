/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import CardColorOption from './index';
import PALETTE from '../../../styles/palette';

export default {
  title: 'units/CardColorOption',
  component: CardColorOption,
};

const Template = (args) => <CardColorOption {...args} />;

export const PocoCardOption = Template.bind({});
PocoCardOption.args = {
  color: PALETTE.POCO_RED,
  bankName: '포코 카드',
};

export const DobyCardOption = Template.bind({});
DobyCardOption.args = {
  color: PALETTE.DOBY_PINK,
  bankName: '도비 카드',
};
