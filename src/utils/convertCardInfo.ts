import type { CardNumbers } from "../components/InputField/CardNumberField";
import type { ExpNumber } from "../components/InputField/ExpNumberField";

export default function convertCardInfo({
  cardNumbers,
  expNumbers,
  cvcNumbers,
  cardFirm,
}: {
  cardNumbers: CardNumbers;
  expNumbers: ExpNumber;
  cvcNumbers: string;
  cardFirm: { value: string; label: string };
}) {
  const result = {
    number: Object.values(cardNumbers).join(""),
    expirationDate: Object.values(expNumbers).join("/"),
    cvc: cvcNumbers,
    issuerCode: cardFirm.value,
  };
  return result;
}
