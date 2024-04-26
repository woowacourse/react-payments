import styled from 'styled-components';

export interface ButtonProps extends React.ComponentPropsWithRef<'button'> {}

export const Button = styled.button`
  width: 100%;
  background-color: #333333;
  padding: 20px 0 20px 0;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 12px;
  cursor: pointer;
`;
