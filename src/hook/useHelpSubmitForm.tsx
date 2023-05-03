import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { NewCardContext } from "../contexts/NewCardContext";

import { validateExpiryDate, validateCardNumbers } from "../validation";

import { CardType } from "../types/card";
import { ValidFlagType } from "../types/input";

interface Props {
  cards: CardType[];
  setIsNumbersValid: (valid: boolean) => void;
  setIsExpiryDateValid: (valid: boolean) => void;
}

export const useHelpSubmitForm = ({ cards, setIsNumbersValid, setIsExpiryDateValid }: Props) => {
  const { newCard } = useContext(NewCardContext);
  const navigate = useNavigate();
  const moveToHome = () => {
    navigate("/assignAlias", { state: { newCard } });
  };

  const isAllValid = () => {
    const validations: ValidFlagType = {
      isCardNumbersValid: validateCardNumbers(newCard, cards),
      isExpiryDateValid: validateExpiryDate(newCard.expiryDate),
    };

    if (!Object.values(validations).every((valid) => valid)) {
      setIsNumbersValid(validations.isCardNumbersValid);
      setIsExpiryDateValid(validations.isExpiryDateValid);
      return false;
    }

    return true;
  };

  const makeCardFormData = (target: HTMLFormElement) => {
    const formData = new FormData(target as HTMLFormElement);
    const data = Object.fromEntries(formData.entries());
    const cardInfo: CardType = {
      numbers: newCard.numbers,
      expiryDate: newCard.expiryDate,
      owner: newCard.owner ?? "",
      brand: newCard.brand,
      CVC: Number(data.CVC),
      password: [Number(data.password1), Number(data.password2)],
    };

    return cardInfo;
  };

  return { isAllValid, makeCardFormData, moveToHome };
};
