import styled, { css } from "styled-components";

interface CardBoxProps {
  hexColor: string;
  large: boolean;
}

interface CardParagraphProps {
  width: number;
}

const CardBox = styled.div<CardBoxProps>`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 208px;
  height: 130px;
  padding: 16px;
  background-color: ${(props) => props.hexColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  margin: 10px 0 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => `${props.hexColor}cc`};
  }

  ${(props) =>
    props.large &&
    css`
      width: 290px;
      height: 180px;
    `}
`;

const CardHeader = styled.div``;

const CardChip = styled.div`
  width: 45px;
  height: 25px;
  margin: 8px;
  border-radius: 10%;
  background-color: #cbba64;
`;

const CardBottom = styled.div`
  width: 100%;
`;

const CardNumber = styled.div``;

const CardInfo = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const CardParagraph = styled.p<CardParagraphProps>`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: ${(props) => props.width}px;
`;

export {
  CardBox,
  CardHeader,
  CardChip,
  CardInfo,
  CardBottom,
  CardNumber,
  CardParagraph,
};
