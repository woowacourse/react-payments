import styled from 'styled-components';
import CardPreview from './CardPreview';

import CardNumberInputField from './InputField/CardNumberInputField';
import InputSection from './InputSection';
import ExpirationDateInputField from './InputField/ExpirationDateInputField';
import CVCInputField from './InputField/CVCInputField';
import { useState } from 'react';

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

function App() {
  const [cardNumberInputValue, setCardNumberInputValue] = useState({
    cardNumberPart1: '',
    cardNumberPart2: '',
    cardNumberPart3: '',
    cardNumberPart4: '',
  });

  const [expirationDateInputValue, setExpirationDateInputValue] = useState({
    expirationDatePart1: '',
    expirationDatePart2: '',
  });

  const [CVCInputValue, setCVCInputValue] = useState({
    CVCPart1: '',
  });

  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview
          cardNumberInputValue={cardNumberInputValue}
          expirationDateInputValue={expirationDateInputValue}
        />
        <InputSection
          title="결제할 카드 번호를 입력해 주세요"
          caption="본인 명의의 카드만 결제 가능합니다."
        >
          <CardNumberInputField
            inputValue={cardNumberInputValue}
            setInputValue={setCardNumberInputValue}
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

export default App;
