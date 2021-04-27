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
  bankName: '포코 카드',
  ownerName: 'POCO',
  cardNumbers: { 1: '1111', 2: '2222', 3: '3333', 4: '4444' },
  expirationDate: { month: '04', year: '21' },
};

export const LoydCard = Template.bind({});
LoydCard.args = {
  backgroundColor: PALETTE.SUN_YELLOW,
  width: '208px',
  height: '130px',
  bankName: '포코 카드',
  ownerName: 'LOYD',
  cardNumbers: { 1: '4444', 2: '3333', 3: '2222', 4: '1111' },
  expirationDate: { month: '02', year: '17' },
};
