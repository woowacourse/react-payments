import styled from "styled-components";

export const ButtonCSS = styled.button`
  height: 52px;

  font-weight: 700;
  font-size: 16px;

  background-color: black;
  color: white;

  cursor: pointer;

  &.success {
    width: 100%;
  }

  &.home {
    position: fixed;
    width: 30%;
    bottom: 0;
  }
`;
