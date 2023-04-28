import styled from 'styled-components';

export const Root = styled.main`
  position: relative;
  width: 100%;
  min-height: 100vh;
  padding-top: 45px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CardSection = styled.section``;

export const InfoSection = styled.section`
  width: 100%;

  flex-grow: 1;
`;

export const RegisterForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;

  width: 100%;
  height: 100%;

  padding: 4rem 0;
`;

export const CompleteButton = styled.button`
  position: absolute;
  bottom: 20px;
  right: 0;
  width: 50px;

  text-align: end;
  padding: 0;
  border: none;
  font-weight: 700;
  font-size: 14px;
  background: white;
`;
