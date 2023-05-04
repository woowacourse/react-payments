import styled from "styled-components";

const Button = styled.button`
  width: 100%;
  height: 45px;

  background-color: #383838;
  border: none;
  border-radius: 7px;

  font-weight: 700;
  font-size: 14px;
  color: white;

  cursor: pointer;

  transition: 0.3s;

  &:disabled {
    background-color: #d1d1d1;
    cursor: not-allowed;
  }

  &:hover:enabled {
    opacity: 0.8;
  }
`;

export default Button;
