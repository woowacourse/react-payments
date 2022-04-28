import React, { useState, useEffect } from 'react';
import ErrorMessage from './common/ErrorMessage';
import { Input, InputContainer, Span, Label, InputWrapper } from './common';
import QuestionContainer from './common/QuestionIcon';

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

function CardSecurityCode({ correctSecurityCodeCallback }) {
  const [cardCode, setCardCode] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    try {
      validator(value);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }
    setCardCode(value);
  };

  useEffect(() => {
    const isCorrectSecurityCode = MAX_CARD_CODE === cardCode.length;

    if (isCorrectSecurityCode) setErrorMessage('');

    correctSecurityCodeCallback(isCorrectSecurityCode);
  }, [correctSecurityCodeCallback, cardCode]);

  return (
    <InputContainer position="relative" width="40%">
      <div>
        <Label>보안코드(CVC/CVV)</Label>
        <InputWrapper width="80%">
          <Span>
            <Input type="password" maxLength="3" onChange={handleInputChange} value={cardCode} />
          </Span>
        </InputWrapper>
        <QuestionContainer>{CVC_EXPLANATION}</QuestionContainer>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardSecurityCode;
