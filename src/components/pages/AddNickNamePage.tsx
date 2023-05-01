import { CreditCardsProvider } from '../../context/CreditCardsContext';
import { ResisteringCreditCardProvider } from '../../context/ResisteringCreditCardContext';
import { AddNickNamePageContent } from '../AddNickNamePageContent';
import { Page } from '../common/Page';

export const AddNickNamePage = () => {
  return (
    <Page>
      <CreditCardsProvider>
        <ResisteringCreditCardProvider>
          <AddNickNamePageContent />
        </ResisteringCreditCardProvider>
      </CreditCardsProvider>
    </Page>
  );
};
