import styled from "@emotion/styled";

interface InputProps {
  state?: "default" | "error";
  fullWidth?: boolean;
}

const Input = styled.input<InputProps>`
  width: ${({ fullWidth }) => (fullWidth ? "100%" : "auto")};
  border: 1px solid
    ${({ state }) => (state === "error" ? "#FF3D3D" : "#acacac")};
  border-radius: 2px;
  &::placeholder {
    color: #acacac;
  }
  padding: 8px;
  &:focus {
    outline: none;
    border: 1px solid #000000;
  }
`;

export default Input;
