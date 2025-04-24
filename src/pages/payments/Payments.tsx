import { useState } from 'react';

import styled from 'styled-components';
import {
  CardIssuerSelectorType,
  CardNumberInputType,
  CVCInputValueType,
  ExpirationDateInputType,
  PasswordInputType,
} from '../../config/inputField';
import { CardType } from '../../config/card';

import InputSection from '../../components/feature/InputSection/InputSection';
import CardNumberInputField from '../../components/feature/InputField/CardNumberInputField/CardNumberInputField';
import ExpirationDateInputField from '../../components/feature/InputField/ExpirationDateInputField/ExpirationDateInputField';
import CVCInputField from '../../components/feature/InputField/CVCInputField/CVCInputField';
import CardIssuerSelector from '../../components/feature/InputField/CardIssuerSelector/CardIssuerSelector';
import PasswordInputField from '../../components/feature/InputField/PasswordInputField/PasswordInputField';
import CardPreview from '../../components/feature/CardPreviw/CardPreview';
import Button from '../../components/ui/Button/Button';

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

  const [passwordInputValue, setPasswordInputValue] = useState<
    Record<PasswordInputType, string>
  >({
    passwordPart1: '',
  });

  const [cardType, setCardType] = useState<CardType>(null);
  const [step, setStep] = useState(1);
  const [cardIssuer, setCardIssuer] = useState<CardIssuerSelectorType | null>(
    null
  );
  const [isFieldComplete, setIsFieldComplete] = useState({
    cardNumber: false,
    expirationDate: false,
    CVC: false,
    password: false,
  });

  type FieldName = 'cardNumber' | 'expirationDate' | 'CVC' | 'password';

  const isAllFieldComplete = !Boolean(
    Object.values(isFieldComplete).filter((isComplete) => isComplete === false)
      .length
  );

  const updateCompleteStatus = (fieldName: FieldName, status: boolean) => {
    if (isFieldComplete[fieldName] === status) return;
    setIsFieldComplete((prev) => ({
      ...prev,
      [fieldName]: status,
    }));
  };

  return (
    <PaymentsLayout>
      <PaymentsContainer>
        <CardPreview
          cardNumberInputValue={cardNumberInputValue}
          expirationDateInputValue={expirationDateInputValue}
          cardType={cardType}
          cardIssuer={cardIssuer}
        />
        {step >= 5 && (
          <InputSection
            title="비밀번호를 입력해 주세요"
            caption="앞의 2자리를 입력해주세요"
          >
            <PasswordInputField
              inputValue={passwordInputValue}
              setInputValue={setPasswordInputValue}
              onComplete={(isComplete: boolean) => {
                updateCompleteStatus('password', isComplete);
                if (step === 5 && isComplete) setStep(6);
              }}
            />
          </InputSection>
        )}
        {step >= 4 && (
          <InputSection title="CVC 번호를 입력해 주세요">
            <CVCInputField
              inputValue={CVCInputValue}
              setInputValue={setCVCInputValue}
              onComplete={(isComplete: boolean) => {
                updateCompleteStatus('CVC', isComplete);
                if (step === 4 && isComplete) setStep(5);
              }}
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
              onComplete={(isComplete: boolean) => {
                updateCompleteStatus('expirationDate', isComplete);
                if (step === 3 && isComplete) setStep(4);
              }}
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
              onComplete={(isComplete: boolean) => {
                updateCompleteStatus('cardNumber', isComplete);
                if (step === 1 && isComplete) setStep(2);
              }}
            />
          </InputSection>
        )}
      </PaymentsContainer>
      {step >= 6 && isAllFieldComplete && (
        <ButtonContainer>
          <Button buttonText="확인" buttonType="default" onClick={() => {}} />
        </ButtonContainer>
      )}
    </PaymentsLayout>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 376px;
`;

const PaymentsLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const PaymentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  align-items: center;
  width: 376px;
  height: 100%;
  min-height: 100%;
  background-color: white;
  border: 1px solid lightgray;
  overflow: auto;
`;

export default Payments;
