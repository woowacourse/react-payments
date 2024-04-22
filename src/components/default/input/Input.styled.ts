import styled from "styled-components";

interface InputProps {
  isError?: boolean;
}

export const Input = styled.input<InputProps>`
  width: 100%;
  height: 16px;
  padding: 8px;
  border-radius: 4px;
  outline: none;
  border: 1px solid #acacac;

  &:focus {
    border: 1px solid ${(props) => (props.isError ? "#FF3D3D" : "#000000")};
  }

  &::placeholder {
    color: #acacac;
  }

  ${(props) =>
    props.isError &&
    `
    border-color: #FF3D3D;
  `}
`;
