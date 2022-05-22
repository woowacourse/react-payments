import styled, { css } from "styled-components";

import Dot from "component/common/Dot/Dot.component";

import { MIDDLE_CARD_NUMBER_LENGTH } from "constants/index";
import { RowFlexWrapper } from "styles/wrapper";
import { SeveralInputType, CardNumberEnum, getProperty } from "types";

const CardNumberTextBox = styled.div<{ size?: string }>`
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

interface CardNumberTextProps {
  cardNumbers: SeveralInputType;
  size?: string;
}

const CardNumberText = ({ cardNumbers, size }: CardNumberTextProps) => {
  return (
    <CardNumberTextBox size={size}>
      {Object.keys(cardNumbers)
        .sort(
          (key, newKey) =>
            getProperty(CardNumberEnum, key as keyof typeof CardNumberEnum) -
            getProperty(CardNumberEnum, newKey as keyof typeof CardNumberEnum)
        )
        .map(([_, cardNumber], idx) => {
          if (idx >= MIDDLE_CARD_NUMBER_LENGTH) {
            return (
              <RowFlexWrapper key={idx}>
                {Array.from(cardNumber).map((_, idx) => (
                  <Dot size="small" formType="card-number" key={idx} />
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
