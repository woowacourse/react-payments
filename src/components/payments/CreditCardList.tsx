import styled from 'styled-components';
import type { CreditCard } from '../../domain/CreditCard';
import { CreditCardVendors } from '../../domain/CreditCardVendor';
import { Text } from '../common/Text';
import { CreditCardView } from './CreditCardView';
import { VendorIcon } from './VendorIcon';

const StyledCreditCardList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

type CreditCardListItemProps = {
  $stackGap: number;
  $topIndex: number;
  $bottomIndex: number;
};

const CreditCardListItem = styled.li<CreditCardListItemProps>`
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;

  position: sticky;
  top: ${(props) => props.$topIndex * props.$stackGap}px;
  bottom: ${(props) => props.$bottomIndex * props.$stackGap}px;
`;

type CreditCardListProps = {
  creditCards: CreditCard[];
  stackGap?: number;
};

export const CreditCardList = (props: CreditCardListProps) => {
  const { creditCards, stackGap } = props;

  return (
    <StyledCreditCardList>
      {creditCards.map((creditCard, index) => (
        <CreditCardListItem
          key={creditCard.id}
          $stackGap={stackGap ?? 20}
          $topIndex={index}
          $bottomIndex={creditCards.length - index - 1}
        >
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
    </StyledCreditCardList>
  );
};
