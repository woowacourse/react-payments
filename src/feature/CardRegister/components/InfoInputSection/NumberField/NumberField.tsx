import {useState} from 'react';
import Input from '../../../../../common/components/Input/Input';
import Label from '../../../../../common/components/Label/Label';
import styled from 'styled-components';

const NumberField = ({
  cardNumbers,
  setCardNumbers,
  setIsError,
}: {
  cardNumbers: [string, string, string, string];
  setCardNumbers: (value: [string, string, string, string]) => void;
  setIsError: (value: boolean) => void;
}) => {
  const INPUT_COUNT = 4;
  const NUMBER_LENGTH = 4;
  const createFlags = () => Array.from({length: INPUT_COUNT}, () => false);

  const [errorInfo, setErrorInfo] = useState({
    flag: createFlags(),
    currentErrorMsg: '',
  });
  const [isTouched, setIsTouched] = useState(createFlags());

  const handleNumbersChange = (index: number, eValue: string) => {
    const value = eValue.trim();

    if (!/^\d*$/.test(value)) return;
    if (value.length > NUMBER_LENGTH) return;

    const newChunks = cardNumbers.map((chunk, i) => (i === index ? value : chunk)) as [string, string, string, string];
    setCardNumbers(newChunks);
    clearErrorWhenComplete(index, value);
  };

  const ERROR_MSG = '카드 번호 4자리를 입력해 주세요';

  const updateTouched = (index: number) => {
    setIsTouched((prev) => prev.map((touched, i) => (i === index ? true : touched)));
  };

  const clearErrorWhenComplete = (index: number, value: string) => {
    if (!isTouched[index] || value.length !== NUMBER_LENGTH) return;

    updateErrorInfo(index, false);
  };

  const updateErrorInfo = (index: number, hasError: boolean) => {
    const newFlag = errorInfo.flag.map((flag, i) => (i === index ? hasError : flag));
    const firstErrorIdx = newFlag.indexOf(true);

    setErrorInfo({
      flag: newFlag,
      currentErrorMsg: firstErrorIdx === -1 ? '' : ERROR_MSG,
    });
    setIsError(firstErrorIdx !== -1);
  };

  const handleNumbersBlur = (index: number, eValue: string) => {
    updateTouched(index);

    const isValid = eValue.length === NUMBER_LENGTH;
    updateErrorInfo(index, !isValid);
  };

  const firstErrorIdx = errorInfo.flag.indexOf(true);

  return (
    <StyledField>
      <Label value='카드 번호' />
      <InputWrapper>
        {cardNumbers.map((chunk, index) => (
          <CardNumberInput
            key={index}
            value={chunk}
            placeholder='1234'
            inputMode='numeric'
            maxLength={4}
            strokeMode={index === firstErrorIdx ? 'error' : 'default'}
            onChange={(e) => handleNumbersChange(index, e.target.value)}
            onBlur={(e) => handleNumbersBlur(index, e.target.value)}
          />
        ))}
      </InputWrapper>

      <ErrorMessage>{errorInfo.currentErrorMsg}</ErrorMessage>
    </StyledField>
  );
};

const StyledField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-top: 12px;

  width: 100%;
`;

const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 8px;
`;

const CardNumberInput = styled(Input)`
  box-sizing: border-box;
  width: 100%;
  height: 32px;
`;

const ErrorMessage = styled.span`
  min-height: 20px;
  font-size: 9.5px;
  font-weight: 400;
  color: #ff3d3d;
`;

export default NumberField;
