import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.color || "#04C09E"};
  cursor: pointer;
`;

export { ButtonWrapper };
