import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import CvcField from "./CvcField/CvCField";
import ExpiryField from "./ExpiryField/ExpiryField";
import CardRegisterStep from "./CardRegisterStep/CardRegisterStep";
import NumberField from "./NumberField/NumberField";
import CardCompanySelectField from "./CardCompanySelectField/CardCompanySelectField";
import PasswordField from "./PasswordField/PasswordField";
import Button from "../../../../common/components/Button/Button";

import type {
  CardInfoType,
  CardNumberChunkType,
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

const CardRegisterForm = ({
  cardInfo,
  onCardNumbersChange,
  onExpiryMonthChange,
  onExpiryYearChange,
  onCardCompanySelect,
}: {
  cardInfo: CardInfoType;
  onCardNumbersChange: (cardNumbers: CardNumberChunkType) => void;
  onExpiryMonthChange: (expiryMonth: string) => void;
  onExpiryYearChange: (expiryYear: string) => void;
  onCardCompanySelect: (cardCompany: CardCompanyType) => void;
}) => {
  const navigate = useNavigate();
  const [cardInputSectionInformation, setCardInputSectionInformation] =
    useState({
      cvcNumber: "",
      password: "",
    });

  // 한 번 렌더링 된 필드는 이전 단계에서 에러가 나도 사라지지 않게 하므로 state로!
  const [unlockedStep, setUnlockedStep] = useState(1);
  const confirmButtonRef = useRef<HTMLButtonElement | null>(null);

  const { cardNumbers, expiryMonth, expiryYear, selectedCardCompany } =
    cardInfo;

  const cardBrand = getCardBrandName(cardNumbers);

  const showAtLeastStep = (step: number) => {
    setUnlockedStep((previousStep) => Math.max(previousStep, step));
  };

  const handleCardNumbersChange = (
    nextCardNumbers: CardInfoType["cardNumbers"],
  ) => {
    onCardNumbersChange(nextCardNumbers);
    const nextCardBrand = getCardBrandName(nextCardNumbers);

    if (isCardNumberFieldValid(nextCardNumbers.join(""), nextCardBrand)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.CARD_COMPANY);
    }
  };

  const handleCardCompanyChange = (cardCompany: CardCompanyType) => {
    onCardCompanySelect(cardCompany);
    showAtLeastStep(CARD_FORM.RENDER_STEP.EXPIRY);
  };

  const handleExpiryMonthChange = (nextExpiryMonth: string) => {
    onExpiryMonthChange(nextExpiryMonth);
    if (isExpiryFieldValid(nextExpiryMonth, expiryYear)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.CVC);
    }
  };

  const handleExpiryYearChange = (nextExpiryYear: string) => {
    onExpiryYearChange(nextExpiryYear);
    if (isExpiryFieldValid(expiryMonth, nextExpiryYear)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.CVC);
    }
  };

  const handleCvcNumberChange = (nextCvcNumber: string) => {
    setCardInputSectionInformation((previousInformation) => ({
      ...previousInformation,
      cvcNumber: nextCvcNumber,
    }));
    if (isCvcFieldValid(nextCvcNumber)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.PASSWORD);
    }
  };

  const handlePasswordChange = (nextPassword: string) => {
    setCardInputSectionInformation((previousInformation) => ({
      ...previousInformation,
      password: nextPassword,
    }));
    if (isPasswordFieldValid(nextPassword)) {
      showAtLeastStep(CARD_FORM.RENDER_STEP.COMPLETE);
    }
  };

  const joinedCardNumber = cardNumbers.join("");
  const fieldValidity = {
    cardNumber: isCardNumberFieldValid(joinedCardNumber, cardBrand),
    cardCompany: isCardCompanyFieldValid(selectedCardCompany),
    expiry: isExpiryFieldValid(expiryMonth, expiryYear),
    cvc: isCvcFieldValid(cardInputSectionInformation.cvcNumber),
    password: isPasswordFieldValid(cardInputSectionInformation.password),
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
      return;
    }

    navigate("/register/complete", {
      state: {
        firstCardNumberChunk: cardNumbers[0],
        cardCompany: selectedCardCompany,
      },
    });
  };

  return (
    <Form onSubmit={handleCardInfoSubmit}>
      {unlockedStep >= CARD_FORM.RENDER_STEP.PASSWORD && (
        <CardRegisterStep
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요"
        >
          <PasswordField
            password={cardInputSectionInformation.password}
            onPasswordChange={handlePasswordChange}
          />
        </CardRegisterStep>
      )}

      {unlockedStep >= CARD_FORM.RENDER_STEP.CVC && (
        <CardRegisterStep title="CVC 번호를 입력해 주세요">
          <CvcField
            cvcNumber={cardInputSectionInformation.cvcNumber}
            onCvcNumberChange={handleCvcNumberChange}
          />
        </CardRegisterStep>
      )}

      {unlockedStep >= CARD_FORM.RENDER_STEP.EXPIRY && (
        <CardRegisterStep
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpiryField
            expiryMonth={expiryMonth}
            expiryYear={expiryYear}
            onExpiryMonthChange={handleExpiryMonthChange}
            onExpiryYearChange={handleExpiryYearChange}
          />
        </CardRegisterStep>
      )}

      {unlockedStep >= CARD_FORM.RENDER_STEP.CARD_COMPANY && (
        <CardRegisterStep
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
        >
          <CardCompanySelectField
            selectedCardCompany={selectedCardCompany}
            onSelect={handleCardCompanyChange}
          />
        </CardRegisterStep>
      )}

      {unlockedStep >= CARD_FORM.RENDER_STEP.CARD_NUMBER && (
        <CardRegisterStep
          title="결제할 카드 번호를 입력해 주세요"
          description="본인 명의의 카드만 결제 가능합니다."
        >
          <NumberField
            cardNumbers={cardNumbers}
            onCardNumbersChange={handleCardNumbersChange}
            lastInputMaxLength={getBrandLastCardNumberLength(cardBrand)}
          />
        </CardRegisterStep>
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

export default CardRegisterForm;
