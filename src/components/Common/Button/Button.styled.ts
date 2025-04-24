import styled from "styled-components";

export const ButtonCSS = styled.button`
  width: 100%;
  height: 55px;
  background-color: #333333;
  border-radius: 10px;
  color: #ffffff;
  cursor: pointer;
  font-size: 18px;
  transition: all 0.2s ease-out;

  &:hover {
    transform: scale(1.01);
  }
`;
