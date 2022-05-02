import React, { useState } from 'react';
import { InputContainer, Label } from './common/styled';
import ErrorMessage from './common/ErrorMessage';
import LetterCounter from './common/LetterCounter';
import Input from './common/Input';
import useValidator from '../hooks/useValidator';

const MAX_NAME_LENGTH = 30;

const convertToUpperCase = word => word.toUpperCase();
const notAlphabet = word => /[^a-zA-Z\s]/.test(word);

const validator = value => {
  if (notAlphabet(value)) {
    throw new Error('영어만 입력해 주세요.');
  }

  if (value.length > MAX_NAME_LENGTH) {
    throw new Error(`최대 ${MAX_NAME_LENGTH}글자까지 입력할 수 있습니다.`);
  }
};

function CardOwner({ owner, setOwner }) {
  const [errorMessage, setErrorMessage] = useState('');
  // const { errorMessage, validateInputs } = useValidator(validator);

  const handleInputChange = ({ target: { name, value } }) => {
    // validateInputs(value);
    const upperCaseValue = convertToUpperCase(value);
    try {
      validator(upperCaseValue);
    } catch (err) {
      setErrorMessage(err.message);
      return;
    }

    setErrorMessage('');
    setOwner(prevOwner => ({
      ...prevOwner,
      [name]: upperCaseValue,
    }));
  };

  return (
    <InputContainer position="relative">
      <div>
        <LetterCounter maxLength={30} currentLength={owner.name.length} />
        <Label>카드 소유자 이름(선택)</Label>
        <Input
          type="text"
          placeholder="카드에 표시된 이름과 동일하게 입력하세요."
          maxLength="30"
          onChange={handleInputChange}
          value={owner.name}
          name="name"
          required
        />
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardOwner;
