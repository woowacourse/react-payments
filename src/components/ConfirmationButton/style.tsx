import styled from 'styled-components';

export const StyledButton = styled.button<{ $submit: boolean }>`
  position: ${(props) => (props.$submit ? 'absolute' : 'static')};
  left: 0;
  bottom: 0;

  width: 100%;
  height: 5.2rem;
  ${(props) => (props.$submit ? '' : 'border-radius: 5px;')};

  background-color: ${(props) => props.theme.color.darkGray};

  ${(props) => props.theme.typography.button}
  color: ${(props) => props.theme.color.white};

  cursor: pointer;
`;
