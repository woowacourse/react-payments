import styled from "styled-components";
import type { BasicButtonProps } from "./BasicButton"; //비활성화시 색상
import { FlexCenter } from "@/style/common";

const ButtonWrapper = styled.button<BasicButtonProps>`
  width: ${({ width }) => width}px;
  height: ${({ height }) => height}px;
  color: ${({ textColor }) => (textColor ? textColor : "white")};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: ${({ borderRadius, width }) =>
    borderRadius ? borderRadius : width / 2}px;
  font-size: ${({ fontSize }) => fontSize}px;
  ${FlexCenter};

  :disabled {
    background-color: grey;
    color: white;
  }
`;

const S = {
  ButtonWrapper,
};

export default S;
