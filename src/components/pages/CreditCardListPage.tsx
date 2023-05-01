import { CreditCardsProvider } from '../../context/CreditCardsContext';
import { CreditCardsListPageContent } from '../CreditCardsListPageContent';
import { Page } from '../common/Page';
import { PageHeader } from '../common/PageHeader';

export const CreditCardListPage = () => {
  return (
    <Page>
      <PageHeader>보유카드</PageHeader>
      <CreditCardsProvider>
        <CreditCardsListPageContent />
      </CreditCardsProvider>
    </Page>
  );
};
