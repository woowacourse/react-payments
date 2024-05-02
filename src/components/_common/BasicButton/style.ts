import styled from "styled-components";
import { flexCenter } from "@/style/common";
import { ButtonBorderType, ButtonPosition } from "./BasicButton";

export type BasicButtonProps = {
  padding?: number;
  width?: number;
  height: number;
  borderRadius?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textColor?: string;
  disabled: boolean;
  $backgroundColor: string;
  $borderType: ButtonBorderType;
  position: ButtonPosition;
};

const ButtonWrapper = styled.button<BasicButtonProps>`
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  height: ${({ height }) => height}px;
  color: ${({ textColor }) => (textColor ? textColor : "white")};
  background-color: ${({ $backgroundColor }) => $backgroundColor};
  font-size: 15px;
  ${flexCenter};
  border-radius: ${({ $borderType }) =>
    $borderType === "round" ? "5px" : "0"};
  :disabled {
    background-color: grey;
    color: white;
  }
  position: ${({ position }) => position === "bottom" && "absolute"};
  bottom: ${({ position }) => position === "bottom" && "0"};
`;

const S = {
  ButtonWrapper,
};

export default S;
