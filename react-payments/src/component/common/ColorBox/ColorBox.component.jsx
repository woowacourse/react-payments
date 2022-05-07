import styled, { css } from "styled-components";
import Dot from "../Dot/dot.component";

const ColorBoxContainer = styled.div`
  height: 62px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  cursor: pointer;
`;

const ColorBoxText = styled.div`
  font-size: 12px;
  ${({ currentCardType, cardType }) =>
    currentCardType === cardType &&
    css`
      color: #00bcd4;
      text-decoration: underline;
    `};
`;

const ColorBox = ({ cardType, cardName, onClickCardType, currentCardType }) => {
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
