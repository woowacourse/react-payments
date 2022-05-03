import { useContext } from 'react';
import styled from 'styled-components';
import LabeledInput from '../../Atoms/LabeledInput';
import InputWrapper from '../../Atoms/InputWrapper';
import Input from '../../Atoms/Input';
import { CardNumberContext } from '../../../context/CardNumberContext';

const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 318px;
  gap: 5px;
`;

function CardNumberInput() {
  const { numbers, validations, refs, handleNumberChange } =
    useContext(CardNumberContext);

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
