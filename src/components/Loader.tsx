import { ReactNode } from "react";
import styled, { CSSProp } from "styled-components";

interface Props {
  children: ReactNode;
  message: string;
  messageStyle: CSSProp;
}

const Loader = ({ children, message, messageStyle }: Props) => {
  return (
    <>
      {children}
      <S.Message messageStyle={messageStyle}>{message}</S.Message>
    </>
  );
};

const S = {
  Message: styled.p<{ messageStyle: CSSProp }>`
    ${(props) => props.messageStyle}
  `,
};

export default Loader;
