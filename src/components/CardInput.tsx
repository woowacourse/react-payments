import styled from "styled-components";
import { CARD_INPUT_LENGTH } from "../constants";

interface CardInputType extends React.InputHTMLAttributes<HTMLInputElement> {
  id:
    | "cardNumber"
    | "expiredDate"
    | "ownerName"
    | "cvc"
    | "password1"
    | "password2";
  width: string;
  isSecured?: boolean;
  isAutoFocus?: boolean;
  isRequired?: boolean;
}

const CardInput = (props: CardInputType) => {
  return (
    <CardInputWrapper
      {...props}
      type={props.isSecured ? "password" : "text"}
      autoFocus={props.isAutoFocus}
      required={props.isRequired}
      minLength={CARD_INPUT_LENGTH[props.id]}
      maxLength={CARD_INPUT_LENGTH[props.id]}
    />
  );
};

const CardInputWrapper = styled.input`
  width: ${(props) => props.width};
  height: 45px;

  padding: 0 10px;

  text-align: center;
  font-size: ${(props) => (props.type === "password" ? "32px" : "19px")};
  color: black;

  background: #ecebf1;
  border-radius: 7px;
  border: none;

  &:focus {
    outline-color: #525252;
  }

  &::placeholder {
    font-size: 15px;
  }
`;

export default CardInput;
