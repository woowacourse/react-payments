import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  position: relative;
`;

export const ButtonContainer = styled.div`
  position: absolute;
  right: 20px;
  bottom: 10px;
`;

export const CardAliasInput = styled.input`
  margin-top: 25px;
  font-size: 18px;
  border: none;
  border-bottom: 1px solid black;
  text-align: center;
  &:focus {
    outline: none;
    border-bottom: 1px solid blue;
  }
`;
