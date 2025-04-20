import { CardNumbers } from "../contexts/CardContext";

export const parsingCardNumbers = (cardNumbers: CardNumbers) => {
  return Object.values(cardNumbers).reduce(
    (acc: string, cardNumber: string) => acc + cardNumber,
    ""
  );
};

export const checkCardType = (parsedCardNumbers: string) => {
  if (parsedCardNumbers.length !== 16) {
    return null;
  }

  const firstNumber = parsedCardNumbers[0];
  const secondNumber = parsedCardNumbers[1];

  if (firstNumber === "4") {
    return "visa";
  } else if (
    firstNumber === "5" &&
    secondNumber >= "1" &&
    secondNumber <= "5"
  ) {
    return "mastercard";
  } else {
    return null;
  }
};
