import React from 'react';

import styled from 'styled-components';

import { Shimmer } from '../Shimmer';
import { CardLayout } from './CardLayout';

export const Card = ({
  cardInfo: {
    cardType,
    cardNumbers,
    expireDate: { month, year },
    ownerName,
  },
  size,
  onClickCard,
}) => {
  const formattedCardNumbers = Object.values(cardNumbers)
    .map((number, idx) => (idx <= 1 ? number : '•'.repeat(number.length)))
    .join(' ');

  return (
    <CardLayout
      size={size}
      backgroundColor={cardType.color}
      onClickCard={onClickCard}
    >
      <CardTop>
        <CardText>{cardType.name}카드</CardText>
      </CardTop>
      <CardMiddle>
        <SmallCardChip />
      </CardMiddle>
      <CardBottom>
        <CardBottomNumber>
          <CardNumbersText>{formattedCardNumbers}</CardNumbersText>
        </CardBottomNumber>
        <CardBottomInfo>
          <CardText>{ownerName || 'NAME'}</CardText>
          <CardText>
            {month || 'MM'}/{year || 'YY'}
          </CardText>
        </CardBottomInfo>
      </CardBottom>
      <Shimmer />
    </CardLayout>
  );
};

const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: #cbba64;
  border-radius: 4px;
`;
const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;
const CardMiddle = styled.div`
  width: 100%;
  height: 100%;
  margin-left: 30px;

  display: flex;
  align-items: center;
`;
const CardBottom = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
const CardBottomNumber = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;
`;
const CardBottomInfo = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const CardText = styled.span`
  margin: 0 16px;
  max-width: 50%;

  font-size: 12px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
  word-break: break-all;
`;
const CardNumbersText = styled(CardText)`
  max-width: 100%;
  font-size: 14px;
  letter-spacing: 2px;
`;
