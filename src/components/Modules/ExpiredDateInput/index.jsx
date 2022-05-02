import styled from 'styled-components';
import { useState, useRef } from 'react';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import validator from '../../../validation';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  gap: 5px;
`;

function ExpiredDateInput() {
  const datePlaceholder = { month: 'MM', year: 'YY' };
  const [ExpiredDate, setExpiredDate] = useState({ month: '', year: '' });
  const [validations, setValidation] = useState({ month: false, year: false });
  const refs = { month: useRef(), year: useRef() };

  const onDateChange = ({ target }) => {
    updateDate(target.name, target.value);
    updateValidation(target.name, target.value);
  };
  1;

  const updateDate = (unit, date) => {
    setExpiredDate(prevDate => ({ ...prevDate, [unit]: date }));
  };

  const updateValidation = (unit, date) => {
    setValidation(prevValidations => ({
      ...prevValidations,
      [unit]: validator.validateDate(date),
    }));
  };

  return (
    <LabeledInput text="만료일">
      <InputWrapper>
        <InputContainer>
          {Object.keys(ExpiredDate).map((unit, index) => (
            <>
              {index !== 0 && '/'}
              <Input
                key={unit}
                name={unit}
                ref={refs[unit]}
                value={ExpiredDate[unit]}
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
