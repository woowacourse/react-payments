import styled from "@emotion/styled";

export function CardNumber() {
  return (
    <CardNumberContainer>
      <span>1111</span>
      <span>2222</span>
      <span className="secret">● ● ● ●</span>
      <span className="secret">● ● ● ●</span>
    </CardNumberContainer>
  );
}

const CardNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  width: 100%;
  span {
    /* flex: 4 1;
    text-align: center; */
    letter-spacing: 2px;
  }
  .secret {
    font-size: 6px;
  }
`;
