import Container from "../common/Container";
import InputLabel from "../common/InputLabel";
import Input from "../common/Input";

import { useCallback, useContext } from "react";
import { NewCardContext } from "../../contexts/NewCardContext";
import { useCardNumbersInput } from "../../hook/useCardNumbersInput";

import { ValidFlagType } from "../../types/input";
import { CARDNUMBERS_MAXLEGNTH, NUMBER_REGEX } from "../../constants";

import { deleteLastNumber } from "../../utils/card";

const cardNumberInputInfo = {
  label: "cardNumbers",
  placeholder: "",
  type: "text",
  $width: "318px",
  $textPosition: "center",
};

const cannotInput = (postText: string, text: string): boolean => {
  if (postText.length < text.length) {
    const numbers = text.replaceAll(" - ", "");
    return numbers.length > CARDNUMBERS_MAXLEGNTH || !new RegExp(NUMBER_REGEX).test(text.slice(-1));
  }

  return false;
};

interface CardNumberInputProps {
  isInputsValid: ValidFlagType;
  setIsNumbersCompleted: (isValid: boolean) => void;
  setIsNumbersValid: (isValid: boolean) => void;
}

const CardNumberInput = ({ isInputsValid, setIsNumbersCompleted, setIsNumbersValid }: CardNumberInputProps) => {
  const { setNumbers, newCard } = useContext(NewCardContext);
  const { postText, saveNumbers, updateInputFlags } = useCardNumbersInput({
    setNumbers,
    setIsNumbersCompleted,
    setIsNumbersValid,
  });

  const handleInput = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value;
      if (cannotInput(postText, text)) {
        e.target.value = postText;

        return;
      }

      updateInputFlags(postText, text);

      if (postText !== text.slice(0, -1) && postText.slice(0, -1) !== text) {
        e.target.value = postText;

        return;
      }

      if (postText.length < text.length) {
        const addNumbers = `${newCard.numbers}${text.slice(-1)}`;
        saveNumbers(e.target, addNumbers);

        return;
      }

      const minusNumbers = deleteLastNumber(newCard.numbers);
      saveNumbers(e.target, minusNumbers);
    },
    [setIsNumbersCompleted, setIsNumbersValid, saveNumbers]
  );

  return (
    <Container>
      <InputLabel text="카드 번호" name="cardNumber" />
      <Input
        {...cardNumberInputInfo}
        handleInput={handleInput}
        error={{ isValid: isInputsValid.isCardNumbersValid, errorMessage: "기존 카드 번호와 중복됩니다." }}
      />
    </Container>
  );
};

export default CardNumberInput;
