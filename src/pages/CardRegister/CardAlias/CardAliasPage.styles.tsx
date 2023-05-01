import styled from 'styled-components';

export const Root = styled.main`
  position: relative;
  width: 100%;
  height: 100vh;
  padding-top: 15vh;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Form = styled.form`
  margin-top: 30px;
  width: 80%;
`;

export const SubmitButton = styled.button`
  position: absolute;
  right: 20px;
  bottom: 20px;
  width: 50px;
  height: 50px;
  background: none;
  border: none;
  font-weight: 700;
  font-size: 16px;
`;
