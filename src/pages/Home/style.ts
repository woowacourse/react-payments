import styled from 'styled-components';

export const CreditCardLayout = styled.div``;

export const CreditCardList = styled.ul`
  display: grid;
  row-gap: 40px;
  justify-items: center;
`;

export const CreditCardItem = styled.li`
  display: grid;
  row-gap: 10px;
  justify-items: center;
`;

export const CreditCardAlias = styled.span`
  font-weight: 700;
  font-size: 14px;
  line-height: 16px;
  color: #575757;
  opacity: 0.9;
`;

export const RegisterCreditCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 40px;
`;

export const RegisterCreditCardText = styled.span`
  font-size: 14px;
  margin-bottom: 20px;
`;

export const RegisterCreditCardButton = styled.button`
  width: 241px;
  height: 133px;
  background-color: #e5e5e5;
  border-radius: 5px;
  font-size: 30px;
  cursor: pointer;
`;
