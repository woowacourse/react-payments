import styled from 'styled-components';
import { useContext } from 'react';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import validator from '../../../validation';
import { numberRegex } from '../../../constant/regularExpression';
import { ExpiredDateContext } from '../../../context/ExpiredDateContext';
import useFocus from '../../../hooks/useFocus';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  gap: 5px;
`;

function ExpiredDateInput() {
  const { datePlaceholder, expiredDate, validations, refs, onDateChange } =
    useContext(ExpiredDateContext);

  return (
    <LabeledInput text="만료일">
      <InputWrapper>
        <InputContainer>
          {Object.keys(expiredDate).map((unit, index) => (
            <>
              {index !== 0 && '/'}
              <Input
                key={unit}
                name={unit}
                ref={refs[unit]}
                value={expiredDate[unit]}
                width="40px"
                type="number"
                maxLength={2}
                placeholder={datePlaceholder[unit]}
                onChange={onDateChange}
                isValid={validations[unit]}
              />
            </>
          ))}
        </InputContainer>
      </InputWrapper>
    </LabeledInput>
  );
}

export default ExpiredDateInput;
