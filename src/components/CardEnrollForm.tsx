import { useEffect, useState } from "react";

import CardCVCInput from "./CardCVCInput";
import CardExpirationDate from "./CardExpirationDate";
import { CardInformation } from "../types/cardInformation";
import { CardIssuer } from "../constants/cardIssuers";
import CardIssuerSelect from "./CardIssuerSelect";
import CardNumbers from "./CardNumbers";
import CardOwnerName from "./CardOwnerName";
import CardPasswordInput from "./CardPasswordInput";
import CardPreview from "./CardPreview";
import FormSubmitButton from "./FormSubmitButton";
import styled from "styled-components";

const CardEnrollFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 77px;
`;

const CardInformationContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 376px;
  padding: 45px 30px;
  gap: 16px;
`;

export default function CardEnrollForm() {
  const [isCVCFocused, setIsCVCFocused] = useState(false);

  const [cardInformation, setCardInformation] = useState<CardInformation>({
    cardNumbers: ["", "", "", ""],
    cardIssuer: "",
    cardExpiration: {
      month: "",
      year: "",
    },
    cardOwnerName: "",
    cardCVC: "",
    cardPassword: "",
  });

  const [errorState, setErrorState] = useState({
    cardNumbers: { isError: [false, false, false, false], errorMessage: "" },
    cardIssuer: { isError: false, errorMessage: "" },
    cardExpiration: {
      isError: {
        month: false,
        year: true,
      },
      errorMessage: "",
    },
    cardOwnerName: { isError: false, errorMessage: "" },
    cardCVC: { isError: false, errorMessage: "" },
    cardPassword: { isError: false, errorMessage: "" },
  });

  const [isReadyForSubmit, setIsReadForSubmit] = useState(false);

  useEffect(() => {
    const isExistError = Object.values(errorState).some(({ isError }) => {
      if (typeof isError === "boolean") {
        return isError;
      }
      if (Array.isArray(isError)) {
        return isError.some((el) => el);
      }
      return isError.month || isError.year;
    });

    setIsReadForSubmit(!isExistError);
  }, [errorState]);

  const onCardNumbersChange = (inputValue: string, targetIndex: number) => {
    setCardInformation((prev) => {
      const cardNumbers: CardInformation["cardNumbers"] = [...prev.cardNumbers];
      cardNumbers[targetIndex] = inputValue;
      return { ...prev, cardNumbers };
    });
  };

  const onCardIssuerChange = (inputValue: CardIssuer) => {
    setCardInformation((prev) => ({ ...prev, cardIssuer: inputValue }));
  };

  const onCardExpirationChange = (inputValue: string, targetKey: string) => {
    setCardInformation((prev) => ({
      ...prev,
      cardExpiration: {
        ...prev.cardExpiration,
        [targetKey]: inputValue,
      },
    }));
  };

  const onCardOwnerNameChange = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardOwnerName: inputValue }));
  };

  const onCardCVCChange = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardCVC: inputValue }));
  };

  const onCardPasswordChange = (inputValue: string) => {
    setCardInformation((prev) => ({ ...prev, cardPassword: inputValue }));
  };

  const updatePasswordErrorState = ({
    isError,
    errorMessage,
  }: {
    isError: boolean;
    errorMessage: string;
  }) => {
    setErrorState((prev) => ({
      ...prev,
      cardPassword: { isError, errorMessage },
    }));
  };

  const updateCVCErrorState = ({
    isError,
    errorMessage,
  }: {
    isError: boolean;
    errorMessage: string;
  }) => {
    setErrorState((prev) => ({
      ...prev,
      cardCVC: { isError, errorMessage },
    }));
  };

  const updateCardNumbersErrorState = ({
    isError,
    errorMessage,
  }: {
    isError: boolean[];
    errorMessage: string;
  }) => {
    setErrorState((prev) => ({
      ...prev,
      cardNumbers: { isError, errorMessage },
    }));
  };

  const updateCardExpirationErrorState = ({
    isError,
    errorMessage,
  }: {
    isError: { month: boolean; year: boolean };
    errorMessage: string;
  }) => {
    setErrorState((prev) => ({
      ...prev,
      cardExpiration: { isError, errorMessage },
    }));
  };

  const updateCardOwnerNameErrorState = ({
    isError,
    errorMessage,
  }: {
    isError: boolean;
    errorMessage: string;
  }) => {
    setErrorState((prev) => ({
      ...prev,
      cardOwnerName: { isError, errorMessage },
    }));
  };

  const updateCardIssuerErrorState = ({
    isError,
    errorMessage,
  }: {
    isError: boolean;
    errorMessage: string;
  }) => {
    setErrorState((prev) => ({
      ...prev,
      cardIssuer: { isError, errorMessage },
    }));
  };

  return (
    <CardEnrollFormContainer>
      <CardPreview cardInformation={cardInformation} isFlipped={isCVCFocused} />
      <CardInformationContainer>
        <CardPasswordInput
          cardPassword={cardInformation.cardPassword}
          onChange={onCardPasswordChange}
          errorState={errorState.cardPassword}
          updateErrorState={updatePasswordErrorState}
        />
        <CardCVCInput
          cardCVC={cardInformation.cardCVC}
          onChange={onCardCVCChange}
          onFocus={() => setIsCVCFocused(true)}
          onBlur={() => setIsCVCFocused(false)}
          errorState={errorState.cardCVC}
          updateErrorState={updateCVCErrorState}
        />
        <CardNumbers
          cardNumbers={cardInformation.cardNumbers}
          onChange={onCardNumbersChange}
          errorState={errorState.cardNumbers}
          updateErrorState={updateCardNumbersErrorState}
        />
        <CardExpirationDate
          cardExpiration={cardInformation.cardExpiration}
          onChange={onCardExpirationChange}
          errorState={errorState.cardExpiration}
          updateErrorState={updateCardExpirationErrorState}
        />
        <CardOwnerName
          cardOwnerName={cardInformation.cardOwnerName}
          onChange={onCardOwnerNameChange}
          errorState={errorState.cardOwnerName}
          updateErrorState={updateCardOwnerNameErrorState}
        />
        <CardIssuerSelect
          cardIssuer={cardInformation.cardIssuer}
          onChange={onCardIssuerChange}
          errorState={errorState.cardIssuer}
          updateErrorState={updateCardIssuerErrorState}
        />
      </CardInformationContainer>
      <FormSubmitButton disabled={!isReadyForSubmit} />
    </CardEnrollFormContainer>
  );
}
