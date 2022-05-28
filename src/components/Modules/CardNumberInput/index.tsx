import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import { COUNT, INPUT_TITLE } from '../../../constant';
import { CARD_NUMBER_SEPARATOR } from '../../../constant/mark';
import { NumberInput } from 'types/SomeInput';
import { MutableRefObject, ChangeEvent } from 'react';

interface CarNumberInputProps {
  numbers: NumberInput<string>;
  validations: NumberInput<boolean>;
  inputRefs: NumberInput<MutableRefObject<HTMLInputElement | null>>;
  handleNumberChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function CardNumberInput({
  numbers,
  validations,
  inputRefs,
  handleNumberChange,
}: CarNumberInputProps) {
  return (
    <LabeledInput text={INPUT_TITLE.CARD_NUMBER}>
      <InputWrapper>
        <InputContainer>
          {Object.keys(numbers).map((order, index) => (
            <div key={order}>
              {index !== 0 && CARD_NUMBER_SEPARATOR}
              <Input
                name={order}
                ref={inputRefs[order]}
                value={numbers[order]}
                type={index < COUNT.CARD_NUMBER_HIDE_COUNT ? 'number' : 'password'}
                width="50px"
                maxLength={COUNT.CARD_NUMBER_MAX_COUNT}
                onChange={handleNumberChange}
                isValid={validations[order]}
              />
            </div>
          ))}
        </InputContainer>
      </InputWrapper>
    </LabeledInput>
  );
}

export default CardNumberInput;

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 318px;
  gap: 5px;
`;
