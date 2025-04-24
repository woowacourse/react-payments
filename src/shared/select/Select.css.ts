import styled from "styled-components";

export const StyledSelect = styled.select<{ width?: string }>`
  width: ${(props) => props.width || "100%"};
  border-radius: 2px;
  border: 1.015px solid #acacac;
  padding: 16px;

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

export const StyledOption = styled.option<{ isDefault?: boolean }>`
  color: ${(props) => (props.isDefault ? "red" : "black")};
  font-size: 14px;
`;
