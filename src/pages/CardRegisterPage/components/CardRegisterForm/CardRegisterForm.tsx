import { useState } from "react";
import styled from "styled-components";
import CvcField from "./CvcNumberField/CvCNumberField";
import ExpiryField from "./ExpiryDateField/ExpiryDateField";
import NumberField from "./CardNumberField/CardNumberField";
import CardCompanySelectField from "./IssuerField/IssuerField";
import PasswordField from "./PasswordField/PasswordField";
import BaseButton from "../../../../shared/components/Button/BaseButton";
import { useCardRegisterFormError } from "./hooks/useCardRegisterFormError";
import { useNavigate } from "react-router-dom";
import { useFormStep } from "./hooks/useFormStep";

import { validateCardNumber } from "./utils/cardNumberValidator";
import { validateIssuer } from "./utils/issuerValidator";
import {
  validateExpiryMonth,
  validateExpiryYear,
} from "./utils/expiryDateValidator";
import { validateCvc } from "./utils/cvcNumberValidator";
import { validatePassword } from "./utils/passwordValidator";
import { UNLOCKED_STEP } from "./constants";
import CardRegisterStep from "./shared/CardRegisterStep/CardRegisterStep";
import type { CardRegisterInputInformation } from "../../cardRegisterInputInformation.types";
import {
  getIssuerCodeByName,
  type IssuerKoreanName,
} from "../../../../domain/card/cardIssuer";
import { getCardBrandName } from "../../../../domain/card/cardBrand";
import {
  getcardNumberEachChunkLength,
  type CardNumber,
} from "../../../../domain/card/cardNumber";
import { type CardRegisterRequestBody } from "../../../../domain/card/api/cards.types";
import { CardRegisterError } from "../../../../domain/card/api/cards.error";
import { useCardRegisterMutation } from "./hooks/useCardRegisterMutation";

