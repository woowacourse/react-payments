import { useState } from 'react';

import styled from 'styled-components';
import {
  CardIssuerSelectorType,
  CardNumberInputType,
  CVCInputValueType,
  ExpirationDateInputType,
  FieldName,
  PasswordInputType,
} from '../../config/inputField';

import { useNavigate } from 'react-router-dom';
import CardPreview from '../../components/feature/CardPreviw/CardPreview';
import CVCInputField from '../../components/feature/InputField/CVCInputField/CVCInputField';
import CardIssuerSelector from '../../components/feature/InputField/CardIssuerSelector/CardIssuerSelector';
import CardNumberInputField from '../../components/feature/InputField/CardNumberInputField/CardNumberInputField';
import ExpirationDateInputField from '../../components/feature/InputField/ExpirationDateInputField/ExpirationDateInputField';
import PasswordInputField from '../../components/feature/InputField/PasswordInputField/PasswordInputField';
import Button from '../../components/ui/Button/Button';
import InputSection from '../../components/ui/InputSection/InputSection';

function AddCard() {
  const navigate = useNavigate();

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

  const [cardIssuer, setCardIssuer] = useState<CardIssuerSelectorType | null>(
    null
  );

  const [step, setStep] = useState(1);

  const [isFieldComplete, setIsFieldComplete] = useState({
    cardNumber: false,
    expirationDate: false,
    CVC: false,
    password: false,
  });

  const updateCompleteStatus = ({
    isComplete,
    fieldName,
    targetStep,
  }: {
    isComplete: boolean;
    fieldName: FieldName;
    targetStep: number;
  }) => {
    if (isFieldComplete[fieldName] === isComplete) return;
    if (step === targetStep && isComplete) setStep(targetStep + 1);

    setIsFieldComplete((prev) => ({
      ...prev,
      [fieldName]: isComplete,
    }));
  };

  const checkCardType = (value: string) => {
    if (value[0] === '4') return 'visa';
    else if (Number(value) >= 51 && Number(value) <= 55) return 'master';
    return null;
  };
  const cardType = checkCardType(cardNumberInputValue.cardNumberPart1);

  const isAllFieldComplete = !Boolean(
    Object.values(isFieldComplete).filter((isComplete) => isComplete === false)
      .length
  );

  return (
    <AddCardLayout>
      <AddCardContainer>
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
              isFocused={step === 5}
              inputValue={passwordInputValue}
              setInputValue={setPasswordInputValue}
              onComplete={(state) =>
                updateCompleteStatus({ ...state, targetStep: 5 })
              }
            />
          </InputSection>
        )}
        {step >= 4 && (
          <InputSection title="CVC 번호를 입력해 주세요">
            <CVCInputField
              isFocused={step === 4}
              inputValue={CVCInputValue}
              setInputValue={setCVCInputValue}
              onComplete={(state) =>
                updateCompleteStatus({ ...state, targetStep: 4 })
              }
            />
          </InputSection>
        )}
        {step >= 3 && (
          <InputSection
            title="카드 유효기간을 입력해 주세요"
            caption="월/년도(MMYY)를 순서대로 입력해 주세요."
          >
            <ExpirationDateInputField
              isFocused={step === 3}
              inputValue={expirationDateInputValue}
              setInputValue={setExpirationDateInputValue}
              onComplete={(state) =>
                updateCompleteStatus({ ...state, targetStep: 3 })
              }
            />
          </InputSection>
        )}
        {step >= 2 && (
          <InputSection
            title="카드사를 선택해 주세요"
            caption="현재 국내 카드사만 가능합니다."
          >
            <CardIssuerSelector
              isFocused={step === 2}
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
              isFocused={step === 1}
              inputValue={cardNumberInputValue}
              setInputValue={setCardNumberInputValue}
              cardType={cardType}
              onComplete={(state) =>
                updateCompleteStatus({ ...state, targetStep: 1 })
              }
            />
          </InputSection>
        )}
      </AddCardContainer>

      {step >= 6 && isAllFieldComplete && (
        <ButtonContainer>
          <Button
            isFocused={step === 6}
            buttonText="확인"
            buttonType="default"
            onClick={() =>
              navigate(`/cards/complete`, {
                state: {
                  cardNumber: cardNumberInputValue.cardNumberPart1,
                  cardIssuer,
                },
              })
            }
          />
        </ButtonContainer>
      )}
    </AddCardLayout>
  );
}

const ButtonContainer = styled.div`
  display: flex;
  position: absolute;
  bottom: 0px;
  width: 376px;
`;

const AddCardLayout = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const AddCardContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  box-sizing: border-box;
  padding: 44px 28px;
  align-items: center;
  height: 100vh;
  width: 376px;
  min-height: 100%;
  background-color: white;
  border: 1px solid lightgray;
  overflow: auto;
`;

export default AddCard;
