import styled from "@emotion/styled";

export default function PreviewCardExpireDate({
  expireDate,
}: {
  expireDate: string[];
}) {
  return (
    <CardNumberWrapper>
      <CardNumberParagraph>
        {expireDate[0] + "/" + expireDate[1]}
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
  gap: "0px";
`;

const CardNumberParagraph = styled.p`
  margin: 0;
  padding: 0;
`;
