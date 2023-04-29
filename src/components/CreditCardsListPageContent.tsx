import styled from 'styled-components';
import { useCreditCards } from '../hooks/useCreditCards';
import { CreditCardView } from './CreditCardView';
import { NewCreditCardButton } from './NewCreditCardButton';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  gap: 25px;
  align-items: center;
  flex: 1;
  padding-bottom: 25px;
`;

export const CreditCardsListPageContent = () => {
  const { creditCards } = useCreditCards();

  return (
    <Container>
      {creditCards.map((creditCard) => (
        <CreditCardView
          key={creditCard.cardNumbers}
          name={creditCard.name}
          cardNumbers={creditCard.cardNumbers}
          expirationDate={creditCard.expirationDate}
          cardCompany={creditCard.cardCompany}
          nickName={creditCard.nickName}
        />
      ))}

      <NewCreditCardButton helperText={creditCards.length === 0} />
    </Container>
  );
};
