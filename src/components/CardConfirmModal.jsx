import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import NextButton from './NextButton';
import * as S from 'styles.js';

export default function CardConfirmModal({ cardData, onConfirm }) {
  return (
    <>
      {ReactDOM.createPortal(<S.Backdrop />, document.getElementById('backdrop-root'))}
      {ReactDOM.createPortal(
        <S.Modal>
          <Card
            cardName={cardData.cardName}
            cardColor={cardData.cardColor}
            cardNumber={cardData.cardNumber}
            cardExpiration={cardData.cardExpiration}
            cardOwner={cardData.cardOwner}
            isSmall={false}
          />
          <S.UnderlineInput placeholder="카드 별칭을 입력해주세요." type="text" />
          <NextButton onClick={onConfirm} disabled={false} color={cardData.cardColor}>
            확인
          </NextButton>
        </S.Modal>,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}
