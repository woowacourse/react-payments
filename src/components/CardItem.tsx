import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CREATE_MASKED_CHARACTERS } from '../constants/index';

const CardContainer = styled.div<{ isComplete: boolean; size: 'small' | 'large' }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  background: ${props => (props.isComplete ? '#00caa5' : '#d2d2d2')};

  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  ${props =>
    props.size === 'small' &&
    `
    width: 215px;
    min-height: 135px;
    padding: 14px;
    font-size: 14px;
    line-height: 14px;
    `}

  ${props =>
    props.size === 'large' &&
    `
    width: 290px;
    min-height: 180px;
    padding: 18px;
    font-size: 18px;
    line-height: 18px;
    `}
`;

const CardName = styled.p<{ size: 'small' | 'large' }>`
  ${props =>
    props.size === 'small' &&
    `
    margin: 0 0 20px 0;
    font-size: 10px;
    line-height: 10px;
    height: 10px;
    `}

  ${props =>
    props.size === 'large' &&
    `
    margin: 0 0 32px 0;
    font-size: 14px;
    line-height: 14px;
    height: 14px;
    `}
`;

const CardChip = styled.div<{ size: 'small' | 'large' }>`
  position: relative;
  background: #cbba64;
  border-radius: 4px;

  ${props =>
    props.size === 'small' &&
    `
    width: 40px;
    height: 26px;
    margin: 0 0 15px 0;
    `}

  ${props =>
    props.size === 'large' &&
    `
    width: 55px;
    height: 35px;
    margin: 0 0 20px 0;
    `}
`;

const CardNumber = styled.p<{ size: 'small' | 'large' }>`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  letter-spacing: 0.05em;

  ${props =>
    props.size === 'small' &&
    `
    margin: 0 0 12px 0;
    `}

  ${props =>
    props.size === 'large' &&
    `
    margin: 0 0 16px 0;
    `}
`;

const CardBottomSection = styled.div<{ size: 'small' | 'large' }>`
  display: flex;
  align-items: center;
  justify-content: space-between;

  ${props =>
    props.size === 'small' &&
    `
    height: 14px;
    margin: 0 4px;
    `}

  ${props =>
    props.size === 'large' &&
    `
    height: 18px;
    margin: 0 6px;
    `}
`;

const CardHolderName = styled.p`
  width: 65%;
  margin: 0;
  word-wrap: break-word;
`;

const CardExpireDate = styled.p`
  margin: 0;
`;

interface Props {
  size: 'small' | 'large';
  cardNumber: string[];
  holderName: string;
  expireDate: string[];
  isComplete: boolean;
}

export default function CardItem({ size, cardNumber, holderName, expireDate, isComplete }: Props) {
  return (
    <CardContainer size={size} isComplete={isComplete}>
      <CardName size={size}>{isComplete && '우아한카드'}</CardName>
      <CardChip size={size} />
      <CardNumber size={size}>
        <span>{cardNumber[0]}</span>
        <span>{cardNumber[1]}</span>
        <span>{CREATE_MASKED_CHARACTERS(cardNumber[2].length)}</span>
        <span>{CREATE_MASKED_CHARACTERS(cardNumber[3].length)}</span>
      </CardNumber>
      <CardBottomSection size={size}>
        <CardHolderName>{holderName}</CardHolderName>
        <CardExpireDate>
          {expireDate[0]} {expireDate[0].length !== 0 && '/'} {expireDate[1]}
        </CardExpireDate>
      </CardBottomSection>
    </CardContainer>
  );
}

CardItem.propTypes = {
  size: PropTypes.oneOf(['small', 'large']),
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  holderName: PropTypes.string,
  expireDate: PropTypes.arrayOf(PropTypes.string),
  isComplete: PropTypes.bool,
};
