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

const Input = styled.input`
  width: 22%;
  height: 100%;
  border-radius: 0.4rem;
  text-align: center;
  font-size: 1.8rem;
  margin: 0;
  color: #525252;
  padding: 0;
  background: #ecebf1;
  outline: none;
  border: ${(props) => (props.isValid ? '0.01rem solid transparent' : '0.01rem solid #f24156')};
`;

const BilndInput = styled.input`
  width: 22%;
  height: 45%;
  text-align: center;
  font-size: 1.4rem;
  // color: #04c09e;
  color: #525252;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
`;

export { Container, Input, BilndInput };
