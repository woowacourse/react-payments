import React, { PropsWithChildren } from "react";
import S from "./style";

export type BasicButtonProps = {
  padding?: number;
  fontSize: number;
  width: number;
  height: number;
  borderRadius?: number;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  textColor?: string;
  disabled: boolean;
  backgroundColor: string;
};

const BasicButton = ({
  children,
  width,
  height,
  disabled,
  ...props
}: PropsWithChildren<BasicButtonProps>) => {
  return (
    <S.ButtonWrapper
      width={width}
      height={height}
      disabled={disabled}
      {...props}
    >
      {children}
    </S.ButtonWrapper>
  );
};
export default BasicButton;
