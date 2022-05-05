import styled from "styled-components";
import { MIDDLE_CARD_NUMBER_LENGTH } from "../../../constants/index";
import Dot from "../Dot/dot.component";

const CardNumberTextBox = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  vertical-align: middle;
  font-weight: 500;
  margin-bottom: 5px;
  letter-spacing: 3px;
`;

const CardDotContainer = styled.div`
  display: flex;
  align-items: center;
`;

const CardNumberText = ({ cardNumbers }) => {
  return (
    <CardNumberTextBox>
      {Object.values(cardNumbers).map((cardNumber, idx) => {
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
