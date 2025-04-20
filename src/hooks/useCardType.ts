import { useEffect, useState } from "react";
import { CARD_TYPE, CardNumbers, CardType } from "../constants/constants";

const CARD_CONSTANTS = {
  COMPLETE_CARD_NUMBER_LENGTH: 16,
  VISA: {
    FIRST_DIGIT: "4",
  },
  MASTER: {
    FIRST_DIGIT: "5",
    SECOND_DIGIT_MIN: "1",
    SECOND_DIGIT_MAX: "5",
  },
};

function parseCardNumbers(cardNumbers: CardNumbers): string {
  return Object.values(cardNumbers).reduce(
    (acc: string, cardNumber: string) => acc + cardNumber,
    ""
  );
}

function identifyCardType(parsedCardNumbers: string): CardType | null {
  const isIncompleteCardNumber =
    parsedCardNumbers.length !== CARD_CONSTANTS.COMPLETE_CARD_NUMBER_LENGTH;
  if (isIncompleteCardNumber) return null;

  const firstNumber = parsedCardNumbers[0];
  const secondNumber = parsedCardNumbers[1];

  const isVisaCard = firstNumber === CARD_CONSTANTS.VISA.FIRST_DIGIT;

  const isMasterCardFirstDigitMatch =
    firstNumber === CARD_CONSTANTS.MASTER.FIRST_DIGIT;

  const isSecondDigitInMasterCardRange =
    secondNumber >= CARD_CONSTANTS.MASTER.SECOND_DIGIT_MIN &&
    secondNumber <= CARD_CONSTANTS.MASTER.SECOND_DIGIT_MAX;

  const isMasterCard =
    isMasterCardFirstDigitMatch && isSecondDigitInMasterCardRange;

  if (isVisaCard) return CARD_TYPE.visa;
  if (isMasterCard) return CARD_TYPE.master;
  return null;
}

export function useCardType(cardNumbers: CardNumbers) {
  const [cardType, setCardType] = useState<CardType | null>(null);

  useEffect(() => {
    const parsedCardNumbers = parseCardNumbers(cardNumbers);
    const identifiedCardType = identifyCardType(parsedCardNumbers);
    setCardType(identifiedCardType);
  }, [cardNumbers]);

  return cardType;
}
