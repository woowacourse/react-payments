/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const inputStyle = css`
  width: 315px;
  height: 32px;
  border: solid 1.01px #acacac;
  border-radius: 2px;

  &::placeholder {
    font-family: Inter;
    font-weight: 400;
    font-size: 11px;
    line-height: 14.88px;
    letter-spacing: 0%;
    vertical-align: middle;
    color: #acacac;
  }
`;

type InputProps = {
  placeholder: string;
  maxLength: number;
  cardNumber: string;
  setCardNumber: (cardNumber: string) => void;
};

const Input = ({ placeholder, maxLength, cardNumber, setCardNumber }: InputProps) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCardNumber(e.target.value);
  };
  return (
    <input css={inputStyle} onChange={onChange} value={cardNumber} placeholder={placeholder} maxLength={maxLength} />
  );
};

export default Input;
