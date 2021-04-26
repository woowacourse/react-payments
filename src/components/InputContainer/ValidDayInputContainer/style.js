import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 45%;
  background-color: #ecebf1;
  border-radius: 0.4rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 500;
  font-size: 1.2rem;
  color: #737373;
`;

const Input = styled.input`
  width: 23%;
  height: 45%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  text-align: center;
  font-size: 1.15rem;
  color: #04c09e;
  font-weight: 500;
`;

export { Container, Input };
