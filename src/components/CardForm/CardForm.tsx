import { ChangeEvent } from "react";
import { CARD_NUMBERS_INPUT_COUNTS } from "../../constants/condition";
import useInput from "../../hooks/useInput";

const CardForm = () => {
  const {
    input: cardNumbers,
    setInput: setCardNumbers,
    onChange: onChangeCardNumbers,
    errorMessage,
  } = useInput({
    initialValue: Array.from({ length: CARD_NUMBERS_INPUT_COUNTS }, () => ""),
  });

  return cardNumbers.map((number, index) => {
    <input
      placeholder=""
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChangeCardNumbers(e, index);
      }}
    >
      {number}
    </input>;
  });
};

export default CardForm;
