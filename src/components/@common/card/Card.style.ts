import styled from 'styled-components';
import { CardCompanyEng } from '../../../@types/cardCompany';

interface CardContainerProps {
  cardCompany: CardCompanyEng;
  cardColor: string;
}

export const StyleCardContainer = styled.div<CardContainerProps>`
  width: 233px;
  height: 143px;

  color: ${(props) => props.color};

  display: flex;
  flex-direction: column;
  row-gap: 13px;
  justify-content: flex-end;

  background: ${(props) => props.cardColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  padding: 14px;
  margin: 10px auto;

  box-sizing: border-box;
`;

export const StyleCardChip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;
export const StyleCardNumber = styled.div`
  display: flex;
  justify-content: space-between;

  height: 13px;

  font-weight: 600;
  font-size: 10px;
  letter-spacing: 3px;

  span {
    width: 35px;
    display: inline-block;
  }
`;

export const StyleCardName = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  height: 13px;

  font-weight: 600;
  font-size: 10px;
`;
