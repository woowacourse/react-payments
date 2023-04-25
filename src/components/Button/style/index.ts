import styled from 'styled-components';

type ButtonType = {
  disabled: boolean;
};

export const Button = styled.button<ButtonType>`
  background-color: transparent;
  border: none;
  font-weight: 700;
  cursor: ${(props) => (props.disabled ? 'pointer' : 'not-allowed')};
`;

export default {};
