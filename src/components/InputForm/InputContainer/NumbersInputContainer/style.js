import styled from 'styled-components';
import { FlexCenter } from '../../../../utils/style/FlexCenter';

const Container = styled(FlexCenter)`
  height: 100%;
  width: 100%;
  background-color: #ecebf1;
  border-radius: 0.4rem;
  margin: 0;
  font-size: 1.2rem;
  font-weight: bold;
  text-align: center;
  color: #737373;
  border: ${(props) => (props.isValid ? '0.01rem solid transparent' : '0.01rem solid #f24156')};
`;

const Input = styled.input.attrs({ type: 'text', maxLength: 4 })`
  width: 18%;
  height: 45%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 1.1rem;
  color: #525252;
  outline: none;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
`;

const BlindInput = styled.input.attrs({
  type: 'password',
  maxLength: 4,
})`
  width: 18%;
  height: 45%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 1.8rem;
  color: ${(props) => (props.isValid ? '#04c09e' : '#525252')};
  outline: none;
`;

export { Container, Input, BlindInput };
