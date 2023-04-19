import styled from "styled-components";

export type InputTitle =
  | "cardNumber"
  | "expiracy"
  | "owner"
  | "cvc"
  | "password";

export interface InputContainerProps {
  kind: InputTitle;
  children: JSX.Element;
  inputLength?: string;
}

const INPUT_INFO = {
  cardNumber: {
    title: "카드 번호",
    width: "318px",
  },
  expiracy: {
    title: "만료일",
    width: "137px",
  },
  owner: {
    title: "카드 소유자 이름(선택)",
    width: "318px",
  },
  cvc: {
    title: "보안 코드(CVC/CVV)",
    width: "84px",
  },
  password: {
    title: "카드 비밀번호",
    width: "174px",
  },
};

const Wrapper = styled.div<{ width: string }>`
  display: flex;
  flex-direction: column;
  max-width: 318px;
  width: ${({ width }) => `${width}`};
`;

const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 3px;
  width: 318px;
  font-size: 12px;
  line-height: 14px;
  letter-spacing: -0.085em;
  color: #525252;
`;

const InputLengthText = styled.span`
  letter-spacing: 1px;
`;

export default function InputField({
  kind,
  children,
  inputLength,
}: InputContainerProps) {
  return (
    <Wrapper width={INPUT_INFO[kind].width}>
      <Label htmlFor={kind}>
        <span>{INPUT_INFO[kind].title}</span>
        <InputLengthText>{inputLength}</InputLengthText>
      </Label>

      {children}
    </Wrapper>
  );
}
