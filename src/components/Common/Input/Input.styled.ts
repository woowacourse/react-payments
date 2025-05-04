import styled, { css } from "styled-components";

export const InputStyles = styled.input<{ $isError: boolean }>`
  width: 100%;
  height: 40px;
  border-radius: 4px;
  border: 1.01px solid #acacac;
  padding: 0 8px;

  ${({ $isError }) =>
    $isError &&
    css`
      border-color: #ff3d3d;
      &:focus {
        outline: none;
      }
    `}
`;
