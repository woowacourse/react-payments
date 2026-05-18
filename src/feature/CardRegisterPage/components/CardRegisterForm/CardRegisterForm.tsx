import { useState } from "react";
import styled from "styled-components";
import CvcField from "./CvcField/CvCField";
import ExpiryField from "./ExpiryField/ExpiryField";
import CardRegisterStep from "./CardRegisterStep/CardRegisterStep";
import NumberField from "./NumberField/NumberField";
import CardCompanySelectField from "./CardCompanySelectField/CardCompanySelectField";
import PasswordField from "./PasswordField/PasswordField";

import type {
  CardInfoType,
  CardNumberChunkType,
} from "../../../../shared/types/CardInfoType";
import {
  getCardNumberChunkLengths,
  getCardBrandName,
} from "../../utils/cardBrand";
import { CARD_FORM } from "../../constants";
import { validateCvc } from "../../validators/cvc";
import { validatePassword } from "../../validators/password";
import {
  validateExpiryMonth,
  validateExpiryYear,
} from "../../validators/expiryDate";
import { validateCardCompany } from "../../validators/cardCompany";
import { validateCardNumber } from "../../validators/cardNumber";
import BaseButton from "../../../../shared/components/Button/BaseButton";
import { type PostCardRequestBody } from "../../api/card";
import { useCardRegister } from "../../hooks/useCardRegister";
import { useCardRegisterFormError } from "../../hooks/useCardRegisterFormError";
import type { IssuerKoreanNameType } from "../../../../shared/types/Issuer";
import { getIssuerCodeByName } from "../../../../shared/utils/issuer";

const getInitialMaxUnlockedStep = (cardInfo: CardInfoType) => {
  const cardBrand = getCardBrandName(cardInfo.cardNumbers);

  if (!validateCardNumber(cardInfo.cardNumbers.join(""), cardBrand).isValid) {
    return CARD_FORM.RENDER_STEP.CARD_NUMBER;
  }

  if (!validateCardCompany(cardInfo.selectedCardCompany).isValid) {
    return CARD_FORM.RENDER_STEP.CARD_COMPANY;
  }

  if (
    !validateExpiryMonth(cardInfo.expiryMonth).isValid ||
    !validateExpiryYear(cardInfo.expiryYear).isValid
  ) {
    return CARD_FORM.RENDER_STEP.EXPIRY;
  }

  return CARD_FORM.RENDER_STEP.CVC;
};