const CardRegisterForm = ({
  cardInfo,
  updateCardNumbers,
  updateExpiryMonth,
  updateExpiryYear,
  updateCardCompany,
}: {
  cardInfo: CardRegisterInputInformation;
  updateCardNumbers: (cardNumbers: CardNumber) => void;
  updateExpiryMonth: (expiryMonth: string) => void;
  updateExpiryYear: (expiryYear: string) => void;
  updateCardCompany: (cardCompany: IssuerKoreanName) => void;
}) => {
  const navigate = useNavigate();
  const [cardInputSectionInformation, setCardInputSectionInformation] =
    useState({
      cvcNumber: "",
      password: "",
    });

  const { asyncState, registerCard } = useCardRegisterMutation();
  const {
    formErrorMessages,
    updateCardNumberErrorMessage,
    updateCvcErrorMessage,
    updateExpiryDateErrorMessage,
    clearCardNumberErrorMessage,
    clearCvcErrorMessage,
    clearExpiryDateErrorMessage,
  } = useCardRegisterFormError();

  const { cardNumbers, expiryMonth, expiryYear, selectedIssuer } = cardInfo;
  const { maxUnlockedStep, unlockNextStepIfFieldValid } = useFormStep(cardInfo);

  const cardBrand = getCardBrandName(cardNumbers);

  const handleCardNumbersChange = (
    nextCardNumbers: CardRegisterInputInformation["cardNumbers"],
  ) => {
    updateCardNumbers(nextCardNumbers);

    const nextCardBrand = getCardBrandName(nextCardNumbers);
    unlockNextStepIfFieldValid(
      validateCardNumber(nextCardNumbers.join(""), nextCardBrand).isValid,
      UNLOCKED_STEP.ISSUER,
    );
  };

  const handleCardCompanyChange = (cardCompany: IssuerKoreanName) => {
    updateCardCompany(cardCompany);
    unlockNextStepIfFieldValid(
      validateIssuer(cardCompany).isValid,
      UNLOCKED_STEP.EXPIRY,
    );
  };

  const handleExpiryMonthChange = (
    nextExpiryMonth: CardRegisterInputInformation["expiryMonth"],
  ) => {
    updateExpiryMonth(nextExpiryMonth);
    unlockNextStepIfFieldValid(
      validateExpiryMonth(nextExpiryMonth).isValid &&
        validateExpiryYear(expiryYear).isValid,
      UNLOCKED_STEP.CVC,
    );
  };

  const handleExpiryYearChange = (
    nextExpiryYear: CardRegisterInputInformation["expiryYear"],
  ) => {
    updateExpiryYear(nextExpiryYear);
    unlockNextStepIfFieldValid(
      validateExpiryMonth(expiryMonth).isValid &&
        validateExpiryYear(nextExpiryYear).isValid,
      UNLOCKED_STEP.CVC,
    );
  };

  const handleCvcNumberChange = (nextCvcNumber: string) => {
    setCardInputSectionInformation((previousInformation) => ({
      ...previousInformation,
      cvcNumber: nextCvcNumber,
    }));

    unlockNextStepIfFieldValid(
      validateCvc(nextCvcNumber).isValid,
      UNLOCKED_STEP.PASSWORD,
    );
  };

  const handlePasswordChange = (nextPassword: string) => {
    setCardInputSectionInformation((previousInformation) => ({
      ...previousInformation,
      password: nextPassword,
    }));

    unlockNextStepIfFieldValid(
      validatePassword(nextPassword).isValid,
      UNLOCKED_STEP.COMPLETE,
    );
  };

  const joinedCardNumber = cardNumbers.join("");
  const fieldValidity = {
    cardNumber: validateCardNumber(joinedCardNumber, cardBrand).isValid,
    cardCompany: validateIssuer(selectedIssuer).isValid,
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

    const issuerCode = getIssuerCodeByName(selectedIssuer);
    if (!issuerCode) {
      return;
    }

    const postCardInformation: CardRegisterRequestBody = {
      number: cardInfo.cardNumbers.join(""),
      expirationDate: `${cardInfo.expiryMonth}/${cardInfo.expiryYear}`,
      cvc: cardInputSectionInformation.cvcNumber,
      issuerCode: issuerCode,
    };

    registerCard(postCardInformation, {
      onSuccess: () => navigate("/cards"),
      onError: (error: CardRegisterError) => {
        switch (error.code) {
          case "INVALID_CVC":
            updateCvcErrorMessage(error.message);
            break;

          case "INVALID_CARD_NUMBER":
            updateCardNumberErrorMessage(error.message);
            break;

          case "INVALID_EXPIRATION_DATE":
            updateExpiryDateErrorMessage(error.message);
            break;

          default:
            alert("일치하는 에러코드가 존재하지 않습니다.");
            break;
        }
      },
    });
  };

  return (
    <Form onSubmit={handleCardInfoSubmit}>
      {maxUnlockedStep >= UNLOCKED_STEP.PASSWORD && (
        <CardRegisterStep
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요"
        >
          <PasswordField
            password={cardInputSectionInformation.password}
            onPasswordChange={handlePasswordChange}
            disabledInput={asyncState === "loading"}
          />
        </CardRegisterStep>
      )}

      {maxUnlockedStep >= UNLOCKED_STEP.CVC && (
        <CardRegisterStep title="CVC 번호를 입력해 주세요">
          <CvcField
            cvcNumber={cardInputSectionInformation.cvcNumber}
            onCvcNumberChange={handleCvcNumberChange}
            formErrorMessage={formErrorMessages.cvc}
            clearFormErrorMessage={clearCvcErrorMessage}
            disabledInput={asyncState === "loading"}
          />
        </CardRegisterStep>
      )}

      {maxUnlockedStep >= UNLOCKED_STEP.EXPIRY && (
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
            disabledInput={asyncState === "loading"}
          />
        </CardRegisterStep>
      )}

      {maxUnlockedStep >= UNLOCKED_STEP.ISSUER && (
        <CardRegisterStep
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
        >
          <CardCompanySelectField
            selectedIssuer={selectedIssuer}
            onSelect={handleCardCompanyChange}
            disabledSelect={asyncState === "loading"}
          />
        </CardRegisterStep>
      )}

      {maxUnlockedStep >= UNLOCKED_STEP.CARD_NUMBER && (
        <CardRegisterStep
          title="결제할 카드 번호를 입력해 주세요"
          description="본인 명의의 카드만 결제 가능합니다."
        >
          <NumberField
            cardNumbers={cardNumbers}
            onCardNumbersChange={handleCardNumbersChange}
            cardNumberEachChunkLength={getcardNumberEachChunkLength(cardBrand)}
            formErrorMessage={formErrorMessages.cardNumber}
            clearFormErrorMessage={clearCardNumberErrorMessage}
            disabledInput={asyncState === "loading"}
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
