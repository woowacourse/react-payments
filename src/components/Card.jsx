import React, { useContext } from 'react';
import { TYPES, CardStateContext, CardDispatchContext } from 'context/CardContext.jsx';
import * as S from 'styles.js';
import validator from 'validations/validator';
import ErrorMessage from 'components/ErrorMessage';
import { useCallback } from 'react';

export default function Card({
  cardCompanyIndex,
  cardNumber,
  cardOwner,
  cardExpiration,
  cardName,

  color,
}) {
  const { cardCompanyErrorMessage } = useContext(CardStateContext);
  const dispatch = useContext(CardDispatchContext);

  const cardExpirationContent = () =>
    cardExpiration[0] || cardExpiration[1] ? cardExpiration.join('/') : 'MM/YY';

  const onClickCard = useCallback(() => {
    dispatch({ type: TYPES.SET_LIST_MODAL_FLAG, flag: true });
  }, []);

  return (
    <>
      <S.SmallCard onClick={onClickCard} color={color}>
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
