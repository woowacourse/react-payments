import styled, { css } from "styled-components";
import { MIDDLE_CARD_NUMBER_LENGTH } from "../../../constants/index";
import Dot from "../Dot/Dot.component";

const CardNumberTextBox = styled.div`
  display: flex;
  vertical-align: middle;
  font-weight: 500;
  margin-bottom: 5px;

  ${({ size }) =>
    size === "big"
      ? css`
          font-size: 18px;
          letter-spacing: 5px;
          gap: 16px;
        `
      : css`
          font-size: 14px;
          letter-spacing: 3px;
          gap: 10px;
        `}
`;

const CardDotContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardNumberText = ({ cardNumber, size }) => {
  return (
    <CardNumberTextBox size={size}>
      {Object.values(cardNumber).map((cardNumber, idx) => {
        if (idx >= MIDDLE_CARD_NUMBER_LENGTH) {
          return (
            <CardDotContainer key={idx}>
              {Array.from(cardNumber).map((_, idx) => (
                <Dot size="small" formType="card-number" key={"dot" + idx} />
              ))}
            </CardDotContainer>
          );
        }
        return <div key={idx}>{cardNumber}</div>;
      })}
    </CardNumberTextBox>
  );
};

export default CardNumberText;
