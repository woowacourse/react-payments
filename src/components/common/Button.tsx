import styled from "styled-components";

const Button = styled.button<{ isActive: boolean }>`
  visibility: ${({ isActive }) => (isActive ? "visible" : "hidden")};

  padding: 10px 20px;

  background-color: transparent;
  border: none;

  font-weight: 700;
  font-size: 14px;

  cursor: pointer;
`;

export default Button;
