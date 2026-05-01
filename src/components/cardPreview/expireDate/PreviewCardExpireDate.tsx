import {
  CardNumberWrapper,
  CardNumberParagraph,
} from "./PreviewCardExpireDate.styles";

export default function PreviewCardExpireDate({
  expireDate,
}: {
  expireDate: string[];
}) {
  const formatted = expireDate.filter(Boolean).join("/");
  return (
    <CardNumberWrapper>
      <CardNumberParagraph>{formatted}</CardNumberParagraph>
    </CardNumberWrapper>
  );
}
