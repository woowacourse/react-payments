import { useState } from 'react';

import styled from 'styled-components';
import {
  CardIssuerSelectorType,
  CardNumberInputType,
  CVCInputValueType,
  ExpirationDateInputType,
} from '../../config/inputField';
import { CardType } from '../../config/card';
import CardPreview from '../../components/CardPreviw/CardPreview';
import InputSection from '../../components/InputSection/InputSection';
import CardNumberInputField from '../../components/InputField/CardNumberInputField/CardNumberInputField';
import ExpirationDateInputField from '../../components/InputField/ExpirationDateInputField/ExpirationDateInputField';
import CVCInputField from '../../components/InputField/CVCInputField/CVCInputField';
import CardIssuerSelector from '../../components/InputField/CardIssuerSelector/CardIssuerSelector';

function Payments() {
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

  const [cardType, setCardType] = useState<CardType>(null);
  const [step, setStep] = useState(1);
  const [cardIssuer, setCardIssuer] = useState<CardIssuerSelectorType | null>(
    null
  );

  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview
          cardNumberInputValue={cardNumberInputValue}
          expirationDateInputValue={expirationDateInputValue}
          cardType={cardType}
          cardIssuer={cardIssuer}
        />
        {step >= 4 && (
          <InputSection title="CVC 번호를 입력해 주세요">
            <CVCInputField
              inputValue={CVCInputValue}
              setInputValue={setCVCInputValue}
            />
          </InputSection>
        )}
        {step >= 3 && (
          <InputSection
            title="카드 유효기간을 입력해 주세요"
            caption="월/년도(MMYY)를 순서대로 입력해 주세요."
          >
            <ExpirationDateInputField
              inputValue={expirationDateInputValue}
              setInputValue={setExpirationDateInputValue}
            />
          </InputSection>
        )}
        {step >= 2 && (
          <InputSection
            title="카드사를 선택해 주세요"
            caption="현재 국내 카드사만 가능합니다."
          >
            <CardIssuerSelector
              setCardIssuer={setCardIssuer}
              onComplete={() => {
                if (step === 2) setStep(3);
              }}
            />
          </InputSection>
        )}
        {step >= 1 && (
          <InputSection
            title="결제할 카드 번호를 입력해 주세요"
            caption="본인 명의의 카드만 결제 가능합니다."
          >
            <CardNumberInputField
              inputValue={cardNumberInputValue}
              setInputValue={setCardNumberInputValue}
              cardType={cardType}
              setCardType={setCardType}
              onComplete={() => {
                if (step === 1) setStep(2);
              }}
            />
          </InputSection>
        )}
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

export default Payments;
