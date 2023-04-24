import styled from 'styled-components';

export type InputTitle =
  | 'cardNumber'
  | 'expiracy'
  | 'owner'
  | 'cvc'
  | 'password';

export interface InputContainerProps {
  kind: InputTitle;
  children: JSX.Element;
  inputLength?: string;
}

const INPUT_INFO = {
  cardNumber: {
    title: '카드 번호',
  },
  expiracy: {
    title: '만료일',
  },
  owner: {
    title: '카드 소유자 이름(선택)',
  },
  cvc: {
    title: '보안 코드(CVC/CVV)',
  },
  password: {
    title: '카드 비밀번호',
  },
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 318px;
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
    <Wrapper>
      <Label htmlFor={kind}>
        <span>{INPUT_INFO[kind].title}</span>
        <InputLengthText>{inputLength}</InputLengthText>
      </Label>
      {children}
    </Wrapper>
  );
}
