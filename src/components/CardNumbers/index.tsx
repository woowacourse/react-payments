import { useRef } from 'react';
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

  return (
    <CardNumbersContainer>
      <InputLabels
        title="결제할 카드 번호를 입력해 주세요"
        caption="본인 명의의 카드만 결제 가능합니다."
      />
      <InputTexts
        label="카드 번호"
        placeholder={['1234', '1234', '1234', '1234']}
        setCardNumbers={setCardNumbers}
        cardNumbers={cardNumbers}
        errorMessageRef={errorMessageRef}
      />
      <ErrorMessage ref={errorMessageRef}> </ErrorMessage>
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
