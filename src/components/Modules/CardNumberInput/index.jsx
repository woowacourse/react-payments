import { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import validator from '../../../validation';
import InputLabel from '../../Atoms/InputLabel';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 318px;
  gap: 5px;
`;

function CardNumberInput() {
  const orders = ['first', 'second', 'third', 'four'];
  const [numbers, setNumbers] = useState(
    Object.fromEntries(orders.map(order => [order, '']))
  );
  const [validations, setValidations] = useState(
    Object.fromEntries(orders.map(order => [order, false]))
  );
  const refs = Object.fromEntries(orders.map(order => [order, useRef()]));
  const currentOrderRef = useRef();

  const handleNumberChange = ({ target, nativeEvent }) => {
    updateNumbers(target.name, target.value);
    updateValidations(target.name, validator.validateCardNumber(target.value));
    focusPrevOrder(target.name, target.value, nativeEvent.inputType);
    currentOrderRef.current = target.name;
  };

  const updateNumbers = (order, newNumber) => {
    setNumbers(prevNumbers => ({ ...prevNumbers, [order]: newNumber }));
  };

  const updateValidations = (order, isValid) => {
    setValidations(prevValidation => ({ ...prevValidation, [order]: isValid }));
  };

  const focusPrevOrder = (currentOrder, newNumber, inputType) => {
    if (
      currentOrder !== 'first' &&
      newNumber.length === 0 &&
      inputType === 'deleteContentBackward'
    ) {
      refs[
        orders[orders.findIndex(order => order === currentOrder) - 1]
      ].current.focus();
    }
  };

  const focusInvalidInput = order => {
    if (order && validator.validateCardNumber(refs[order].current.value)) {
      if (Object.values(validations).every(isValid => isValid)) {
        return;
      }
      const invalidOrder = Object.keys(validations).find(
        order => !validations[order]
      );
      refs[invalidOrder].current.focus();
    }
  };

  useEffect(() => {
    focusInvalidInput(currentOrderRef.current);
  });

  return (
    <>
      <InputLabel>카드 번호</InputLabel>
      <br />
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
                height="25px"
                maxLength={4}
                onChange={handleNumberChange}
                isValid={validations[order]}
              />
            </>
          ))}
        </InputContainer>
      </InputWrapper>
    </>
  );
}

export default CardNumberInput;
