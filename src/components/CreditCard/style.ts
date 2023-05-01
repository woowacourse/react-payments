import styled from 'styled-components';

type CreditCardLayoutProps = {
  isValid: boolean;
  color?: string;
  backgroundColor?: string;
};

export const CreditCardLayout = styled.div<CreditCardLayoutProps>`
  width: 213px;
  height: 133px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.25);
  border-radius: 5px;
  padding: 14px;

  display: flex;
  flex-direction: column;

  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 14px;
  color: ${({ color }) => color};
  letter-spacing: 3px;
  border: ${({ isValid }) => (isValid ? '0' : '2px solid red')};
`;

export const CreditCardICChip = styled.div`
  width: 40px;
  height: 26px;
  background: #cbba64;
  border-radius: 4px;
`;

export const CreditCardContainer = styled.div`
  margin-top: 10px;
  min-width: 100%;
  max-width: 100%;
  display: grid;
  grid-template-columns: 165px auto;
  column-gap: 10px;
`;

export const CreditCardInfoHeader = styled.div`
  height: 53.5px;
`;
export const CreditCardInfoFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 53.5px;
`;

export const CreditCardCompany = styled.div``;

export const CreditCardNumber = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 5px;
  justify-items: flex-start;
`;

export const CreditCardBox = styled.div`
  display: flex;
  align-items: start;
  letter-spacing: 2px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;
