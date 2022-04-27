import React from 'react';
import styled from 'styled-components';

const SmallCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 208px;
  height: 130px;
  padding: 10px;
  font-size: 30px;
  color: #575757;

  background: #e5e5e5;
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  user-select: none;
`;

const CardTop = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  align-items: center;
`;

const CardMiddle = styled(CardTop)`
  margin-left: 30px;
`;

const CardBottom = styled(CardTop)`
  flex-direction: column;
`;

const CardText = styled.span`
  margin: 0 10px;
  font-size: 14px;
  line-height: 16px;
  vertical-align: middle;
  font-weight: 400;
  width: 30px;
  display: inline-block;
`;

const SmallCardChip = styled.div`
  width: 40px;
  height: 26px;
  left: 95px;
  top: 122px;

  background: #cbba64;
  border-radius: 4px;
`;

const CardBottomNumber = styled.div``;

const CardBottomInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export default function Card({ cardName, cardNumber, cardOwner, cardExpiration }) {
  const cardExpirationContent = () =>
    cardExpiration[0] || cardExpiration[1] ? cardExpiration.join('/') : 'MM/YY';

  return (
    <SmallCard>
      <CardTop>
        <CardText>{cardName}</CardText>
      </CardTop>
      <CardMiddle>
        <SmallCardChip></SmallCardChip>
      </CardMiddle>
      <CardBottom>
        <CardBottomNumber>
          <CardText>{cardNumber[0]}</CardText>
          <CardText>{cardNumber[1]}</CardText>
          <CardText>{'•'.repeat(cardNumber[2].length)}</CardText>
          <CardText>{'•'.repeat(cardNumber[3].length)}</CardText>
        </CardBottomNumber>
        <CardBottomInfo>
          <CardText>{cardOwner}</CardText>
          <CardText>{cardExpirationContent()}</CardText>
        </CardBottomInfo>
      </CardBottom>
    </SmallCard>
  );
}
