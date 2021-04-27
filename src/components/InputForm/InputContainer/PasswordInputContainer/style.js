import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 65%;
  background: transparent;
  border-radius: 0.4rem;
  margin: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Input = styled.input.attrs({
  type: 'password',
})`
  width: 22%;
  height: 100%;
  border-radius: 0.4rem;
  text-align: center;
  font-size: 1.8rem;
  color: #04c09e;
  margin: 0;
  padding: 0;
  background: #ecebf1;
  border: none;
`;

const BilndInput = styled.input.attrs({
  type: 'password',
  disabled: 'disabled',
})`
  width: 22%;
  height: 45%;
  text-align: center;
  font-size: 1.4rem;
  color: #04c09e;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
`;

export { Container, Input, BilndInput };
