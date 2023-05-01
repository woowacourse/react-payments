import styled from 'styled-components';

export const Root = styled.div`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;

  padding-top: 30%;
  color: ${({ theme }) => theme.colors.gray3};
`;

export const CardSection = styled.section`
  padding: 20% 0;
`;

export const Title = styled.h2`
  color: black;
`;

export const Form = styled.form`
  margin-top: 100px;
`;

export const Alias = styled.input`
  width: 70vw;
  min-width: 150px;
  max-width: 250px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid black;
  background: transparent;
  text-align: center;
  outline: none;
`;

export const ConfirmBtn = styled.button`
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
