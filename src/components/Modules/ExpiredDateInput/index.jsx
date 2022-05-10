import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import { COUNT, DATE_INPUT_PLACEHOLDER, INPUT_TITLE } from '../../../constant';
import { DATE_SEPARATOR } from '../../../constant/mark';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  gap: 5px;
`;

function ExpiredDateInput({ expiredDate, validations, inputRefs, onDateChange }) {
  return (
    <LabeledInput text={INPUT_TITLE.EXPIRED_DATE}>
      <InputWrapper>
        <InputContainer>
          {Object.keys(expiredDate).map((unit, index) => (
            <div key={unit}>
              {index !== 0 && DATE_SEPARATOR}
              <Input
                name={unit}
                ref={inputRefs[unit]}
                value={expiredDate[unit]}
                width="40px"
                type="number"
                maxLength={COUNT.DATE_MAX_COUNT}
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
