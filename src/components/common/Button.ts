import styled from "styled-components";

export const Button = styled.button<{ isVisible: boolean }>`
  position: absolute;

  right: 24px;
  bottom: 24px;

  visibility: ${({ isVisible }) => (isVisible ? "visible" : "hidden")};

  background-color: transparent;
  border: none;

  font-size: 14px;
  font-weight: 700;

  cursor: pointer;
`;
