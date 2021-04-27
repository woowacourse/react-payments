import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 29%;
  background-color: #ecebf1;
  border-radius: 0.4rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input.attrs({
  type: 'password',
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
  color: #04c09e;
`;

const HelpSign = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 0.7rem;
  border: 0.08rem solid #bababa;
  border-radius: 50%;
  color: #969696;
  font-weight: bold;
  font-size: 1.15rem;
`;

export { Container, Input, HelpSign };
