import styled from "styled-components";

export interface InputProps {
  label: string;
  width: string;
  placeholder: string;
  textPosition: string;
  handleInput: (e: any) => void;
}

export const Input = ({
  label,
  width,
  placeholder,
  textPosition,
  handleInput,
}: InputProps) => {
  return (
    <>
      <InputField
        placeholder={placeholder}
        id={label}
        name={label}
        width={width}
        onInput={handleInput}
        textPosition={textPosition}
      />
    </>
  );
};

const InputField = styled.input<{ textPosition: string; width: string }>`
  height: 45px;
  width: ${(props) => props.width};
  background-color: #ecebf1;
  border-radius: 7px;
  text-align: ${(props) => props.textPosition};

  font-size: 16px;
  font-weight: 500;

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;
