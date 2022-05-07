import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import useExpiredDateInput from '../../../hooks/Input/useExpiredDateInput';
import { DATE_INPUT_PLACEHOLDER } from '../../../constant';
import { EXPIRED_DATE_INPUT_NAMES } from '../../../constant/inputNames';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  gap: 5px;
`;

function ExpiredDateInput() {
  const { expiredDate, validations, inputRefs, onDateChange } =
    useExpiredDateInput(EXPIRED_DATE_INPUT_NAMES);

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
