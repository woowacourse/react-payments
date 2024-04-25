import React, { PropsWithChildren } from "react";
import S from "./style";

export type ButtonBorderType = "square" | "round";

export type ButtonPosition = "bottom";

type BasicButtonProps = {
  padding?: number;
  fontSize: number;
  width?: number;
  height: number;
  borderType: ButtonBorderType;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textColor?: string;
  disabled: boolean;
  backgroundColor: string;
  position: ButtonPosition;
};

const BasicButton = ({
  children,
  width,
  height,
  disabled,
  backgroundColor,
  borderType,
  position,
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return (
    <S.ButtonWrapper
      width={width}
      height={height}
      disabled={disabled}
      $backgroundColor={backgroundColor}
      $borderType={borderType}
      position={position}
      {...props}
    >
      {children}
    </S.ButtonWrapper>
  );
};
export default BasicButton;
