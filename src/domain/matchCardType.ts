import DEFAULT_BLANK_IMAGE from "../Images/blank.png";
import MASTERCARD_IMAGE from "../Images/Mastercard.png";
import VISA_IMAGE from "../Images/Visa.png";

interface CardListElement {
  issuer: "" | "Visa" | "MasterCard";
  startingNumbers: string[];
}

const cardList: CardListElement[] = [
  { issuer: "Visa", startingNumbers: ["4"] },
  { issuer: "MasterCard", startingNumbers: ["51", "52", "53", "54", "55"] },
];

export const matchCardType = (cardNumber: string) => {
  const matchedStartingNumber = (startingNumber: string) =>
    cardNumber.slice(0, startingNumber.length) === startingNumber;

  const hasStartingNumber = (startingNumbers: string[]) =>
    startingNumbers.some(matchedStartingNumber);

  const matchedCardInfo = cardList.find((object) =>
    hasStartingNumber(object.startingNumbers)
  );

  return matchedCardInfo?.issuer ?? "";
};

const cardTypeImg: { [key: string]: string } = {
  ["Visa"]: VISA_IMAGE,
  ["MasterCard"]: MASTERCARD_IMAGE,
};

export const matchCardTypeImgSrc = (issuer: string) => {
  const result = cardTypeImg[issuer];
  return result ?? DEFAULT_BLANK_IMAGE;
};
