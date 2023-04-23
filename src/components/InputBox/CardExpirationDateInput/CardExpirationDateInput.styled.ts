import styled from 'styled-components';

export const ExpirationDateInputBox = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  background-color: #e5e5e5;
  border-radius: 10px;
  width: 40%;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 80px;
`;

export const ExpirationDateDivision = styled.span`
  opacity: 0.6;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  color: red;
`;
