import styled from "@emotion/styled";

export function CardNumber({ cardNumber }) {
  return (
    <CardNumberContainer id="preview-card-number">
      <span>{cardNumber["first-digits"]}</span>
      <span>{cardNumber["second-digits"]}</span>
      <span className="secret">
        {"●".repeat(cardNumber["third-digits"].length)}
      </span>
      <span className="secret">
        {"●".repeat(cardNumber["fourth-digits"].length)}
      </span>
    </CardNumberContainer>
  );
}

const CardNumberContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 0.625rem;
  width: 100%;
  height: 1.25rem;
  span {
    flex: 4 1;
    letter-spacing: 2px;
  }
  .secret {
    font-size: 6px;
  }
`;
