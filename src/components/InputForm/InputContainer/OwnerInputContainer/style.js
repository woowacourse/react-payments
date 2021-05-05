import styled from 'styled-components';
import { FlexCenter } from '../../../../utils/style/FlexCenter';

const Container = styled(FlexCenter)`
  height: 100%;
  width: 100%;
  background-color: #ecebf1;
  border-radius: 0.4rem;
  margin: 0;
`;

const Input = styled.input`
  width: 92%;
  height: 45%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 1.06rem;
  color: #525252;
  font-weight: 500;
  outline: none;
`;

export { Container, Input };
