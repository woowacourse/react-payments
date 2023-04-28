import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from '../components/common/Page';
import { Text } from '../components/common/Text';
import { CreditCardView } from '../components/payments/CreditCardView';
import { NewCreditCardButton } from '../components/payments/NewCreditCardButton';
import { NewCreditCardVendorBottomSheet } from '../components/payments/NewCreditCardVendorBottomSheet';
import { VendorIcon } from '../components/payments/VendorIcon';
import type { CreditCardVendorName } from '../domain/CreditCardVendor';
import { CreditCardVendors } from '../domain/CreditCardVendor';
import { usePayments } from '../hooks/usePayments';

const Content = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  flex: 1;

  padding-bottom: 48px;
`;

const CreditCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const CreditCardListItem = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`;

export const CreditCardListPage = () => {
  const navigate = useNavigate();
  const { creditCards } = usePayments();

  const [isVendorBottomSheetOpened, setIsVendorBottomSheetOpened] = useState(false);

  const handleClickNewCreditCardButton = () => {
    setIsVendorBottomSheetOpened(true);
  };

  const handleClickCreditCardVendor = (vendor: CreditCardVendorName) => {
    navigate('/register', {
      state: { vendor },
    });
  };

  return (
    <Page>
      <Page.Header>보유카드</Page.Header>
      <Content>
        <CreditCardList>
          {creditCards.map((creditCard) => (
            <CreditCardListItem key={creditCard.cardNumbers}>
              <CreditCardView
                vendor={creditCard.vendor}
                owner={creditCard.owner}
                cardNumbers={creditCard.cardNumbers}
                expirationDate={creditCard.expirationDate}
                color={CreditCardVendors[creditCard.vendor].color}
                icon={<VendorIcon vendor={creditCard.vendor} />}
              />
              <Text weight="bold">{creditCard.displayName}</Text>
            </CreditCardListItem>
          ))}
        </CreditCardList>

        <NewCreditCardButton
          helperText={creditCards.length === 0}
          onClick={handleClickNewCreditCardButton}
        />
      </Content>

      <NewCreditCardVendorBottomSheet
        open={isVendorBottomSheetOpened}
        onClose={() => setIsVendorBottomSheetOpened(false)}
        onClickVendor={handleClickCreditCardVendor}
      />
    </Page>
  );
};
