import React, { useEffect, useRef, useState } from 'react';

import InputField from './common/InputField.jsx';
import Input from './common/Input.jsx';

import { CARD_INFO_RULES, CREATE_MASKED_CHARACTERS } from '../constants';

export default function CardPasswordInput({ password, onChange }) {
  const [focusInputIndex, setFocusInputIndex] = useState(0);
  const inputRef = useRef([]);

  useEffect(() => {
    if (inputRef.current[focusInputIndex].value.length === 1) {
      const index = password.findIndex(passwordDigit => passwordDigit.length !== 1);
      inputRef.current[index]?.focus();
    }
  }, [password, focusInputIndex]);

  useEffect(() => {
    inputRef.current[focusInputIndex].focus();
  }, [focusInputIndex]);

  return (
    <InputField
      labelText="카드 비밀번호 앞 두 자리"
      wrapperWidth="15%"
      horizontalAlign="flex-start"
      separateEachInput={true}>
      {Array.from({ length: CARD_INFO_RULES.PASSWORD_LENGTH }).map((_, index) => (
        <Input
          key={index}
          type="password"
          value={password[index]}
          onChange={e => onChange(e, index)}
          width="100%"
          placeholder={CREATE_MASKED_CHARACTERS(1)}
          onFocus={() => setFocusInputIndex(index)}
          isComplete={password[0].length === 1}
          ref={element => (inputRef.current[index] = element)}
        />
      ))}
    </InputField>
  );
}
