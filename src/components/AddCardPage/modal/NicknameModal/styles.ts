import styled from 'styled-components';
import CreditCard from '../../../shared/CreditCard';

export const NicknameContainer = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  header {
    font-size: 1.25rem;
    margin-bottom: 5rem;
  }
`;

export const ResultCreditCard = styled(CreditCard)`
  margin-bottom: 2.5rem;
`;
