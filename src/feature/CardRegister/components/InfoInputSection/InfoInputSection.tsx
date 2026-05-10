import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CvcField from "./CvcField/CvCField";
import ExpiryField from "./ExpiryField/ExpiryField";
import InputContainer from "./InputContainer/InputContainer";
import NumberField from "./NumberField/NumberField";
import CardCompanySelectField from "./CardCompanySelectField/CardCompanySelectField";
import PasswordField from "./PasswordField/PasswordField";
import Button from "../../../../common/components/Button/Button";

import type {
  CardInfoHandlersType,
  CardInfoType,
} from "../../../../common/types/CardInfoType";
import type { CardCompanyType } from "../../../../common/types/CardCompany";
import {
  getBrandLastCardNumberLength,
  getCardBrandName,
} from "../../utils/cardBrand";
import {
  isCardCompanyFieldValid,
  isCardNumberFieldValid,
  isCvcFieldValid,
  isExpiryFieldValid,
  isPasswordFieldValid,
} from "../../validators/cardForm";
import { CARD_FORM } from "../../constants";

const InfoInputSection = ({
  cardInfo,
  cardInfoHandlers,
  handleCardCompanyClick,
}: {
  cardInfo: CardInfoType;
  cardInfoHandlers: CardInfoHandlersType;
  handleCardCompanyClick: (cardCompany: CardCompanyType) => void;
}) => {
  const navigate = useNavigate();
  const [cvcNumber, setCvcNumber] = useState("");
  const [password, setPassword] = useState("");

  // 한 번 렌더링 된 필드는 이전 단계에서 에러가 나도 사라지지 않게 하므로 state로!
  const [unlockedStep, setUnlockedStep] = useState(1);
  const confirmButtonRef = useRef<HTMLButtonElement | null>(null);

  const { cardNumbers, expiryMonth, expiryYear, selectedCardCompany } =
    cardInfo;
  const { setCardNumbers, setExpiryMonth, setExpiryYear } = cardInfoHandlers;

  const cardBrand = getCardBrandName(cardNumbers);

  const showAtLeastStep = (step: number) => {
    setUnlockedStep((previousStep) => Math.max(previousStep, step));
  };

  const handleCardNumbersChange = (
    nextCardNumbers: CardInfoType["cardNumbers"],
  ) => {
    setCardNumbers(nextCardNumbers);
    const nextCardBrand = getCardBrandName(nextCardNumbers);

    if (isCardNumberFieldValid(nextCardNumbers.join(""), nextCardBrand)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.CARD_COMPANY);
    }
  };

  const handleCardCompanySelect = (cardCompany: CardCompanyType) => {
    handleCardCompanyClick(cardCompany);
    showAtLeastStep(CARD_FORM.RENDER_STEP.EXPIRY);
  };

  const handleExpiryMonthChange = (nextExpiryMonth: string) => {
    setExpiryMonth(nextExpiryMonth);
    if (isExpiryFieldValid(nextExpiryMonth, expiryYear)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.CVC);
    }
  };

  const handleExpiryYearChange = (nextExpiryYear: string) => {
    setExpiryYear(nextExpiryYear);
    if (isExpiryFieldValid(expiryMonth, nextExpiryYear)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.CVC);
    }
  };

  const handleCvcNumberChange = (nextCvcNumber: string) => {
    setCvcNumber(nextCvcNumber);
    if (isCvcFieldValid(nextCvcNumber)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.PASSWORD);
    }
  };

  const handlePasswordChange = (nextPassword: string) => {
    setPassword(nextPassword);
    if (isPasswordFieldValid(nextPassword)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.COMPLETE);
    }
  };

  const joinedCardNumber = cardNumbers.join("");
  const fieldValidity = {
    cardNumber: isCardNumberFieldValid(joinedCardNumber, cardBrand),
    cardCompany: isCardCompanyFieldValid(selectedCardCompany),
    expiry: isExpiryFieldValid(expiryMonth, expiryYear),
    cvc: isCvcFieldValid(cvcNumber),
    password: isPasswordFieldValid(password),
  };
  const isFormInputComplete = Object.values(fieldValidity).every(Boolean);

  useEffect(() => {
    if (!isFormInputComplete) {
      return;
    }
    confirmButtonRef.current?.focus();
  }, [isFormInputComplete]);

  const handleCardInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormInputComplete) {
    }
    navigate("/register-complete", {
      state: {
        firstCardNumberChunk: cardNumbers[0],
        cardCompany: selectedCardCompany,
      },
    });
  };

  return (
    <Form onSubmit={handleCardInfoSubmit}>
      {unlockedStep >= CARD_FORM.RENDER_STEP.PASSWORD && (
        <InputContainer
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요"
        >
          <PasswordField
            password={password}
            onPasswordChange={handlePasswordChange}
          />
        </InputContainer>
      )}

      {unlockedStep >= CARD_FORM.RENDER_STEP.CVC && (
        <InputContainer title="CVC 번호를 입력해 주세요">
          <CvcField
            cvcNumber={cvcNumber}
            onCvcNumberChange={handleCvcNumberChange}
          />
        </InputContainer>
      )}

      {unlockedStep >= CARD_FORM.RENDER_STEP.EXPIRY && (
        <InputContainer
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpiryField
            expiryMonth={expiryMonth}
            expiryYear={expiryYear}
            onExpiryMonthChange={handleExpiryMonthChange}
            onExpiryYearChange={handleExpiryYearChange}
          />
        </InputContainer>
      )}

      {unlockedStep >= CARD_FORM.RENDER_STEP.CARD_COMPANY && (
        <InputContainer
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
        >
          <CardCompanySelectField onSelect={handleCardCompanySelect} />
        </InputContainer>
      )}

      {unlockedStep >= CARD_FORM.RENDER_STEP.CARD_NUMBER && (
        <InputContainer
          title="결제할 카드 번호를 입력해 주세요"
          description="본인 명의의 카드만 결제 가능합니다."
        >
          <NumberField
            cardNumbers={cardNumbers}
            onCardNumbersChange={handleCardNumbersChange}
            lastInputMaxLength={getBrandLastCardNumberLength(cardBrand)}
          />
        </InputContainer>
      )}

      {isFormInputComplete && (
        <ConfirmButton ref={confirmButtonRef} size="full" type="submit">
          확인
        </ConfirmButton>
      )}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 30px;

  width: 100%;
`;

const ConfirmButton = styled(Button)`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;

  width: 100%;
`;

export default InfoInputSection;
