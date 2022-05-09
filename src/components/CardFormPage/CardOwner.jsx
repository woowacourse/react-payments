import React, { useContext } from 'react';

import { InputContainer, InputWrapper, Label } from '../common/styled';
import ErrorMessage from '../common/ErrorMessage';
import LetterCounter from '../common/LetterCounter';
import Input from '../common/Input';

import useInputHandler from '../../hooks/useInputHandler';
import { validateOwner } from '../../validator';
import { CardInfoContext } from '../../context';

const convertToUpperCase = word => word.toUpperCase();

function CardOwner() {
  const { owner } = useContext(CardInfoContext);

  const { errorMessage, updateInputState } = useInputHandler(validateOwner, {
    type: 'UPDATE_OWNER',
    key: 'owner',
    prevData: owner,
  });

  const handleInputChange = ({ target: { name, value } }) => {
    updateInputState({ name, value: convertToUpperCase(value) });
  };

  return (
    <InputContainer position="relative">
      <div>
        <LetterCounter maxLength={30} currentLength={owner.name.length} />
        <Label>카드 소유자 이름(선택)</Label>
        <InputWrapper>
          <Input
            type="text"
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            maxLength="30"
            onChange={handleInputChange}
            value={owner.name}
            name="name"
            width="100%"
            data-testid="name"
          />
        </InputWrapper>
      </div>
      <ErrorMessage>{errorMessage}</ErrorMessage>
    </InputContainer>
  );
}

export default CardOwner;
