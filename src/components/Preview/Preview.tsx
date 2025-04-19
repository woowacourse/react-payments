import { useEffect, useState } from "react";
import { useCard } from "../../hooks/useCard";
import {
  CardNumbersGroupCSS,
  CardTypeCSS,
  PreviewContainerCSS,
  PreviewCSS,
} from "./Preview.styled";
import { CARD_TYPE, CardType } from "../../constants/constants";

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

function Preview() {
  const [cardType, setCardType] = useState<CardType | null>(null);
  const { cardNumbers, expirationPeriod } = useCard();

  useEffect(() => {
    const parsedCardNumbers = parsingCardNumbers();
    checkCardType(parsedCardNumbers);
  }, [cardNumbers]);

  const parsingCardNumbers = () => {
    return Object.values(cardNumbers).reduce(
      (acc: string, cardNumber: string) => acc + cardNumber,
      ""
    );
  };

  const checkCardType = (parsedCardNumbers: string) => {
    const isIncompleteCardNumber =
      parsedCardNumbers.length !== CARD_CONSTANTS.COMPLETE_CARD_NUMBER_LENGTH;

    if (isIncompleteCardNumber) {
      setCardType(null);
      return;
    }

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

    if (isVisaCard) setCardType(CARD_TYPE.visa);
    else if (isMasterCard) setCardType(CARD_TYPE.master);
    else setCardType(null);
  };

  return (
    <PreviewContainerCSS>
      <PreviewCSS>
        {cardType !== null && <CardTypeCSS $cardType={cardType} />}
        <CardNumbersGroupCSS>
          <span>{cardNumbers.first}</span>
          <span>{cardNumbers.second}</span>
          <span>
            {cardNumbers.third && "*".repeat(cardNumbers.third.length)}
          </span>
          <span>
            {cardNumbers.fourth && "*".repeat(cardNumbers.fourth.length)}
          </span>
        </CardNumbersGroupCSS>
        {(expirationPeriod.month || expirationPeriod.year) && (
          <span>
            {expirationPeriod.month}/{expirationPeriod.year}
          </span>
        )}
      </PreviewCSS>
    </PreviewContainerCSS>
  );
}
export default Preview;
