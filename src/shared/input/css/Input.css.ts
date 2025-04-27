import styled from "styled-components";

export const StyledInput = styled.input.withConfig({
  shouldForwardProp: (prop) => prop !== "isError",
})<{ width?: string; isError: boolean }>`
  width: ${(props) => props.width || "100%"};
  border-radius: 2px;
  border: 1.015px solid ${(props) => (props.isError ? "red" : "#acacac")};
  display: flex;
  height: 32px;
  padding: 8px;
  align-items: center;
  gap: 8px;
  flex: 1 0 0;

  &::-webkit-outer-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &:focus {
    outline: none;
  }
`;
