import styled from 'styled-components';

export const ExpirationDateInputBox = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const LabelHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;

  span {
    font-size: 13px;
  }
`;

export const InputContainer = styled.div`
  display: inline-block;
  background-color: #e5e5e5;
  border-radius: 10px;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  color: red;
`;
