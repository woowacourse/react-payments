import styled, { css } from "styled-components";

import Dot from "component/common/Dot/Dot.component";
import { CardType, CardTypeInfoType } from "types";

const ColorBoxContainer = styled.div`
  height: 62px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const ColorBoxText = styled.div<
  Omit<ColorBoxProps, "onClickCardType" | "cardName">
>`
  font-size: 12px;
  ${({ currentCardType, cardType }) =>
    currentCardType === cardType &&
    css`
      color: #00bcd4;
      text-decoration: underline;
    `};
`;

export interface ColorBoxProps extends CardTypeInfoType {
  onClickCardType: ({ cardType, cardName }: CardTypeInfoType) => void;
  currentCardType: CardType;
}

const ColorBox = ({
  cardType,
  cardName,
  onClickCardType,
  currentCardType,
}: ColorBoxProps) => {
  return (
    <ColorBoxContainer
      data-testid="color-box"
      onClick={() => onClickCardType({ cardType, cardName })}
    >
      <Dot size="huge" cardType={cardType} />
      <ColorBoxText currentCardType={currentCardType} cardType={cardType}>
        {cardName}
      </ColorBoxText>
    </ColorBoxContainer>
  );
};

export default ColorBox;
