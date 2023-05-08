import React from 'react';

import { CardItem } from './CardItem';

export default {
  component: CardItem,
  title: 'CardItem',
};

export const Default: React.FC = () => (
  <CardItem
    cardNumberFirst='1234'
    cardNumberSecond='1234'
    cardNumberThird='4567'
    cardNumberFourth='8901'
    month='12'
    year='21'
    company=''
  ></CardItem>
);
