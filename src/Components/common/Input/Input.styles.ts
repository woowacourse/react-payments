import styled from "@emotion/styled";

interface InputWrapperProps {
  size: "small" | "medium" | "large";
  isValid: boolean;
}

const getInputWidth = (size: "small" | "medium" | "large") => {
  switch (size) {
    case "small":
      return "100px";
    case "medium":
      return "200px";
    case "large":
      return "300px";
    default:
      return "200px";
  }
};

export const InputWrapper = styled.div<InputWrapperProps>`
  input {
    width: ${({ size }) => getInputWidth(size)};
    padding: 8px;
    border: 1px solid ${({ isValid }) => (isValid ? "#ccc" : "red")};
    border-radius: 4px;
    font-size: 16px;
  }

  input:focus {
    outline: none;
  }
`;
