import React, { useState } from 'react';
import { Input, InputContainer, Span, Label } from './common';

const MAX_CARD_CODE = 3;

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

function CardSecurityCode(props) {
  const [cardCode, setCardCode] = useState('');

  const handleInputChange = ({ target: { value } }) => {
    try {
      validator(value);
    } catch (err) {
      console.log(err.message);
      return;
    }
    setCardCode(value);
  };

  return (
    <InputContainer>
      <Label>보안코드(CVC/CVV)</Label>
      <Span>
        <Input type="password" maxLength="3" onChange={handleInputChange} value={cardCode} />
      </Span>
    </InputContainer>
  );
}

export default CardSecurityCode;
