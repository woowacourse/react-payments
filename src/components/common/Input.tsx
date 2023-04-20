import styled from "styled-components";

export interface InputProps {
  label: string;
  width: string;
  placeholder: string;
  textPosition: string;
  type: string;
  error: { isValid: boolean; errorMessage: string };
  handleInput: (e: any) => void;
  handleChange: (e: any) => void;
}

export const Input = ({
  label,
  width,
  placeholder,
  textPosition,
  type,
  handleInput,
  handleChange,
  error,
}: InputProps) => {
  const { isValid, errorMessage } = error;
  return (
    <Colum>
      <InputField
        placeholder={placeholder}
        id={label}
        name={label}
        width={width}
        onInput={handleInput}
        onBlur={handleChange}
        textPosition={textPosition}
        type={type}
      />
      {<ErrorMessage>{!isValid ? errorMessage : ""}</ErrorMessage>}
    </Colum>
  );
};

const Colum = styled.div`
  display: flex;
  flex-direction: column;
`;

const InputField = styled.input<{ textPosition: string; width: string }>`
  height: 45px;
  width: ${(props) => props.width};
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

  &::placeholder {
    font-size: 14px;
  }
`;

const ErrorMessage = styled.div`
  height: 15px;
  color: red;
`;
