import { forwardRef } from "react";
import styled from "styled-components";

interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  error?: { isValid: boolean; errorMessage: string };
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  $width: string;
  $textPosition: string;
}

const Input = forwardRef(
  (
    {
      label,
      placeholder,
      type,
      handleInput,
      error = { isValid: true, errorMessage: "" },
      $width,
      $textPosition,
    }: InputProps,
    ref: React.ForwardedRef<HTMLInputElement>
  ) => {
    return (
      <Column>
        <InputField
          placeholder={placeholder}
          id={label}
          name={label}
          onInput={handleInput}
          type={type}
          $width={$width}
          $textPosition={$textPosition}
          ref={ref}
        />
        <ErrorMessage>{error.isValid ? "" : error.errorMessage}</ErrorMessage>
      </Column>
    );
  }
);

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input<{
  $textPosition: string;
  $width: string;
}>`
  height: 45px;
  width: ${(props) => props.$width};
  border-radius: 7px;
  text-align: ${(props) => props.$textPosition};

  font-size: 16px;
  font-weight: 500;

  padding: 0 10px;

  background-color: #ecebf1;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  margin-top: 1px;
  height: 15px;
  color: red;

  font-size: 11px;
`;

export default Input;
