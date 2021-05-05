import styled from 'styled-components';
import { FlexCenter } from '../../../../utils/style/FlexCenter';

const Container = styled(FlexCenter)`
  height: 2rem;
  width: 15.1rem;
  border-width: 0 0 0.13rem 0;
  border-style: solid;
  border-color: #7a7a7a;
  margin: 0;
`;

const Input = styled.input`
  width: 95%;
  margin: 0;
  padding: 0;
  padding-bottom: 0.5rem;
  font-size: 1.18rem;
  font-weight: 400;
  background: transparent;
  border: none;
  outline: none;
  text-align: center;
  color: #454545;
`;

export { Container, Input };
