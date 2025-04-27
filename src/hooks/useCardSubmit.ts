import { FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useCard } from "./useCard";
import { useCardValidation } from "./useCardValidation";
import { CARD_COMPANY_INFO } from "../constants/constants";

export function useCardSubmit() {
  const { cardCompany, cardNumbers, areAllFieldsFilled } = useCard();
  const { areAllFieldsValid } = useCardValidation();
  const navigate = useNavigate();

  const isFormComplete = areAllFieldsFilled() && areAllFieldsValid();

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const selectedCard = CARD_COMPANY_INFO.find(
      (card) => card.value === cardCompany
    );
    navigate("/register-complete", {
      state: {
        cardFirstSegment: cardNumbers.first,
        cardName: selectedCard ? selectedCard.text : "카드",
      },
    });
  };

  return {
    handleSubmit,
    isFormComplete,
  };
}
