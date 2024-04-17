import { styled, css } from "styled-components";

const CardWrapper = styled.div`
  width: 212px;
  height: 132px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.COLOR["grey-3"]};
  margin-top: 65px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 4px 4px 4px ${({ theme }) => theme.COLOR["grey-2"]};
`;

const CreditCardInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  display: flex;
  justify-content: center;
  width: 170px;
  margin-top: 10px;
  gap: 10px;
`;

const CardNumbers = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 3px;
  width: 170px;
`;

const FlexBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 8px;
`;

const LogoBox = styled.div<{ color: string }>`
  width: 36px;
  height: 22px;
  border-radius: 1.5px;
  display: flex;
  background-color: ${({ color }) => color};
  justify-content: center;
  align-items: center;
`;

const Input = styled.input<{ $center?: boolean }>`
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.16em;
  ${({ $center }) =>
    $center &&
    css`
      text-align: center;
    `}
  background-color: transparent;
  color: white;
  width: 100%;
  flex-shrink: 1;
`;

const S = { FlexBox, CardWrapper, CreditCardInfo, CardNumbers, Input, LogoBox };

export default S;
