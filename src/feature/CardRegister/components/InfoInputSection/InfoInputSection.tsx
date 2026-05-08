import {useState} from 'react';
import CvcField from './CvcField/CvCField';
import ExpiryField from './ExpiryField/ExpiryField';
import InputContainer from './InputContainer/InputContainer';
import NumberField from './NumberField/NumberField';
import type {CardNumbersType} from '../../../../common/types/CardInfoType';
import {createFlags, computeNextErrorInfo, computeNextTouched} from './fieldState';
import styled from 'styled-components';

const NUMBER_INPUT_COUNT = 4;
const NUMBER_LENGTH = 4;
const NUMBER_ERROR_MSG = '카드 번호 4자리를 입력해 주세요';

type Props = {
  cardNumbers: CardNumbersType;
  setCardNumbers: (value: CardNumbersType) => void;
  expiryMonth: string;
  setExpiryMonth: (value: string) => void;
  expiryYear: string;
  setExpiryYear: (value: string) => void;
};

const InfoInputSection = ({
  cardNumbers,
  setCardNumbers,
  expiryMonth,
  setExpiryMonth,
  expiryYear,
  setExpiryYear,
}: Props) => {
  const [cvcNumber, setCvcNumber] = useState('');
  const [, setFieldErrors] = useState({expiry: false, cvc: false});

  const [numberErrorInfo, setNumberErrorInfo] = useState<{
    flag: boolean[];
    messages: string[];
    currentErrorMsg: string;
  }>({
    flag: createFlags(NUMBER_INPUT_COUNT),
    messages: Array(NUMBER_INPUT_COUNT).fill(''),
    currentErrorMsg: '',
  });
  const [numberTouched, setNumberTouched] = useState<boolean[]>(createFlags(NUMBER_INPUT_COUNT));

  const numberFirstErrorIdx = numberErrorInfo.flag.indexOf(true);

  const handleNumberChange = (index: number, eValue: string) => {
    const value = eValue.trim();
    if (!/^\d*$/.test(value)) return;
    if (value.length > NUMBER_LENGTH) return;

    const newChunks = cardNumbers.map((chunk, i) => (i === index ? value : chunk));
    setCardNumbers(newChunks);

    if (numberTouched[index] && value.length === NUMBER_LENGTH) {
      const next = computeNextErrorInfo(numberErrorInfo.flag, numberErrorInfo.messages, index, false, NUMBER_ERROR_MSG);
      setNumberErrorInfo(next);
    }
  };

  const handleNumberBlur = (index: number, eValue: string) => {
    setNumberTouched((prev) => computeNextTouched(prev, index));
    const isValid = eValue.length === NUMBER_LENGTH;
    const next = computeNextErrorInfo(numberErrorInfo.flag, numberErrorInfo.messages, index, !isValid, NUMBER_ERROR_MSG);
    setNumberErrorInfo(next);
  };

  return (
    <Container>
      <InputContainer title='결제할 카드 번호를 입력해 주세요' description='본인 명의의 카드만 결제 가능합니다.'>
        <NumberField
          cardNumbers={cardNumbers}
          firstErrorIdx={numberFirstErrorIdx}
          errorMsg={numberErrorInfo.currentErrorMsg}
          onChange={handleNumberChange}
          onBlur={handleNumberBlur}
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
