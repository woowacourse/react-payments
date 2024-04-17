import { styled } from "styled-components";

const CardWrapper = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: #333333;
  margin-top: 65px;
`;

const CreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
`;

const CardNumbers = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 10px;
  width: 100%;
`;

const Input = styled.input`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
  text-align: center;
  background-color: transparent;
  color: white;
  width: 38px;
`;

const S = { CardWrapper, CreditCardInfo, CardNumbers, Input };

export default S;
