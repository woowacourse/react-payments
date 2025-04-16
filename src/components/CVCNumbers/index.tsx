import { useEffect, useRef, useState } from 'react';
import InputLabels from '../common/InputLabels';
import InputTexts from '../common/InputTexts';
import styled from '@emotion/styled';

interface CVCNumbersProps {
  cvcNumbers: string[];
  setCvcNumbers: React.Dispatch<React.SetStateAction<string[]>>;
}

const CVCNumbers: React.FC<CVCNumbersProps> = ({
  cvcNumbers,
  setCvcNumbers,
}) => {
  const errorMessageRef = useRef<HTMLDivElement>(null);
  const [isError, setIsError] = useState<boolean>(false);

  useEffect(() => {
    if (errorMessageRef?.current && !isError) {
      errorMessageRef.current.innerText = '';
    }
  }, [isError]);

  const enterCorrectCVC = (
    e: React.ChangeEvent<HTMLInputElement>,
    newState: string[]
  ) => {
    newState[0] = e.target.value;
    setIsError(false);
    e.target.style.borderColor = '#ccc';
  };

  const enterWrongCVC = (
    e: React.ChangeEvent<HTMLInputElement>,
    message: string
  ) => {
    e.target.style.borderColor = 'red';
    setIsError(true);
    if (errorMessageRef?.current) {
      errorMessageRef.current.innerText = message;
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCvcNumbers((prev) => {
      const newState = [...prev];
      if (/^[0-9]*$/.test(e.target.value) && e.target.value.length <= 3) {
        enterCorrectCVC(e, newState);
      } else {
        enterWrongCVC(e, '숫자만 가능합니다.');
      }
      return newState;
    });
  };

  return (
    <CVCNumbersContainer
    data-testid="cvcnumbers-component">
      <InputLabels title="CVC 번호를 입력해 주세요" />
      <InputTexts
        label="CVC"
        placeholder={['123']}
        state={cvcNumbers}
        eventHandler={handleInputChange}
      />
      <ErrorMessage ref={errorMessageRef}></ErrorMessage>
    </CVCNumbersContainer>
  );
};
export default CVCNumbers;

const CVCNumbersContainer = styled.div`
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
