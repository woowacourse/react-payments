import styled from 'styled-components';

export const Button = styled.button<{
  textColor: boolean;
  pointCursor: boolean;
}>`
  color: ${(props) => (props.textColor ? '#000000' : '#969696')};
  cursor: ${(props) => (props.pointCursor ? 'pointer' : 'auto')};
`;
