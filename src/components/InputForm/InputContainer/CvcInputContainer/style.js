import styled from 'styled-components';
import cvcImg from '../../../assets/cvc.png';
import { FlexCenter } from '../../../../utils/style/FlexCenter';

const Container = styled(FlexCenter)`
  height: 100%;
  width: 29%;
  background-color: #ecebf1;
  border-radius: 0.4rem;
  margin: 0;
  border: ${(props) => (props.isValid ? '0.01rem solid transparent' : '0.01rem solid #f24156')};
`;

const Input = styled.input.attrs({
  type: 'password',
  maxLength: 3,
})`
  width: 50%;
  height: 45%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 1.7rem;
  letter-spacing: 0.3rem;
  color: #525252;
  outline: none;
`;

const HelpSign = styled(FlexCenter)`
  width: 1.6rem;
  height: 1.6rem;
  margin-left: 0.7rem;
  border: 0.08rem solid #bababa;
  border-radius: 50%;
  color: #969696;
  font-weight: bold;
  font-size: 1.15rem;

  &:hover {
    position: relative;
  }

  &:hover:after {
    content: '';
    background: no-repeat center url(${cvcImg});
    background-size: 100%;
    display: inline-block;

    position: absolute;
    transform: translate(65%, 0%);
    width: 10rem;
    height: 6.5rem;
    padding: 0.5rem;
    border-radius: 0.5rem;

    background-color: rgb(200, 200, 200);

    z-index: 10;
  }

  &:hover:before {
    content: '';
    position: absolute;
    top: 50%;
    right: -55%;
    margin-top: -0.625rem;
    border-width: 0.625rem;
    border-style: solid;
    border-color: transparent rgb(200, 200, 200) transparent transparent;
  }
`;

export { Container, Input, HelpSign };
