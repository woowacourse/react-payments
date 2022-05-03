import React, { useState } from 'react';
import ErrorMessage from './common/ErrorMessage';
import QuestionContainer from './common/QuestionIcon';

import * as S from './common/styles';

const MAX_CARD_CODE = 3;
const CVC_EXPLANATION = `CVC번호는 카드뒷면의 7자리 숫자 중 뒷 3자리입니다.`;

const validator = value => {
  if (value.includes(' ') || Number.isNaN(Number(value))) {
    throw new Error('숫자만 입력해주세요.');
  }

  if (value.includes('.')) {
    throw new Error('소수점은 입력하실 수 없습니다.');
  }

  if (value.length > MAX_CARD_CODE) {
    throw new Error(`한 칸당 최대 ${MAX_CARD_CODE}개의 숫자를 입력해야 합니다.`);
  }
};

function CardSecurityCode({ dispatch }) {
  const [cardCode, setCardCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    try {
      validator(value);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }

    const isCorrectSecurityCode = MAX_CARD_CODE === value.length;
    if (isCorrectSecurityCode) setErrorMessage('');

    setCardCode(value);
    dispatch({
      type: 'CARD_SECURITY_CODE',
      cardSecurityCode: value,
      isCorrectSecurityCode,
    });
  };

  return (
    <S.InputContainer position={'relative'} width={'40%'}>
      <div>
        <S.Label>보안코드(CVC/CVV)</S.Label>
        <S.InputWrapper width={'80%'}>
          <S.Span>
            <S.Input type={'password'} maxLength={'3'} onChange={handleInputChange} value={cardCode} />
          </S.Span>
        </S.InputWrapper>
        <QuestionContainer>{CVC_EXPLANATION}</QuestionContainer>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </S.InputContainer>
  );
}

export default CardSecurityCode;
