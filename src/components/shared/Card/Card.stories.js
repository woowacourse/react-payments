/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import Card from './index';
import PALETTE from '../../../styles/palette';

export default {
  title: 'shared/Card',
  component: Card,
};

const Template = (args) => <Card {...args} />;

export const PocoCard = Template.bind({});
PocoCard.args = {
  backgroundColor: PALETTE.COLLIN_ORANGE,
  width: '208px',
  height: '130px',
  bank: '포코 카드',
  owner: 'POCO',
  expirationDate: '04/21',
};

export const LoydCard = Template.bind({});
LoydCard.args = {
  backgroundColor: PALETTE.SUN_YELLOW,
  width: '208px',
  height: '130px',
  bank: '포코 카드',
  owner: 'LOYD',
  expirationDate: '02/17',
};
