import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import useCardNumberInput from '../../../hooks/Input/useCardNumberInput';
import { CARD_NUMBER_INPUT_NAMES } from '../../../constant/inputNames';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 318px;
  gap: 5px;
`;

function CardNumberInput() {
  const { numbers, validations, inputRefs, handleNumberChange } =
    useCardNumberInput(CARD_NUMBER_INPUT_NAMES);

  return (
    <LabeledInput text="카드 번호">
      <InputWrapper>
        <InputContainer>
          {Object.keys(numbers).map((order, index) => (
            <div key={order}>
              {index !== 0 && '-'}
              <Input
                name={order}
                ref={inputRefs[order]}
                value={numbers[order]}
                type={index < 2 ? 'number' : 'password'}
                width="50px"
                maxLength={4}
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
