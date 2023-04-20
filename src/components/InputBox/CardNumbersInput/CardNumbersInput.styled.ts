import styled from 'styled-components';

export const CardNumberInputBox = styled.div`
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
  display: flex;
  justify-content: center;

  background-color: red;
  background-color: #e5e5e5;
  border-radius: 10px;
`;

export const Inputs = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 60%;
  min-width: 280px;
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
