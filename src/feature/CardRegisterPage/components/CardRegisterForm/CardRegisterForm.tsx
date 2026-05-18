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
import { useCardRegister } from "../../hooks/useCardRegister";
import { useCardRegisterFormError } from "../../hooks/useCardRegisterFormError";
import type { IssuerKoreanNameType } from "../../../../shared/types/Issuer";
import { getIssuerCodeByName } from "../../../../shared/utils/issuer";
import { useNavigate } from "react-router-dom";
import { useFormStep } from "../../hooks/useFormStep";
import type { RequestErrorInformation } from "../../../../shared/types/api";
import type { PostCardRequestBody } from "../../types/card";

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
  const navigate = useNavigate();
  const [cardInputSectionInformation, setCardInputSectionInformation] =
    useState({
      cvcNumber: "",
      password: "",
    });

  const { asyncState, registerCard } = useCardRegister();
  const {
    formErrorMessages,
    updateCardNumberErrorMessage,
    updateCvcErrorMessage,
    updateExpiryDateErrorMessage,
    clearCardNumberErrorMessage,
    clearCvcErrorMessage,
    clearExpiryDateErrorMessage,
  } = useCardRegisterFormError();

  const { cardNumbers, expiryMonth, expiryYear, selectedCardCompany } =
    cardInfo;
  const { maxUnlockedStep, unlockNextStepIfFieldValid } = useFormStep(cardInfo);

  const cardBrand = getCardBrandName(cardNumbers);
  const cardNumberChunkLengths = getCardNumberChunkLengths(cardBrand);

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
    unlockNextStepIfFieldValid(
      validateCardCompany(cardCompany).isValid,
      CARD_FORM.RENDER_STEP.EXPIRY,
    );
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

  const handleRegisterError = (error: Error | RequestErrorInformation) => {
    if (!("code" in error)) {
      alert("카드 등록 중 에러가 발생했습니다.");
      return;
    }

    const fieldErrorHandlers = {
      INVALID_CARD_NUMBER: updateCardNumberErrorMessage,
      INVALID_CVC: updateCvcErrorMessage,
      INVALID_EXPIRATION_DATE: updateExpiryDateErrorMessage,
    };

    const updateFieldError =
      fieldErrorHandlers[error.code as keyof typeof fieldErrorHandlers];

    if (updateFieldError) {
      updateFieldError(error.message);
      return;
    }

    alert("카드 등록 중 에러가 발생했습니다.");
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

    registerCard(
      postCardInformation,
      () => {
        navigate("/cards");
      },
      handleRegisterError,
    );
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
