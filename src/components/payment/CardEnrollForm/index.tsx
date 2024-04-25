import { useEffect, useState } from "react";

import CardCVCInput from "./CardCVCInput";
import CardExpirationDateInput from "./CardExpirationDateInput";
import { CardInformation } from "../../../types/cardInformation";
import { CardIssuer } from "../../../constants/cardIssuers";
import CardIssuerSelect from "./CardIssuerSelect";
import CardNumbersInput from "./CardNumbersInput";
import CardOwnerNameInput from "./CardOwnerNameInput";
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
        year: false,
      },
      errorMessage: "",
    },
    cardOwnerName: { isError: false, errorMessage: "" },
    cardCVC: { isError: false, errorMessage: "" },
    cardPassword: { isError: false, errorMessage: "" },
  });

  const [isReadyForSubmit, setIsReadForSubmit] = useState(false);

  useEffect(() => {
    const isFilledAll = Object.values(cardInformation).every(
      (cardInformationValue) => {
        if (typeof cardInformationValue === "string") {
          return cardInformationValue.length > 0;
        }
        if (Array.isArray(cardInformationValue)) {
          return cardInformationValue.some((el) => el.length > 0);
        }
        return (
          cardInformationValue.month.length > 0 ||
          cardInformationValue.year.length > 0
        );
      }
    );

    const isExistError = Object.values(errorState).some(({ isError }) => {
      if (typeof isError === "boolean") {
        return isError;
      }
      if (Array.isArray(isError)) {
        return isError.some((el) => el);
      }
      return isError.month || isError.year;
    });

    setIsReadForSubmit(isFilledAll && !isExistError);
  }, [cardInformation, errorState]);

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
          errorState={errorState.cardPassword}
          onChange={onCardPasswordChange}
          updateErrorState={updatePasswordErrorState}
        />
        <CardCVCInput
          cardCVC={cardInformation.cardCVC}
          errorState={errorState.cardCVC}
          onChange={onCardCVCChange}
          onBlur={() => setIsCVCFocused(false)}
          onFocus={() => setIsCVCFocused(true)}
          updateErrorState={updateCVCErrorState}
        />
        <CardNumbersInput
          cardNumbers={cardInformation.cardNumbers}
          errorState={errorState.cardNumbers}
          onChange={onCardNumbersChange}
          updateErrorState={updateCardNumbersErrorState}
        />
        <CardExpirationDateInput
          cardExpiration={cardInformation.cardExpiration}
          errorState={errorState.cardExpiration}
          onChange={onCardExpirationChange}
          updateErrorState={updateCardExpirationErrorState}
        />
        <CardOwnerNameInput
          cardOwnerName={cardInformation.cardOwnerName}
          errorState={errorState.cardOwnerName}
          onChange={onCardOwnerNameChange}
          updateErrorState={updateCardOwnerNameErrorState}
        />
        <CardIssuerSelect
          cardIssuer={cardInformation.cardIssuer}
          errorState={errorState.cardIssuer}
          onChange={onCardIssuerChange}
          updateErrorState={updateCardIssuerErrorState}
        />
      </CardInformationContainer>
      <FormSubmitButton disabled={!isReadyForSubmit} />
    </CardEnrollFormContainer>
  );
}
