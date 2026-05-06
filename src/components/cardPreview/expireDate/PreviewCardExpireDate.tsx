import { Wrapper, Paragraph } from "./PreviewCardExpireDate.styles";

export default function PreviewCardExpireDate({
  expireDate,
}: {
  expireDate: string[];
}) {
  const formatted = expireDate.filter(Boolean).join("/");
  return (
    <Wrapper>
      <Paragraph>{formatted}</Paragraph>
    </Wrapper>
  );
}
