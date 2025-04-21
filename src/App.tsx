import styled from 'styled-components';
import CardPreview from './CardPreviw/CardPreview';

import CardNumberInputField from './InputField/CardNumberInputField';
import InputSection from './InputSection';
import ExpirationDateInputField from './InputField/ExpirationDateInputField';
import CVCInputField from './InputField/CVCInputField';
import { useState } from 'react';
import { CARD_TYPE, CardType } from './config/card';
import {
  CardNumberInputType,
  CVCInputValueType,
  ExpirationDateInputType,
} from './config/inputField';

function App() {
  const [cardNumberInputValue, setCardNumberInputValue] = useState<
    Record<CardNumberInputType, string>
  >({
    cardNumberPart1: '',
    cardNumberPart2: '',
    cardNumberPart3: '',
    cardNumberPart4: '',
  });

  const [expirationDateInputValue, setExpirationDateInputValue] = useState<
    Record<ExpirationDateInputType, string>
  >({
    expirationDatePart1: '',
    expirationDatePart2: '',
  });

  const [CVCInputValue, setCVCInputValue] = useState<
    Record<CVCInputValueType, string>
  >({
    CVCPart1: '',
  });

  const [cardType, setCardType] = useState<CardType>(CARD_TYPE.none);

  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview
          cardNumberInputValue={cardNumberInputValue}
          expirationDateInputValue={expirationDateInputValue}
          cardType={cardType}
        />
        <InputSection
          title="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
        >
          <CardNumberInputField
            inputValue={cardNumberInputValue}
            setInputValue={setCardNumberInputValue}
            cardType={cardType}
            setCardType={setCardType}
          />
        </InputSection>
        <InputSection
          title="카드 유효기간을 입력해 주세요"
          caption="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpirationDateInputField
            inputValue={expirationDateInputValue}
            setInputValue={setExpirationDateInputValue}
          />
        </InputSection>
        <InputSection title="CVC 번호를 입력해 주세요">
          <CVCInputField
            inputValue={CVCInputValue}
            setInputValue={setCVCInputValue}
          />
        </InputSection>
      </PaymentsContainer>
    </PaymentsLayout>
  );
}

const PaymentsLayout = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PaymentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  align-items: center;
  width: 376px;
  min-height: 100%;
  background-color: white;
  border: 1px solid lightgray;
`;

export default App;
