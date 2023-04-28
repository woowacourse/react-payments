import styled from "styled-components";

export interface InputProps {
  label: string;
  placeholder: string;
  type: string;
  ref?: React.RefObject<HTMLInputElement>;
  error?: { isValid: boolean; errorMessage: string };
  handleInput?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  $width: string;
  $textPosition: string;
}

export const Input = ({
  label,
  placeholder,
  type,
  ref,
  handleInput,
  error = { isValid: true, errorMessage: "" },
  $width,
  $textPosition,
}: InputProps) => {
  return (
    <Column>
      <InputField
        placeholder={placeholder}
        id={label}
        name={label}
        onInput={handleInput}
        type={type}
        ref={ref}
        $width={$width}
        $textPosition={$textPosition}
      />
      <ErrorMessage>{error.isValid ? "" : error.errorMessage}</ErrorMessage>
    </Column>
  );
};

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
