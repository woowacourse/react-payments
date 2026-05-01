import { maskCardNumberTail } from "./utils";
import {
  CardNumberWrapper,
  CardNumberParagraph,
} from "./PreviewCardNumber.styles";

export default function PreviewCardNumber({
  cardNumber,
}: {
  cardNumber: string[];
}) {
  const cardNumbers = maskCardNumberTail([...cardNumber]);

  return (
    <CardNumberWrapper>
      <CardNumberParagraph>{cardNumbers.join(" ")}</CardNumberParagraph>
    </CardNumberWrapper>
  );
}
