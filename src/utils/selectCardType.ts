import Visa from "../assets/Visa.svg";
import MasterCard from "../assets/Mastercard.svg";

export const selectCardType = (cardNumber: string[]) => {
  if (!cardNumber || !cardNumber[0]) return null;
  const firstNumber = cardNumber[0].substring(0, 1);
  if (firstNumber === "4") return Visa;

  const firstTwoNumber = cardNumber[0].substring(0, 2);
  if (firstTwoNumber >= "51" && firstTwoNumber <= "55") return MasterCard;

  return null;
};
