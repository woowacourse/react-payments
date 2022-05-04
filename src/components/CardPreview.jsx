import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CREATE_MASKED_CHARACTERS } from '../constants';

const CardContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
`;

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  vertical-align: middle;
  width: 215px;
  min-height: 135px;
  padding: 10px 14px;
  font-size: 14px;

  background: ${props => (props.isComplete ? '#00caa5' : '#d2d2d2')};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
`;

const CardName = styled.p`
  margin-bottom: 20px;
  font-size: 10px;
`;

const CardChip = styled.div`
  position: relative;
  width: 40px;
  height: 26px;
  margin-bottom: 15px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardNumber = styled.p`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  height: 10px;
  margin-bottom: 12px;
`;

const CardBottomSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 4px;
`;

const CardHolderName = styled.p`
  width: 60%;
  word-wrap: break-word;
`;

const CardExpireDate = styled.p``;

export default function CardPreview({ cardNumber, holderName, expireDate, isComplete }) {
  return (
    <CardContainer>
      <SmallCard isComplete={isComplete}>
        <CardName>우아한카드</CardName>
        <CardChip />
        <CardNumber>
          <span>{cardNumber[0]}</span>
          <span>{cardNumber[1]}</span>
          <span>{CREATE_MASKED_CHARACTERS(cardNumber[2].length)}</span>
          <span>{CREATE_MASKED_CHARACTERS(cardNumber[3].length)}</span>
        </CardNumber>
        <CardBottomSection>
          <CardHolderName>{holderName}</CardHolderName>
          <CardExpireDate>
            {expireDate[0]} {expireDate[0].length !== 0 && '/'} {expireDate[1]}
          </CardExpireDate>
        </CardBottomSection>
      </SmallCard>
    </CardContainer>
  );
}

CardPreview.propTypes = {
  cardNumber: PropTypes.arrayOf(PropTypes.string),
  holderName: PropTypes.string,
  expireDate: PropTypes.arrayOf(PropTypes.string),
};
