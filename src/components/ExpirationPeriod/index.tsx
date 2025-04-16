import { useEffect, useRef, useState } from 'react';
import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';
import styled from '@emotion/styled';

interface PeriodProps {
  period: string[];
  setPeriod: React.Dispatch<React.SetStateAction<string[]>>;
  separatorRef?: React.RefObject<HTMLDivElement | null>;
}

const ExpirationPeriod: React.FC<PeriodProps> = ({
  period,
  setPeriod,
  separatorRef,
}) => {
  const errorMessageRef = useRef<HTMLDivElement>(null);
  const [isError, setIsError] = useState<boolean[]>([false, false]);

  useEffect(() => {
    if (errorMessageRef?.current && isError.every((error) => error === false)) {
      errorMessageRef.current.innerText = '';
    }
  }, [isError]);

  const enterCorrectPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    newState: string[]
  ) => {
    newState[index] = e.target.value;
    setIsError(isError.map((error, i) => (i === index ? false : error)));
    e.target.style.borderColor = '#ccc';
  };

  const enterWrongPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    message: string
  ) => {
    e.target.style.borderColor = 'red';
    setIsError(isError.map((error, i) => (i === index ? true : error)));
    if (errorMessageRef?.current) {
      errorMessageRef.current.innerText = message;
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    setPeriod((prev) => {
      const newState = [...prev];

      if (/^[0-9]*$/.test(e.target.value)) {
        enterCorrectPeriod(e, index, newState);
      } else {
        enterWrongPeriod(e, index, '숫자만 입력 가능합니다.');
        return prev;
      }

      if (index === 0) {
        if (
          e.target.value.length === 2 &&
          Number(e.target.value) <= 12 &&
          Number(e.target.value) > 0
        ) {
          enterCorrectPeriod(e, index, newState);
        } else {
          enterWrongPeriod(
            e,
            index,
            '올바른 유효기간을 입력하세요. (MM: 01~12)'
          );
        }
      } else {
        if (e.target.value.length === 2) {
          enterCorrectPeriod(e, index, newState);
        } else {
          enterWrongPeriod(
            e,
            index,
            '올바른 유효기간을 입력하세요. (YY: 00~99)'
          );
        }
      }

      return newState;
    });
  };

  return (
    <ExpirationPeriodContainer>
      <InputLabels
        title="카드 유효기간을 입력해 주세요"
        caption="월/년도(MMYY)를 순서대로 입력해 주세요."
      />
      <InputTexts
        label="유효기간"
        placeholder={['MM', 'YY']}
        state={period}
        eventHandler={handleInputChange}
        onFocus={() => {
          if (separatorRef?.current) {
            separatorRef.current.textContent = '/';
          }
        }}
        onBlur={() => {
          if (separatorRef?.current && period[0] === '' && period[1] === '') {
            separatorRef.current.textContent = '';
          }
        }}
      />
      <ErrorMessage ref={errorMessageRef}></ErrorMessage>
    </ExpirationPeriodContainer>
  );
};
export default ExpirationPeriod;

const ExpirationPeriodContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  width: 100%;
`;

const ErrorMessage = styled.div`
  font-weight: 400;
  font-size: 9.5px;
  line-height: 100%;
  letter-spacing: 0%;
  vertical-align: middle;
  color: red;
  height: 9.5px;
`;
