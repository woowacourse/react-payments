import styled from 'styled-components';
import type { CreditCard } from '../types/CreditCard';
import { Text } from './common/Text';

const CREDIT_CARD_VIEW_BACKGROUND_COLOR = {
  BC카드: '#f15060',
  신한카드: '#115588',
  카카오뱅크: '#fae20c',
  현대카드: '#333333',
  우리카드: '#179cf0',
  롯데카드: '#f60606',
  하나카드: '#048d84',
  국민카드: '#5c5248',
  카드사: '#838e99',
} as const;

type CreditCardViewProps = Pick<
  CreditCard,
  'cardCompany' | 'name' | 'cardNumbers' | 'expirationDate'
> & { openModal?: () => void };

type StyledCreditCardViewProps = {
  $background?: (typeof CREDIT_CARD_VIEW_BACKGROUND_COLOR)[keyof typeof CREDIT_CARD_VIEW_BACKGROUND_COLOR];
};

const StyledCreditCardView = styled.div<StyledCreditCardViewProps>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 6px;

  width: 200px;
  height: 130px;

  padding: 14px;

  border-radius: 4px;

  background: ${(props) => props.$background};
  color: white;
  font-weight: bold;
`;

const ICChip = styled.div`
  width: 40px;
  height: 26px;

  border-radius: 4px;

  background: #cbba64;
`;

const CardNumber = styled.div`
  display: flex;
  gap: 5px;

  letter-spacing: 2px;
  height: 12px;
`;

const CardAdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;

  height: 12px;
`;

export const CreditCardView = (props: CreditCardViewProps) => {
  const { cardCompany, name, cardNumbers, expirationDate, openModal} = props;

  const getPartialCardNumber = (index: number) => {
    const partialCardNumber = cardNumbers.split('-')[index] ?? '';

    return [0, 1].includes(index) ? partialCardNumber : partialCardNumber.replaceAll(/\d/g, '•');
  };

  const partialCardNumbers = [0, 1, 2, 3].map(getPartialCardNumber);

  return (
    <StyledCreditCardView
      $background={CREDIT_CARD_VIEW_BACKGROUND_COLOR[cardCompany]}
      onClick={openModal}
    >
      <Text size="large" weight="bold">
        {cardCompany}
      </Text>
      <ICChip />
      <CardNumber>
        {partialCardNumbers.map((partialCardNumber, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <Text size="small" key={index}>
            {partialCardNumber}
          </Text>
        ))}
      </CardNumber>
      <CardAdditionalInfo>
        <Text size="small">{name}</Text>
        {expirationDate.some(Boolean) && <Text size="small">{expirationDate.join('/')}</Text>}
      </CardAdditionalInfo>
    </StyledCreditCardView>
  );
};
