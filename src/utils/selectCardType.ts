import Visa from "../assets/Visa.svg";
import MasterCard from "../assets/Mastercard.svg";
import Diners from "../assets/DinersClub.svg";
import Amex from "../assets/AmericanExpress.svg";
import Union from "../assets/ChinaUnionPay.svg";
import type { InputConfig } from "../types/types";
import {
  AMEX_INPUT_CARD_NUMBER_CONFIG,
  DINERS_INPUT_CARD_NUMBER_CONFIG,
  INPUT_CARD_NUMBER_CONFIG,
} from "../components/cardInfo/constants";

export function selectCardType(cardNumber: string[]): {
  inputConfig: InputConfig;
  cardType: string | null;
} {
  const firstNumber = cardNumber[0].substring(0, 1);
  if (firstNumber === "4") {
    return { inputConfig: INPUT_CARD_NUMBER_CONFIG, cardType: Visa };
  }

  const firstTwoNumber = cardNumber[0].substring(0, 2);
  if (firstTwoNumber >= "51" && firstTwoNumber <= "55") {
    return { inputConfig: INPUT_CARD_NUMBER_CONFIG, cardType: MasterCard };
  }

  if (firstTwoNumber === "36") {
    return { inputConfig: DINERS_INPUT_CARD_NUMBER_CONFIG, cardType: Diners };
  }

  if (firstTwoNumber === "34" || firstTwoNumber === "37") {
    return { inputConfig: AMEX_INPUT_CARD_NUMBER_CONFIG, cardType: Amex };
  }

  const firstSixNumber = cardNumber[0] + cardNumber[1].substring(0, 2);
  const firstThirdNumber = cardNumber[0].substring(0, 3);
  const firstFourthNumber = cardNumber[0].substring(0, 4);

  if (
    (firstSixNumber >= "622126" && firstSixNumber <= "622925") ||
    (firstThirdNumber >= "624" && firstThirdNumber <= "626") ||
    (firstFourthNumber >= "6282" && firstFourthNumber <= "6288")
  ) {
    return { inputConfig: INPUT_CARD_NUMBER_CONFIG, cardType: Union };
  }

  return { inputConfig: INPUT_CARD_NUMBER_CONFIG, cardType: null };
}
