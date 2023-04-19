import styled from "styled-components";

export interface InputProps {
  label: string;
  width: string;
  placeholder: string;
  type: string;
  position: string;
  event: (e: any) => void;
}

export const Input = ({
  label,
  width,
  placeholder,
  type,
  position: textPosition,
  event,
}: InputProps) => {
  return (
    <>
      <InputField
        placeholder={placeholder}
        type={type}
        id={label}
        name={label}
        width={width}
        onInput={event}
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
`;
