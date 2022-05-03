import { useContext } from 'react';
import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import validator from '../../../validation';
import { numberRegex } from '../../../constant/regularExpression';
import { CardNumberContext } from '../../../context/CardNumberContext';
import useFocus from '../../../hooks/useFocus';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 318px;
  gap: 5px;
`;

function CardNumberInput() {
  const {
    orders,
    numbers,
    validations,
    refs,
    currentOrderRef,
    setNumbers,
    setValidations,
  } = useContext(CardNumberContext);

  const { focusPrevOrder } = useFocus({
    validate: validator.validateCardNumber,
    orders,
    validations,
    refs,
    currentOrderRef,
  });

  const handleNumberChange = ({ target, nativeEvent: { data, inputType } }) => {
    if ((numberRegex.test(data) || !data) && target.value.length <= 4) {
      const order = target.name;
      const newNumber = target.value;

      updateNumbers(order, newNumber);
      updateValidations(order, validator.validateCardNumber(newNumber));
      focusPrevOrder(order, newNumber, inputType);
      currentOrderRef.current = order;
    }
  };

  const updateNumbers = (order, newNumber) => {
    setNumbers(prevNumbers => ({ ...prevNumbers, [order]: newNumber }));
  };

  const updateValidations = (order, isValid) => {
    setValidations(prevValidation => ({ ...prevValidation, [order]: isValid }));
  };

  return (
    <LabeledInput text="카드 번호">
      <InputWrapper>
        <InputContainer>
          {Object.keys(numbers).map((order, index) => (
            <>
              {index !== 0 && '-'}
              <Input
                key={order}
                name={order}
                ref={refs[order]}
                value={numbers[order]}
                type={index < 2 ? 'number' : 'password'}
                width="50px"
                maxLength={4}
                onChange={handleNumberChange}
                isValid={validations[order]}
              />
            </>
          ))}
        </InputContainer>
      </InputWrapper>
    </LabeledInput>
  );
}

export default CardNumberInput;
