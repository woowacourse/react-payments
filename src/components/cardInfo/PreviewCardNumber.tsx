import styled from "@emotion/styled";

export default function PreviewCardNumber({
  cardNumber,
}: {
  cardNumber: string[];
}) {
  const array = [...cardNumber];

  if (array[2] !== "") {
    array[2] = "*".repeat(array[2].length);
  }

  if (array[3] !== "") {
    array[3] = "*".repeat(array[3].length);
  }
  return (
    <CardNumberWrapper>
      <CardNumberParagraph>
        {array[0] + " " + array[1] + " " + array[2] + " " + array[3]}
      </CardNumberParagraph>
    </CardNumberWrapper>
  );
}

const CardNumberWrapper = styled.div`
  display: flex;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 16%;
  line-height: 20px;
  vertical-align: middle;
  color: rgba(255, 255, 255, 1);
  gap: "10px";
`;

const CardNumberParagraph = styled.p`
  margin: 0;
  padding: 0;
`;
