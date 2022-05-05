import React from 'react';
import styled, { css } from 'styled-components';
import { Span } from './styled';

const CardBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 208px;
  height: 130px;
  padding: 16px;
  background-color: ${props => props.hexColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 10px 0;
  cursor: pointer;

  &:hover {
    background-color: ${props => `${props.hexColor}cc`};
  }

  ${props =>
    props.large &&
    css`
      width: 290px;
      height: 180px;
    `}
`;
const CardHeader = styled.div``;
const CardChip = styled.div`
  width: 45px;
  height: 25px;
  margin: 8px;
  border-radius: 10%;
  background-color: #cbba64;
`;
const CardBottom = styled.div`
  width: 100%;
`;
const CardNumber = styled.div``;
const CardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;
const CardParagraph = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${props => props.width}px;
`;

function Card({
  large,
  handleClickBox,
  cardCompany: { hexColor, name },
  cardNumber,
  cardOwnerName,
  cardDate: { month, year },
}) {
  return (
    <CardBox onClick={handleClickBox} hexColor={hexColor} large={large}>
      <CardHeader>
        <Span>{name}</Span>
      </CardHeader>
      <CardChip />
      <CardBottom>
        <CardNumber>
          <Span>{cardNumber}</Span>
        </CardNumber>
        <CardInfo>
          <CardParagraph width="120">{cardOwnerName || 'NAME'}</CardParagraph>
          <CardParagraph>{`${month || 'MM'} / ${year || 'YY'}`}</CardParagraph>
        </CardInfo>
      </CardBottom>
    </CardBox>
  );
}

export default Card;
