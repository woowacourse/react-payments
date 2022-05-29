import styled from "styled-components";

interface IInputProps {
  name:
    | "securityCode"
    | "password"
    | "cardNumber"
    | "holderName"
    | "cardAlias"
    | "expireDate";
  className:
    | "securityCode"
    | "password"
    | "cardNumber"
    | "holderName"
    | "cardAlias"
    | "expireDate";
  type: "password" | "number" | "text";
  placeholder: string;
  width?: string;
  maxLength?: number;
  textAlign?: string;
  borderBottom?: string;
  autoFocus?: boolean;
  required: boolean;
  onChange: () => void;
  isComplete: boolean;
}

export const StyledInput = styled.input`
  // 텍스트 선택 커서 색상 설정
  caret-color: #000000;
  color: ${(props: IInputProps) => (props.isComplete ? "#04c09e" : "#525252")};
  font-size: 18px;
  font-weight: 600;
  line-height: 21px;
  text-align: ${(props: IInputProps) => props.textAlign};

  background-color: transparent;
  width: ${(props: IInputProps) => props.width};

  outline: none;
  border: none;
  border-bottom: ${(props: IInputProps) => props.borderBottom};

  /* 숫자 입력란 화살표 숨김 */
  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type="number"] {
    -moz-appearance: textfield;
  }
  /* ************************** */

  &::placeholder {
    font-size: 14px;
    color: #acacac;
  }
`;

export default function Input(props: IInputProps) {
  return <StyledInput {...props} />;
}

Input.defaultProps = {
  name: "default name",
  type: "text",
  width: "70px",
  textAlign: "center",
  borderBottom: "none",
};
