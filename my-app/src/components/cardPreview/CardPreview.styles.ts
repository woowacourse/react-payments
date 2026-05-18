import styled from '@emotion/styled';
import {
  CARD_COMPANY_COLORS,
  type CardCompany,
} from '../cardCompanySection/CardCompanyConstants';

interface CardContainerProps {
  company: CardCompany | 'Default';
}

export const CardContainer = styled.div<CardContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 50px;
  gap: 14px;
  padding: 8px 12px;
  width: 212px;
  height: 132px;
  background-color: ${({ company }) => CARD_COMPANY_COLORS[company]};
  color: #ffffff;
  box-shadow: 3px 3px 5px 0 rgba(0, 0, 0, 0.25);
  border-radius: 4px;
  box-sizing: border-box;
`;

export const CardHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

export const CardChip = styled.div`
  width: 36px;
  height: 22px;
  border-radius: 4px;
  background-color: #ddcd78;
`;

export const CardNumber = styled.div`
  height: 20px;
  font-size: 14px;
  font-weight: 500;
  width: 100%;
  padding: 0 5px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  gap: 10px;
  box-sizing: border-box;
`;

export const CardExpirationDate = styled.div`
  font-size: 14px;
  font-weight: 500;
  padding: 0 5px;
  letter-spacing: 1px;
`;
