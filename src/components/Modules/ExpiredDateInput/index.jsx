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
  const {
    datePlaceholder,
    units,
    expiredDate,
    validations,
    refs,
    currentUnitRef,
    setExpiredDate,
    setValidation,
  } = useContext(ExpiredDateContext);

  const { focusPrevOrder } = useFocus({
    validate: validator.validateExpiredDate,
    orders: units,
    validations,
    refs,
    currentOrderRef: currentUnitRef,
  });

  const onDateChange = ({ target, nativeEvent: { data, inputType } }) => {
    if ((numberRegex.test(data) || !data) && target.value.length <= 2) {
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
