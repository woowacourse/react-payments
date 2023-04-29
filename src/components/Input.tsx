import { forwardRef, InputHTMLAttributes, ChangeEventHandler } from "react";
import styled, { CSSProp, css } from "styled-components";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  inputStyle: CSSProp;
  onChange?: ChangeEventHandler<HTMLInputElement>;
}

type Ref = HTMLInputElement;

export const Input = forwardRef<Ref, InputProps>(({ ...props }, ref) => {
  return <S.Input ref={ref} {...props} />;
});

const S = {
  Input: styled.input<{ inputStyle: CSSProp }>`
    background: var(--input-background);
    height: 48px;
    font-size: 14px;
    text-align: center;
    letter-spacing: 1px;

    ${(props) => props.inputStyle}
  `,
};

export const CommonInputStyle = css`
  width: 32%;
  margin: 0 4%;
`;

export const NameInputStyle = css`
  display: block;
  width: 100%;
  margin: 10px 0 36px;
  padding: 0 8%;
  border-radius: 8px;
`;

export const PasswordInputStyle = css`
  width: 12%;
  margin: 0 2.2% 0 0;
  border-radius: 8px;
`;

export const SecurityCodeInputStyle = css`
  display: block;
  width: 24%;
  margin: 0;
  padding: 0 4%;
  border-radius: 8px;
`;

export const CardNickname = css`
  display: block;
  width: 100%;
  height: 28px;
  margin-top: 72px;
  border-bottom: 1px solid var(--darken-color);
  background: transparent;
`;

export default Input;
