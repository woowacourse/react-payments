import {ComponentProps} from 'react';
import styled from 'styled-components';

type Props = {
  bgColor?: string;
} & ComponentProps<'button'>;

const Button = ({children, bgColor = '#333', ...props}: Props) => {
  return (
    <Container bgColor={bgColor} {...props}>
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button<{bgColor: string}>`
  background-color: ${(props) => props.bgColor};
  border: none;
  width: 100%;
  color: white;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;
