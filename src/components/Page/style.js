import styled from 'styled-components';
import { FlexCenter } from '../../utils/style/FlexCenter'

// width: 23.4rem;
const Container = styled(FlexCenter)`
  position: relative;
  width: 25.9rem;
  height: 46rem;
  flex-direction: column;
  background-color: white;
  border-radius: 1rem;
`;

const Button = styled.button`
  color: black;
  background: transparent;
  border: none;
  font-size: 1.1rem;
  font-weight: bold;
  outline: none;
`;

const Title = styled.h1`
  font-weight: 400;
  font-size: 1rem;
  height: 100%;
  display: flex;
  margin-left: 0.8rem;
  align-items: center;
  text-align: center;
`;

export { Container, Button, Title };
