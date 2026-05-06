import { maskCardNumberTail } from "./utils";
import { Wrapper, Paragraph } from "./PreviewCardNumber.styles";

export default function PreviewCardNumber({
  cardNumber,
}: {
  cardNumber: string[];
}) {
  const cardNumbers = maskCardNumberTail([...cardNumber]);

  return (
    <Wrapper>
      <Paragraph>{cardNumbers.join(" ")}</Paragraph>
    </Wrapper>
  );
}
