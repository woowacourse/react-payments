import styled from '@emotion/styled';
import CVCInput from '../CVCInput/CVCInput';
import CardNumberInput from '../CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../ExpirationDateInput/ExpirationDateInput';
import PreviewCard from '../PreviewCard/PreviewCard';
import Text from '../Text/Text';
import { useState } from 'react';

export type HandleInputParams = {
  e: React.ChangeEvent<HTMLInputElement>;
  idx: number;
};

const StyledCardPage = styled.div`
  width: 40%;
  min-width: 400px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
`;

const CardPage = () => {
  const [cardNumber, setCardNumber] = useState(['', '', '', '']);
  const [expirationDate, setExpirationDate] = useState(['', '']);
  const [cvc, setCvc] = useState(['']);

  const handleCardNumberInput = ({ e, idx }: HandleInputParams) => {
    setCardNumber((prev) => {
      const updated = [...prev];
      updated[idx] = e.target.value;
      return updated;
    });
  };
  const handleExpirationDateInput = ({ e, idx }: HandleInputParams) => {
    setExpirationDate((prev) => {
      const updated = [...prev];
      updated[idx] = e.target.value;
      return updated;
    });
  };

  const handleCVCInput = ({ e, idx }: HandleInputParams) => {
    setCvc((prev) => {
      const updated = [...prev];
      updated[idx] = e.target.value;
      return updated;
    });
  };

  return (
    <StyledCardPage>
      <PreviewCard cardNumber={cardNumber} expirationDate={expirationDate} />
      <Text type="title" text="결제할 카드 번호를 입력해 주세요" />
      <Text type="subTitle" text="본인 명의의 카드만 결제 가능합니다." />

      <CardNumberInput values={cardNumber} onChange={handleCardNumberInput} />

      <Text type="title" text="카드 유효기간을 입력해 주세요" />
      <Text type="subTitle" text="월/년도(MMYY)를 순서대로 입력해 주세요." />

      <ExpirationDateInput values={expirationDate} onChange={handleExpirationDateInput} />

      <Text type="title" text="CVC 번호를 입력해 주세요" />

      <CVCInput values={cvc} onChange={handleCVCInput} />
    </StyledCardPage>
  );
};

export default CardPage;
