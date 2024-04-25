import { styled, css } from "styled-components";

const CreditCard = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: #d5d5d5;
  margin-top: 65px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.COLOR["grey-2"]};
`;

const CVCInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  display: flex;
  justify-content: center;
  width: 170px;
  margin-top: 10px;
  gap: 10px;
`;

const Input = styled.input<{ $center?: boolean }>`
  width: 50px;
  margin-right: 16px;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
  background-color: transparent;
  color: white;
`;

const S = { CreditCard, CVCInfo, Input };

export default S;
