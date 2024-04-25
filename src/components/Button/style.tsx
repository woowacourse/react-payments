import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  height: 100%;

  border: none;
  background-color: ${(props) => props.theme.color.darkGray};
  ${(props) => props.theme.typography.button};
  color: ${(props) => props.theme.color.white};

  cursor: pointer;
`;
