import React from 'react';
import ReactDOM from 'react-dom';

import Card from './Card';
import NextButton from './NextButton';
import * as S from 'styles.js';
import { useState } from 'react';
import FormBasic from './FormBasic';

export default function CardConfirmModal({ cardData, onConfirmCard }) {
  const [nickname, setNickname] = useState('');

  const onChangeInput = (e) => {
    setNickname(e.target.value);
  };

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
          <FormBasic onSubmitForm={onConfirmCard} payload={nickname}>
            <S.UnderlineInput
              onChange={onChangeInput}
              placeholder="카드 별칭을 입력해주세요."
              type="text"
            />
            <NextButton disabled={false} color={cardData.cardColor}>
              확인
            </NextButton>
          </FormBasic>
        </S.Modal>,
        document.getElementById('overlay-root'),
      )}
    </>
  );
}
