import React from 'react';

import { Span } from '../styled';
import { CardBottom, CardBox, CardChip, CardHeader, CardInfo, CardNumber, CardParagraph } from './style';

const convertToCardNumberString = ({ cardNoA, cardNoB, cardNoC, cardNoD }) =>
  `${cardNoA} ${cardNoB} ${'*'.repeat(cardNoC.length)} ${'*'.repeat(cardNoD.length)}`;

function Card({
  large,
  handleClickBox,
  cardCompany: { hexColor, name },
  cardNumbers,
  cardOwner,
  cardDate: { month, year },
}) {
  return (
    <CardBox onClick={handleClickBox} hexColor={hexColor} large={large} data-testid="card">
      <CardHeader>
        <Span>{name}</Span>
      </CardHeader>
      <CardChip />
      <CardBottom>
        <CardNumber>
          <Span>{convertToCardNumberString(cardNumbers)}</Span>
        </CardNumber>
        <CardInfo>
          <CardParagraph width="120">{cardOwner.name || 'NAME'}</CardParagraph>
          <CardParagraph>{`${month || 'MM'} / ${year || 'YY'}`}</CardParagraph>
        </CardInfo>
      </CardBottom>
    </CardBox>
  );
}

export default Card;