const CardRegisterForm = ({
  cardInfo,
  updateCardNumbers,
  updateExpiryMonth,
  updateExpiryYear,
  updateCardCompany,
}: {
  cardInfo: CardInfoType;
  updateCardNumbers: (cardNumbers: CardNumberChunkType) => void;
  updateExpiryMonth: (expiryMonth: string) => void;
  updateExpiryYear: (expiryYear: string) => void;
  updateCardCompany: (cardCompany: IssuerKoreanNameType) => void;
}) => {
  const [cardInputSectionInformation, setCardInputSectionInformation] =
    useState({
      cvcNumber: "",
      password: "",
    });

  const { asyncState, cardRegisterError, registerCard } = useCardRegister();
  const {
    formErrorMessages,
    updateCardNumberErrorMessage,
    updateCvcErrorMessage,
    updateExpiryDateErrorMessage,
    clearCardNumberErrorMessage,
    clearCvcErrorMessage,
    clearExpiryDateErrorMessage,
  } = useCardRegisterFormError();

  // 한 번 렌더링 된 필드는 이전 단계에서 에러가 나도 사라지지 않게 하므로 state로!
  const [maxUnlockedStep, setMaxUnlockedStep] = useState(() =>
    getInitialMaxUnlockedStep(cardInfo),
  );

  const { cardNumbers, expiryMonth, expiryYear, selectedCardCompany } =
    cardInfo;

  const cardBrand = getCardBrandName(cardNumbers);
  const cardNumberChunkLengths = getCardNumberChunkLengths(cardBrand);

  // 한 번 열린 Step은 다시 닫히지 않는다.
  const updateMaxUnlockedStep = (step: number) => {
    setMaxUnlockedStep((previousStep) => Math.max(previousStep, step));
  };

  const unlockNextStepIfFieldValid = (isValid: boolean, nextStep: number) => {
    if (isValid) {
      updateMaxUnlockedStep(nextStep);
    }
  };

  const handleCardNumbersChange = (
    nextCardNumbers: CardInfoType["cardNumbers"],
  ) => {
    updateCardNumbers(nextCardNumbers);

    const nextCardBrand = getCardBrandName(nextCardNumbers);
    unlockNextStepIfFieldValid(
      validateCardNumber(nextCardNumbers.join(""), nextCardBrand).isValid,
      CARD_FORM.RENDER_STEP.CARD_COMPANY,
    );
  };

  const handleCardCompanyChange = (cardCompany: IssuerKoreanNameType) => {
    updateCardCompany(cardCompany);
    updateMaxUnlockedStep(CARD_FORM.RENDER_STEP.EXPIRY);
  };

  const handleExpiryMonthChange = (nextExpiryMonth: string) => {
    updateExpiryMonth(nextExpiryMonth);
    unlockNextStepIfFieldValid(
      validateExpiryMonth(nextExpiryMonth).isValid &&
        validateExpiryYear(expiryYear).isValid,
      CARD_FORM.RENDER_STEP.CVC,
    );
  };

  const handleExpiryYearChange = (nextExpiryYear: string) => {
    updateExpiryYear(nextExpiryYear);
    unlockNextStepIfFieldValid(
      validateExpiryMonth(expiryMonth).isValid &&
        validateExpiryYear(nextExpiryYear).isValid,
      CARD_FORM.RENDER_STEP.CVC,
    );
  };

  const handleCvcNumberChange = (nextCvcNumber: string) => {
    setCardInputSectionInformation((previousInformation) => ({
      ...previousInformation,
      cvcNumber: nextCvcNumber,
    }));

    unlockNextStepIfFieldValid(
      validateCvc(nextCvcNumber).isValid,
      CARD_FORM.RENDER_STEP.PASSWORD,
    );
  };

  const handlePasswordChange = (nextPassword: string) => {
    setCardInputSectionInformation((previousInformation) => ({
      ...previousInformation,
      password: nextPassword,
    }));

    unlockNextStepIfFieldValid(
      validatePassword(nextPassword).isValid,
      CARD_FORM.RENDER_STEP.COMPLETE,
    );
  };

  const joinedCardNumber = cardNumbers.join("");
  const fieldValidity = {
    cardNumber: validateCardNumber(joinedCardNumber, cardBrand).isValid,
    cardCompany: validateCardCompany(selectedCardCompany).isValid,
    expiryMonth: validateExpiryMonth(cardInfo.expiryMonth).isValid,
    expiryYear: validateExpiryYear(cardInfo.expiryYear).isValid,
    cvc: validateCvc(cardInputSectionInformation.cvcNumber).isValid,
    password: validatePassword(cardInputSectionInformation.password).isValid,
  };
  const isFormInputComplete = Object.values(fieldValidity).every(Boolean);

  const handleCardInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isFormInputComplete) {
      return;
    }

    const issuerCode = getIssuerCodeByName(selectedCardCompany);
    if (!issuerCode) {
      return;
    }

    const postCardInformation: PostCardRequestBody = {
      number: cardInfo.cardNumbers.join(""),
      expirationDate: `${cardInfo.expiryMonth}/${cardInfo.expiryYear}`,
      cvc: cardInputSectionInformation.cvcNumber,
      issuerCode: issuerCode,
    };

    registerCard(postCardInformation);

    if (cardRegisterError) {
      if (
        "code" in cardRegisterError &&
        cardRegisterError.code === "INVALID_CARD_NUMBER"
      ) {
        updateCardNumberErrorMessage(cardRegisterError.message);
      } else if (
        "code" in cardRegisterError &&
        cardRegisterError.code === "INVALID_CVC"
      ) {
        updateCvcErrorMessage(cardRegisterError.message);
      } else if (
        "code" in cardRegisterError &&
        cardRegisterError.code === "INVALID_EXPIRATION_DATE"
      ) {
        updateExpiryDateErrorMessage(cardRegisterError.message);
      } else {
        alert("카드 등록 중 에러가 발생했습니다.");
      }
    }
  };

  return (
    <Form onSubmit={handleCardInfoSubmit}>
      {maxUnlockedStep >= CARD_FORM.RENDER_STEP.PASSWORD && (
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

      {maxUnlockedStep >= CARD_FORM.RENDER_STEP.CVC && (
        <CardRegisterStep title="CVC 번호를 입력해 주세요">
          <CvcField
            cvcNumber={cardInputSectionInformation.cvcNumber}
            onCvcNumberChange={handleCvcNumberChange}
            formErrorMessage={formErrorMessages.cvc}
            clearFormErrorMessage={clearCvcErrorMessage}
          />
        </CardRegisterStep>
      )}

      {maxUnlockedStep >= CARD_FORM.RENDER_STEP.EXPIRY && (
        <CardRegisterStep
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
        >
          <ExpiryField
            expiryMonth={expiryMonth}
            expiryYear={expiryYear}
            onExpiryMonthChange={handleExpiryMonthChange}
            onExpiryYearChange={handleExpiryYearChange}
            formErrorMessage={formErrorMessages.expiryDate}
            clearFormErrorMessage={clearExpiryDateErrorMessage}
          />
        </CardRegisterStep>
      )}

      {maxUnlockedStep >= CARD_FORM.RENDER_STEP.CARD_COMPANY && (
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

      {maxUnlockedStep >= CARD_FORM.RENDER_STEP.CARD_NUMBER && (
        <CardRegisterStep
          title="결제할 카드 번호를 입력해 주세요"
          description="본인 명의의 카드만 결제 가능합니다."
        >
          <NumberField
            cardNumbers={cardNumbers}
            onCardNumbersChange={handleCardNumbersChange}
            chunkLengths={cardNumberChunkLengths}
            formErrorMessage={formErrorMessages.cardNumber}
            clearFormErrorMessage={clearCardNumberErrorMessage}
          />
        </CardRegisterStep>
      )}

      {isFormInputComplete && (
        <ConfirmButton type="submit" disabled={asyncState === "loading"}>
          {asyncState === "loading" ? "등록중..." : "확인"}
        </ConfirmButton>
      )}
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  padding: 30px;
`;

const ConfirmButton = styled(BaseButton)`
  position: fixed;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 5;
  width: 100%;
`;

export default CardRegisterForm;
