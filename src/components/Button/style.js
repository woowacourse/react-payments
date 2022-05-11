import styled from "styled-components";

const ButtonWrapper = styled.button`
  background-color: transparent;
  border: none;
  color: ${(props) => props.color || props.theme.colors.MINT};
  cursor: pointer;
`;

export { ButtonWrapper };
