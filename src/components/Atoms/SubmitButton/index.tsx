import styled from 'styled-components';
import { ReactNode } from 'react';

interface ButtonProps {
  width: string;
  height: string;
  hidden: boolean;
  children: ReactNode;
}

export default function SubmitButton({ width, height, hidden, children }: ButtonProps) {
  return (
    <Button type="submit" width={width} height={height} hidden={hidden}>
      {children}
    </Button>
  );
}

SubmitButton.defaultProps = {
  width: '51px',
  height: '34px',
  hidden: false,
};

const Button = styled.button<ButtonProps>`
  display: ${props => (props.hidden ? 'none' : 'block')};
  width: ${props => props.width};
  height: ${props => props.height};
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  text-align: right;
  color: #04c09e;
  background-color: white;
  cursor: pointer;

  &:hover {
    color: #039f82;
  }
`;
