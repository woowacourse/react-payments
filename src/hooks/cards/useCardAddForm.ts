import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";
import type { CardFormData } from "../../types";
import { useCardListContext } from "../../contexts/CardListContext";
import { useCardInputValidation } from "./useCardInputValidation";
import { useFormComplete } from "../common/useFormComplete";
import { PATH } from "../../constants";

const initialValue: CardFormData = {
  issuer: "",
  cardNumber: "",
  expirationDate: {
    month: "",
    year: "",
  },
  ownerName: "",
  securityCode: "",
  password: ["", ""],
};

const useCardAddForm = () => {
  const { newCardId, cardListLength, addCard } = useCardListContext();
  const [cardInformation, setCardInformation] = useState(initialValue);
  const {
    inputValidation,
    inputError,
    updateInputValidation,
    updateInputError,
    triggerAllInputErrors,
  } = useCardInputValidation();
  const isFormComplete = useFormComplete(inputValidation);

  const navigate = useNavigate();

  const updateInputValue = useCallback(
    <K extends keyof CardFormData>(key: K, value: CardFormData[K]) => {
      setCardInformation((prevCardInformation) => ({
        ...prevCardInformation,
        [key]: value,
      }));
      updateInputValidation(key, value);
    },
    [updateInputValidation]
  );

  const focusErrorInput = (
    errorInputs: (HTMLButtonElement | HTMLInputElement)[]
  ) => {
    if (!inputValidation.issuer) {
      errorInputs[0].focus();
    } else {
      errorInputs[1].focus();
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isFormComplete) {
      const errorInputs = Array.from(event.currentTarget.elements).filter(
        (element): element is HTMLButtonElement | HTMLInputElement =>
          element.tagName === "BUTTON" ||
          !(element as HTMLInputElement).validity.valid
      );

      triggerAllInputErrors();
      focusErrorInput(errorInputs);

      return;
    }

    const newCard = {
      ...cardInformation,
      id: newCardId,
      cardName: `카드 ${cardListLength + 1}`,
    };

    addCard(newCard);
    navigate(`${PATH.REGISTER}/${newCard.id}`);
  };

  return {
    cardInformation,
    inputError,
    updateInputValue,
    updateInputError,
    handleSubmit,
  };
};

export { useCardAddForm };
