import styled from "styled-components";

interface InputLabelProps {
  name: string;
  text: string;
}

const InputLabel = ({ name, text }: InputLabelProps) => {
  return <Label htmlFor={name}>{text}</Label>;
};

const Label = styled.label`
  font-size: 12px;
  font-weight: 600;
  margin-bottom: 5px;
`;

export default InputLabel;
