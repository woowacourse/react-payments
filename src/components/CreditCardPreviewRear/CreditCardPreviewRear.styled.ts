import { styled } from "styled-components";

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
  justify-content: right;
  background: #cbba64;
  height: 24px;
  position: relative;
  margin-top: 84px;
  width: 100%;
`;

const Input = styled.div<{ $center?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  flex-shrink: 1;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
  background-color: transparent;
  color: white;
`;

const S = { CreditCard, CVCInfo, Input };

export default S;
