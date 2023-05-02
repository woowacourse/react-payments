import { useCardDispatch, useCardState } from "./useCard";

function useCardNumber() {
  const dispatch = useCardDispatch();

  const { originNumber, displayNumber } = useCardState();
  const setOrginNumber = (value: string) =>
    dispatch({ type: "SET_ORIGIN_NUMBER", originNumber: value });

  const setdisplayNumber = (value: string) =>
    dispatch({ type: "SET_DISPLAY_NUMBER", displayNumber: value });

  const changeCardNumber = (e: React.ChangeEvent<HTMLInputElement>) => {
    const cardNumber = e.currentTarget.value.replace(/[^\d•]/g, "").slice(0, 16);

    if (cardNumber.length < originNumber.length) removeNumber(cardNumber);
    if (cardNumber.length > originNumber.length) addNumber(cardNumber);
    if (cardNumber.length === originNumber.length)
      setdisplayNumber(maskNumber(cardNumber));
  };

  const addNumber = (cardNumber: string) => {
    setOrginNumber(originNumber + cardNumber.slice(-1));
    setdisplayNumber(maskNumber(cardNumber));
  };

  const removeNumber = (cardNumber: string) => {
    if (originNumber.length > 8) {
      removeMaskedNumber();

      return;
    }

    setOrginNumber(originNumber.slice(0, -1));
    setdisplayNumber(cardNumber);
  };

  const removeMaskedNumber = () => {
    const frontNumber = originNumber.slice(0, 8);

    setOrginNumber(frontNumber);
    setdisplayNumber(maskNumber(frontNumber));
  };

  const maskNumber = (cardNumber: string) => {
    const splitNumber = [];

    for (let i = 0; i < cardNumber.length; i += 4) {
      splitNumber.push(cardNumber.slice(i, i + 4));
    }

    const maskedNumber = splitNumber.map((value, idx) =>
      idx < 2 ? value : "•".repeat(value.length)
    );

    return maskedNumber.join("-");
  };

  const validate = () => originNumber.replace(/[^\d]/g, "").length === 16;

  return { originNumber, displayNumber, changeCardNumber, validate };
}

export default useCardNumber;
