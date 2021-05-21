import styled from 'styled-components';

const Container = styled.div`
  height: 100%;
  width: 100%;
  background-color: #ecebf1;
  border-radius: 0.4rem;
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Input = styled.input.attrs({
  type: 'text',
  maxLength: 15,
})`
  width: 92%;
  height: 45%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  font-size: 1.06rem;
  // color: #04c09e;
  color: #525252;
  font-weight: 500;
  outline: none;
`;

export { Container, Input };
