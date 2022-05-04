import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import { DATE_INPUT_PLACEHOLDER } from '../../../constant';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  gap: 5px;
`;

function ExpiredDateInput({
  expiredDate,
  validations,
  inputRefs,
  onDateChange,
}) {
  return (
    <LabeledInput text="만료일">
      <InputWrapper>
        <InputContainer>
          {Object.keys(expiredDate).map((unit, index) => (
            <div key={unit}>
              {index !== 0 && '/'}
              <Input
                name={unit}
                ref={inputRefs[unit]}
                value={expiredDate[unit]}
                width="40px"
                type="number"
                maxLength={2}
                placeholder={DATE_INPUT_PLACEHOLDER[unit]}
                onChange={onDateChange}
                isValid={validations[unit]}
              />
            </div>
          ))}
        </InputContainer>
      </InputWrapper>
    </LabeledInput>
  );
}

export default ExpiredDateInput;
