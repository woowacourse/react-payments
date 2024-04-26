import styled from 'styled-components';

export const StyledButton = styled.button`
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 5.2rem;

  background-color: ${(props) => props.theme.color.darkGray};

  ${(props) => props.theme.typography.button}
  color: ${(props) => props.theme.color.white};

  cursor: pointer;
`;
