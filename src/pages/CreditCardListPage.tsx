import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { CreditCardView } from '../components/CreditCardView';
import { NewCreditCardButton } from '../components/NewCreditCardButton';
import { Page } from '../components/common/Page';
import { usePayments } from '../hooks/usePayments';

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 46px;
  align-items: center;
  flex: 1;
`;

export const CreditCardListPage = () => {
  const navigate = useNavigate();
  const { creditCards } = usePayments();

  const handleClickNewCreditCardButton = () => {
    navigate('/register');
  };

  return (
    <Page>
      <Page.Header>보유카드</Page.Header>
      <Content>
        {creditCards.map((creditCard) => (
          <CreditCardView
            key={creditCard.cardNumbers}
            name={creditCard.name}
            cardNumbers={creditCard.cardNumbers}
            expirationDate={creditCard.expirationDate}
          />
        ))}

        <NewCreditCardButton
          helperText={creditCards.length === 0}
          onClick={handleClickNewCreditCardButton}
        />
      </Content>
    </Page>
  );
};
