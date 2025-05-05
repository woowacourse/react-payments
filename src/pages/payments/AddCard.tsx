import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';
import CardPreview from '../../components/feature/CardPreviw/CardPreview';
import CVCInputField from '../../components/feature/InputField/CVCInputField/CVCInputField';
import CardIssuerSelector from '../../components/feature/InputField/CardIssuerSelector/CardIssuerSelector';
import CardNumberInputField from '../../components/feature/InputField/CardNumberInputField/CardNumberInputField';
import ExpirationDateInputField from '../../components/feature/InputField/ExpirationDateInputField/ExpirationDateInputField';
import PasswordInputField from '../../components/feature/InputField/PasswordInputField/PasswordInputField';
import Button from '../../components/ui/Button/Button';
import InputSection from '../../components/ui/InputSection/InputSection';
import { useCardCompletion } from '../../hooks/useCardCompletion';
import { useState } from 'react';
import { useCardFormInputs } from '../../hooks/useCardFormInputs';
import { ROUTES } from '../../constants/routes';

function AddCard() {
  const navigate = useNavigate();

  const {
    cardNumber,
    setCardNumber,
    expirationDate,
    setExpirationDate,
    CVC,
    setCVC,
    password,
    setPassword,
    cardIssuer,
    setCardIssuer,
    cardType,
  } = useCardFormInputs();

  const [step, setStep] = useState(1);

  const { markFieldComplete, isFormComplete } = useCardCompletion({
    step,
    setStep,
  });

  const FORM_STEP = {
    CARD_NUMBER: 1,
    CARD_ISSUER: 2,
    EXPIRATION_DATE: 3,
    CVC: 4,
    PASSWORD: 5,
    COMPLETE_BUTTON: 6,
  };

  return (
    <AddCardLayout>
      <AddCardContainer>
        <CardPreview
          cardNumberInputValue={cardNumber}
          expirationDateInputValue={expirationDate}
          cardType={cardType}
          cardIssuer={cardIssuer}
        />
        {step >= FORM_STEP.PASSWORD && (
          <InputSection
            title="비밀번호를 입력해 주세요"
            caption="앞의 2자리를 입력해주세요"
          >
            <PasswordInputField
              isFocused={step === FORM_STEP.PASSWORD}
              inputValue={password}
              setInputValue={setPassword}
              onComplete={(state) =>
                markFieldComplete({ ...state, targetStep: FORM_STEP.PASSWORD })
              }
            />
          </InputSection>
        )}
        {step >= FORM_STEP.CVC && (
          <InputSection title="CVC 번호를 입력해 주세요">
            <CVCInputField
              isFocused={step === FORM_STEP.CVC}
              inputValue={CVC}
              setInputValue={setCVC}
              onComplete={(state) =>
                markFieldComplete({ ...state, targetStep: FORM_STEP.CVC })
              }
            />
          </InputSection>
        )}
        {step >= FORM_STEP.EXPIRATION_DATE && (
          <InputSection
            title="카드 유효기간을 입력해 주세요"
            caption="월/년도(MMYY)를 순서대로 입력해 주세요."
          >
            <ExpirationDateInputField
              isFocused={step === FORM_STEP.EXPIRATION_DATE}
              inputValue={expirationDate}
              setInputValue={setExpirationDate}
              onComplete={(state) =>
                markFieldComplete({
                  ...state,
                  targetStep: FORM_STEP.EXPIRATION_DATE,
                })
              }
            />
          </InputSection>
        )}
        {step >= FORM_STEP.CARD_ISSUER && (
          <InputSection
            title="카드사를 선택해 주세요"
            caption="현재 국내 카드사만 가능합니다."
          >
            <CardIssuerSelector
              isFocused={step === FORM_STEP.CARD_ISSUER}
              setCardIssuer={setCardIssuer}
              onComplete={() => {
                if (step === FORM_STEP.CARD_ISSUER)
                  setStep(FORM_STEP.EXPIRATION_DATE);
              }}
            />
          </InputSection>
        )}
        {step >= FORM_STEP.CARD_NUMBER && (
          <InputSection
            title="결제할 카드 번호를 입력해 주세요"
            caption="본인 명의의 카드만 결제 가능합니다."
          >
            <CardNumberInputField
              isFocused={step === FORM_STEP.CARD_NUMBER}
              inputValue={cardNumber}
              setInputValue={setCardNumber}
              cardType={cardType}
              onComplete={(state) =>
                markFieldComplete({
                  ...state,
                  targetStep: FORM_STEP.CARD_NUMBER,
                })
              }
            />
          </InputSection>
        )}

        {step >= FORM_STEP.COMPLETE_BUTTON && isFormComplete && (
          <ButtonContainer>
            <Button
              isFocused={step === FORM_STEP.COMPLETE_BUTTON}
              buttonText="확인"
              buttonType="default"
              onClick={(e) => {
                e.preventDefault();
                navigate(ROUTES.CARD_COMPLETE, {
                  state: {
                    cardNumber: cardNumber.cardNumberPart1,
                    cardIssuer,
                  },
                });
              }}
              type="submit"
            />
          </ButtonContainer>
        )}
      </AddCardContainer>
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

const AddCardContainer = styled.form`
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
