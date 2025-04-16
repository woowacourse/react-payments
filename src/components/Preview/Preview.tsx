import { useEffect, useState } from "react";
import { useCard } from "../../hooks/useCard";
import {
  CardNumbersGroupCSS,
  CardTypeCSS,
  PreviewContainerCSS,
  PreviewCSS,
} from "./Preview.styled";
import { CardImageType } from "../../constants/constants";

function Preview() {
  const [cardImageType, setCardImageType] = useState<CardImageType | null>(
    null
  );
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
    if (parsedCardNumbers.length !== 16) {
      setCardImageType(null);
      return;
    }

    const firstNumber = parsedCardNumbers[0];
    const secondNumber = parsedCardNumbers[1];

    if (firstNumber === "4") {
      setCardImageType("visa");
    } else if (
      firstNumber === "5" &&
      secondNumber >= "1" &&
      secondNumber <= "5"
    ) {
      setCardImageType("mastercard");
    } else {
      setCardImageType(null);
    }
  };

  return (
    <PreviewContainerCSS>
      <PreviewCSS>
        {cardImageType !== null && <CardTypeCSS $cardType={cardImageType} />}
        <CardNumbersGroupCSS>
          <span>{cardNumbers.first}</span>
          <span>{cardNumbers.second}</span>
          <span>{cardNumbers.third}</span>
          <span>{cardNumbers.fourth}</span>
        </CardNumbersGroupCSS>
        <span>
          {expirationPeriod.month}/{expirationPeriod.year}
        </span>
      </PreviewCSS>
    </PreviewContainerCSS>
  );
}
export default Preview;
