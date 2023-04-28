import styled from 'styled-components';

export const Button = styled.button<{ textColor: boolean; cursor: boolean }>`
  color: ${(props) => (props.textColor ? '#000000' : '#969696')};
  cursor: ${(props) => (props.cursor ? 'pointer' : 'auto')};
`;
