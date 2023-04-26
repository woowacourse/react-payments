import styled from 'styled-components';
import { usePayments } from '../../hooks/usePayments';
import { CreditCardView } from '../CreditCardView';
import { NewCreditCardButton } from '../NewCreditCardButton';
import { Page } from '../common/Page';

const Content = styled.main`
  display: flex;
  flex-direction: column;
  gap: 46px;
  align-items: center;
  flex: 1;
  overflow: scroll;
`;

export const CreditCardListPage = () => {
  const { creditCards } = usePayments();

  return (
    <Page>
      <Page.Header>보유카드</Page.Header>
      <Content>
        {creditCards.map((creditCard, index) => (
          <CreditCardView
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            name={creditCard.name}
            cardNumbers={creditCard.cardNumbers}
            expirationDate={creditCard.expirationDate}
          />
        ))}

        <NewCreditCardButton helperText={creditCards.length === 0} />
      </Content>
    </Page>
  );
};
