import { ResisteringCreditCardProvider } from '../../context/ResisteringCreditCardContext';
import { NewCreditCardPageContent } from '../NewCreditCardPageContent';
import { BackButton } from '../common/BackButton';
import { Page } from '../common/Page';
import { PageHeader } from '../common/PageHeader';

export const NewCreditCardPage = () => {
  return (
    <Page>
      <PageHeader leading={<BackButton />}>카드추가</PageHeader>
      <ResisteringCreditCardProvider>
        <NewCreditCardPageContent />
      </ResisteringCreditCardProvider>
    </Page>
  );
};
