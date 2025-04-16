import styled from '@emotion/styled';
import Input from '../Input/Input';
import { HandleInputParams } from '../CardPage/CardPage';
import HelperText from '../HelperText/HelperText';
import { checkNumber, checkValidLength } from '../../validators/inputValidator';
import { useState } from 'react';

type CardNumberInputProps = {
  values: string[];
  onChange: ({ e, idx }: HandleInputParams) => void;
};

const StyledCardNumberInput = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-top: 10px;
`;

const StyledLabel = styled.label`
  font-size: 12px;
  margin-bottom: 5px;
`;

const StyledInputWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
`;

const StyledHelperTextWrapper = styled.div`
  height: 30px;
`;

const CardNumberInput = ({ values, onChange }: CardNumberInputProps) => {
  const [isError, setIsError] = useState([false, false, false, false]);
  const [errorMessage, setErrorMessage] = useState('');
  const checkValidCardNumber = ({ e, idx }: HandleInputParams) => {
    const cardNumber = e.target.value;
    try {
      checkNumber(cardNumber);
      checkValidLength(cardNumber, 4);
      setIsError((prev) => {
        const updated = [...prev];
        updated[idx] = false;
        if (updated.every((errorState) => errorState === false)) {
          setErrorMessage('');
        }
        return updated;
      });
    } catch (error) {
      setIsError((prev) => {
        const updated = [...prev];
        updated[idx] = true;
        return updated;
      });

      if (error instanceof Error) {
        setErrorMessage(error.message);
      }
    }
  };

  return (
    <StyledCardNumberInput>
      <StyledLabel>카드 번호</StyledLabel>
      <StyledInputWrapper>
        {values.map((value: string, idx: number) => (
          <Input
            value={value}
            onChange={(e) => onChange({ e, idx })}
            onBlur={(e) => checkValidCardNumber({ e, idx })}
            maxLength={4}
            placeHolder={'1234'}
            isError={isError[idx]}
          />
        ))}
      </StyledInputWrapper>
      <StyledHelperTextWrapper>
        {errorMessage.length > 0 && <HelperText text={errorMessage} type={'isError'}></HelperText>}
      </StyledHelperTextWrapper>
    </StyledCardNumberInput>
  );
};

export default CardNumberInput;
