import styled from 'styled-components';
import { useEffect, useContext } from 'react';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import validator from '../../../validation';
import { numberRegex } from '../../../constant/regularExpression';
import { ExpiredDateContext } from '../../../context/ExpiredDateContext';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 137px;
  gap: 5px;
`;

function ExpiredDateInput() {
  const {
    datePlaceholder,
    units,
    ExpiredDate,
    validations,
    refs,
    currentUnitRef,
    setExpiredDate,
    setValidation,
  } = useContext(ExpiredDateContext);

  const onDateChange = ({ target, nativeEvent: { data, inputType } }) => {
    if (numberRegex.test(data) || !data) {
      const unit = target.name;
      const newDate = target.value;

      updateDate(unit, newDate);
      updateValidation(unit, newDate);
      focusPrevOrder(unit, newDate, inputType);
      currentUnitRef.current = unit;
    }
  };

  const updateDate = (unit, date) => {
    setExpiredDate(prevDate => ({ ...prevDate, [unit]: date }));
  };

  const updateValidation = (unit, date) => {
    setValidation(prevValidations => ({
      ...prevValidations,
      [unit]: validator.validateDate(date),
    }));
  };

  const focusPrevOrder = (currentUnit, newDate, inputType) => {
    if (
      currentUnit !== units[0] &&
      newDate.length === 0 &&
      inputType === 'deleteContentBackward'
    ) {
      const currentIndex = units.findIndex(unit => unit === currentUnit);
      refs[units[currentIndex - 1]].current.focus();
    }
  };

  const focusInvalidInput = unit => {
    if (unit && validator.validateExpiredDate(refs[unit].current.value)) {
      if (Object.values(validations).every(isValid => isValid)) {
        return;
      }
      const invalidUnit = Object.keys(validations).find(
        unit => !validations[unit]
      );
      refs[invalidUnit].current.focus();
    }
  };

  useEffect(() => {
    focusInvalidInput(currentUnitRef.current);
  });

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
