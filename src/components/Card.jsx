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

const CardTextEllipsis = styled(CardText)`
  text-align: left;
  width: 220px;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`;

const CardNumber = styled(CardText)`
  width: 30px;
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
          <CardNumber>{cardNumber[0]}</CardNumber>
          <CardNumber>{cardNumber[1]}</CardNumber>
          <CardNumber>{'•'.repeat(cardNumber[2].length)}</CardNumber>
          <CardNumber>{'•'.repeat(cardNumber[3].length)}</CardNumber>
        </CardBottomNumber>
        <CardBottomInfo>
          <CardTextEllipsis>{cardOwner || 'NAME'}</CardTextEllipsis>
          <CardText>{cardExpirationContent()}</CardText>
        </CardBottomInfo>
      </CardBottom>
    </SmallCard>
  );
}
