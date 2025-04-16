import { useRef, useState, useEffect } from 'react';
import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';
import styled from '@emotion/styled';

interface CardNumbersProps {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
}

const CardNumbers: React.FC<CardNumbersProps> = ({
  cardNumbers,
  setCardNumbers,
}) => {
  const errorMessageRef = useRef<HTMLDivElement>(null);
  const [isError, setIsError] = useState<boolean[]>([
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    if (errorMessageRef?.current && isError.every((error) => error === false)) {
      errorMessageRef.current.innerText = '';
    }
  }, [isError]);

  const enterCorrectCardNumbers = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number,
    newState: string[]
  ) => {
    newState[index] = e.target.value;
    setIsError(isError.map((error, i) => (i === index ? false : error)));
    e.target.style.borderColor = '#ccc';
  };

  const enterWrongCardNumbers = (
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
    setCardNumbers((prev) => {
      const newState = [...prev];
      if (/^[0-9]*$/.test(e.target.value) && e.target.value.length <= 4) {
        enterCorrectCardNumbers(e, index, newState);
      } else {
        enterWrongCardNumbers(e, index, '숫자만 가능합니다.');
      }
      return newState;
    });
  };

  return (
    <CardNumbersContainer data-testid="cardnumbers-component">
      <InputLabels
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      />
      <InputTexts
        label="카드 번호"
        placeholder={['1234', '1234', '1234', '1234']}
        eventHandler={handleInputChange}
        state={cardNumbers}
      />
      <ErrorMessage ref={errorMessageRef}></ErrorMessage>
    </CardNumbersContainer>
  );
};
export default CardNumbers;

const CardNumbersContainer = styled.div`
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
