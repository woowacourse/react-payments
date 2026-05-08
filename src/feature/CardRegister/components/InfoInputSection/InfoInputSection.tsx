import {useState} from 'react';
import CvcField from './CvcField/CvCField';
import ExpiryField from './ExpiryField/ExpiryField';
import InputContainer from './InputContainer/InputContainer';
import NumberField from './NumberField/NumberField';
import type {useCardNumbers} from '../../hooks/useCardNumbers';
import styled from 'styled-components';

type Props = {
  numberField: ReturnType<typeof useCardNumbers>;
  expiryMonth: string;
  setExpiryMonth: (value: string) => void;
  expiryYear: string;
  setExpiryYear: (value: string) => void;
};

const InfoInputSection = ({numberField, expiryMonth, setExpiryMonth, expiryYear, setExpiryYear}: Props) => {
  const [cvcNumber, setCvcNumber] = useState('');
  const [, setFieldErrors] = useState({expiry: false, cvc: false});

  return (
    <Container>
      <InputContainer title='결제할 카드 번호를 입력해 주세요' description='본인 명의의 카드만 결제 가능합니다.'>
        <NumberField
          cardNumbers={numberField.cardNumbers}
          format={numberField.format}
          firstErrorIdx={numberField.firstErrorIdx}
          errorMsg={numberField.errorMsg}
          onChange={numberField.handleChange}
          onBlur={numberField.handleBlur}
        />
      </InputContainer>
      <InputContainer title='카드 유효기간을 입력해 주세요' description='월/년도(MMYY)를 순서대로 입력해 주세요.'>
        <ExpiryField
          expiryMonth={expiryMonth}
          expiryYear={expiryYear}
          setExpiryMonth={setExpiryMonth}
          setExpiryYear={setExpiryYear}
          setIsError={(value) => setFieldErrors((prev) => ({...prev, expiry: value}))}
        />
      </InputContainer>
      <InputContainer title='CVC 번호를 입력해 주세요'>
        <CvcField
          cvcNumber={cvcNumber}
          setCvcNumber={setCvcNumber}
          setIsError={(value) => setFieldErrors((prev) => ({...prev, cvc: value}))}
        />
      </InputContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

export default InfoInputSection;
