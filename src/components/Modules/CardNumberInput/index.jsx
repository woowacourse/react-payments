import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import useCardNumberInput from '../../../hooks/Input/useCardNumberInput';
import { CARD_NUMBER_INPUT_NAMES } from '../../../constant/inputNames';
import { COUNT, INPUT_TITLE } from '../../../constant';
import { CARD_NUMBER_SEPARATOR } from '../../../constant/mark';

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
                type={
                  index < COUNT.CARD_NUMBER_HIDE_COUNT ? 'number' : 'password'
                }
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
