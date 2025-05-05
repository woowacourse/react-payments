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

  return (
    <AddCardLayout>
      <AddCardContainer>
        <CardPreview
          cardNumberInputValue={cardNumber}
          expirationDateInputValue={expirationDate}
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
              inputValue={password}
              setInputValue={setPassword}
              onComplete={(state) =>
                markFieldComplete({ ...state, targetStep: 5 })
              }
            />
          </InputSection>
        )}
        {step >= 4 && (
          <InputSection title="CVC 번호를 입력해 주세요">
            <CVCInputField
              isFocused={step === 4}
              inputValue={CVC}
              setInputValue={setCVC}
              onComplete={(state) =>
                markFieldComplete({ ...state, targetStep: 4 })
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
              inputValue={expirationDate}
              setInputValue={setExpirationDate}
              onComplete={(state) =>
                markFieldComplete({ ...state, targetStep: 3 })
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
              inputValue={cardNumber}
              setInputValue={setCardNumber}
              cardType={cardType}
              onComplete={(state) =>
                markFieldComplete({ ...state, targetStep: 1 })
              }
            />
          </InputSection>
        )}
      </AddCardContainer>

      {step >= 6 && isFormComplete && (
        <ButtonContainer>
          <Button
            isFocused={step === 6}
            buttonText="확인"
            buttonType="default"
            onClick={() =>
              navigate(`/cards/complete`, {
                state: {
                  cardNumber: cardNumber.cardNumberPart1,
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
