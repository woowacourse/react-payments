import styled from 'styled-components';

export const CardNumberInputBox = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;

  background-color: #e5e5e5;
  border-radius: 10px;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 60%;
  min-width: 300px;
`;

export const CardNumberDivision = styled.span`
  width: 7px;

  font-size: 17px;
  font-weight: 900;
`;

export const ErrorMessage = styled.p`
  position: absolute;
  bottom: -20px;
  color: red;
`;
