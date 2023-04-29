import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Page } from '../components/common/Page';
import { CreditCardList } from '../components/payments/CreditCardList';
import { NewCreditCardButton } from '../components/payments/NewCreditCardButton';
import { NewCreditCardVendorBottomSheet } from '../components/payments/NewCreditCardVendorBottomSheet';
import type { CreditCardVendorName } from '../domain/CreditCardVendor';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { usePayments } from '../hooks/usePayments';

const Content = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;

  flex: 1;

  padding-bottom: 48px;
`;

const CreditCardListBottom = styled.div`
  padding-bottom: 16px;

  position: sticky;
  bottom: -1px;
  z-index: 2;
`;

const CreditCardListBottomShadow = styled.div`
  height: 120px;
  background: linear-gradient(
    to top,
    ${(props) => props.theme.color.background},
    ${(props) => props.theme.color.background} 30%,
    ${(props) => props.theme.color.background} 50%,
    transparent
  );

  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 1;
`;

export const CreditCardListPage = () => {
  const navigate = useNavigate();
  const { creditCards } = usePayments();

  const bottomRef = useRef<HTMLDivElement>(null);
  const [isBottomSticky, setIsBottomSticky] = useState(false);
  const [isVendorBottomSheetOpened, setIsVendorBottomSheetOpened] = useState(false);

  useIntersectionObserver(bottomRef, (isIntersecting: boolean) => {
    setIsBottomSticky(!isIntersecting);
  });

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
        <CreditCardList creditCards={creditCards} />

        <CreditCardListBottom ref={bottomRef}>
          <NewCreditCardButton
            rounded={isBottomSticky}
            helperText={creditCards.length === 0}
            onClick={handleClickNewCreditCardButton}
          />
        </CreditCardListBottom>
      </Content>

      <NewCreditCardVendorBottomSheet
        open={isVendorBottomSheetOpened}
        onClose={() => setIsVendorBottomSheetOpened(false)}
        onClickVendor={handleClickCreditCardVendor}
      />

      <CreditCardListBottomShadow />
    </Page>
  );
};
