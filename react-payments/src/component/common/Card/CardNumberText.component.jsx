import styled, { css } from "styled-components";

import Dot from "component/common/Dot/Dot.component";

import { MIDDLE_CARD_NUMBER_LENGTH } from "constants/index";
import { RowFlexWrapper } from "styles/wrapper";
import { cardNumberEnum } from "constants";

const CardNumberTextBox = styled.div`
  display: flex;
  vertical-align: middle;
  font-weight: 500;
  margin-bottom: 5px;

  ${({ size }) =>
    size === "big"
      ? css`
          font-size: 18px;
          gap: 16px;
          letter-spacing: 5px;
        `
      : css`
          font-size: 14px;
          gap: 10px;
          letter-spacing: 3px;
        `}
`;

const CardNumberText = ({ cardNumbers, size }) => {
  return (
    <CardNumberTextBox size={size}>
      {Object.entries(cardNumbers)
        .sort(
          ([key, _], [newKey, __]) =>
            cardNumberEnum[key] - cardNumberEnum[newKey]
        )
        .map(([_, cardNumber], idx) => {
          if (idx >= MIDDLE_CARD_NUMBER_LENGTH) {
            return (
              <RowFlexWrapper key={idx}>
                {Array.from(cardNumber).map((_, idx) => (
                  <Dot size="small" formType="card-number" key={"dot" + idx} />
                ))}
              </RowFlexWrapper>
            );
          }
          return <div key={idx}>{cardNumber}</div>;
        })}
    </CardNumberTextBox>
  );
};

export default CardNumberText;
