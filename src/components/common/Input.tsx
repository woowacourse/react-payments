import { HTMLAttributes } from "react";
import styled from "styled-components";

export interface InputProps extends HTMLAttributes<HTMLInputElement> {
  label: string;
  width: string;
  textPosition: string;
  type: string;
  error?: { isValid: boolean; errorMessage: string };
  handleInput: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChange: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export const Input = ({
  label,
  width,
  placeholder = "",
  textPosition,
  type,
  error = { isValid: true, errorMessage: "" },
  handleInput,
  handleChange,
}: InputProps) => {
  const { isValid, errorMessage } = error;

  return (
    <Colum width={width}>
      <InputField
        placeholder={placeholder}
        id={label}
        name={label}
        onInput={handleInput}
        onBlur={handleChange}
        textPosition={textPosition}
        type={type}
      />
      {<ErrorMessage>{!isValid ? errorMessage : ""}</ErrorMessage>}
    </Colum>
  );
};

const Colum = styled.div<{ width: string }>`
  width: ${(props) => props.width};
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input<{ textPosition: string }>`
  height: 45px;
  background-color: #ecebf1;
  border-radius: 7px;
  text-align: ${(props) => props.textPosition};

  font-size: 16px;
  font-weight: 500;

  padding: 0 10px;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type="password"]::-ms-reveal {
    display: none;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  width: max-content;
  height: 15px;
  color: red;
`;
