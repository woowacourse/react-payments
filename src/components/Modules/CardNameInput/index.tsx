import styled from 'styled-components';
import { ChangeEvent, ChangeEventHandler } from 'react';
import { COUNT, INPUT_PLACEHOLDER } from '../../../constant';
import Input from '../../Atoms/Input';

interface CardNameInputProps {
  cardName: string;
  validation: boolean;
  onCardNameChange: ChangeEventHandler<HTMLInputElement>;
}

function CardNameInput({ cardName, validation, onCardNameChange }: CardNameInputProps) {
  return (
    <InputWrapper>
      <Input
        value={cardName}
        width="244px"
        height="22px"
        backgroundColor="white"
        maxLength={COUNT.CARD_NAME_MAX_LENGTH}
        placeholder={INPUT_PLACEHOLDER.CARD_NAME}
        onChange={onCardNameChange}
        isValid={validation}
      />
    </InputWrapper>
  );
}

export default CardNameInput;

const InputWrapper = styled.div`
  border-bottom: 1.5px solid #737373;
  font-weight: 400;
  font-size: 18px;
  line-height: 21px;
`;
