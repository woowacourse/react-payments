import {ComponentProps} from 'react';
import styled from 'styled-components';

type Props = ComponentProps<'button'>;

const Button = ({children, onClick, style}: Props) => {
  return (
    <Container onClick={onClick} style={style}>
      {children}
    </Container>
  );
};

export default Button;

const Container = styled.button`
  background-color: #333;
  width: 100%;
  color: white;
  font-weight: bold;
  padding: 20px;
  text-align: center;
  border-radius: 10px;
  cursor: pointer;
`;
