import React, { useContext } from 'react';
import * as S from '../styles.js';
import validator from '../validations/validator';
import ErrorMessage from './ErrorMessage';
import CardContext from '../CardContext';
import TYPES from '../reducers/card.actions.js';

export default function Card({
  cardCompanyIndex,
  cardNumber,
  cardOwner,
  cardExpiration,
  cardName,
  onClick,
  color,
}) {
  const { cardCompanyErrorMessage } = useContext(CardContext);

  const cardExpirationContent = () =>
    cardExpiration[0] || cardExpiration[1] ? cardExpiration.join('/') : 'MM/YY';

  return (
    <>
      <S.SmallCard onClick={onClick} color={color}>
        <S.CardTop>
          <S.CardText>{cardName}</S.CardText>
        </S.CardTop>
        <S.CardMiddle>
          <S.SmallCardChip></S.SmallCardChip>
        </S.CardMiddle>
        <S.CardBottom>
          <S.CardBottomNumber>
            <S.CardNumber>{cardNumber[0]}</S.CardNumber>
            <S.CardNumber>{cardNumber[1]}</S.CardNumber>
            <S.CardNumber>{'•'.repeat(cardNumber[2].length)}</S.CardNumber>
            <S.CardNumber>{'•'.repeat(cardNumber[3].length)}</S.CardNumber>
          </S.CardBottomNumber>
          <S.CardBottomInfo>
            <S.CardTextEllipsis>{cardOwner || 'NAME'}</S.CardTextEllipsis>
            <S.CardText>{cardExpirationContent()}</S.CardText>
          </S.CardBottomInfo>
        </S.CardBottom>
      </S.SmallCard>
      <ErrorMessage
        value={cardCompanyIndex}
        validate={validator.checkCardCompany}
        type={TYPES.SET_COMPANY_ERROR_MESSAGE}
      >
        {cardCompanyErrorMessage}
      </ErrorMessage>
    </>
  );
}
