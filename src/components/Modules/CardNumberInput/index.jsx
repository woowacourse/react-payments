import { useState } from 'react';
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
  const [numbers, setNumbers] = useState({
    first: '',
    second: '',
    third: '',
    four: '',
  });

  const [validations, setValidations] = useState({
    first: false,
    second: false,
    third: false,
    four: false,
  });

  const handleNumberChange = ({ target }) => {
    updateNumbers(target.name, target.value);
    updateValidation(target.name, validator.validateCardNumber(target.value));
  };

  const updateNumbers = (order, newNumber) => {
    setNumbers(prevNumbers => ({ ...prevNumbers, [order]: newNumber }));
  };

  const updateValidation = (order, isValid) => {
    setValidations(prevValidation => ({ ...prevValidation, [order]: isValid }));
  };

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
                value={numbers[order]}
                type={index < 2 ? 'number' : 'password'}
                width="45px"
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
