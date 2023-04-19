import styled from 'styled-components';
import type { CreditCard } from '../types/CreditCard';
import { Text } from './common/Text';

type CreditCardViewProps = Pick<CreditCard, 'name' | 'cardNumbers' | 'expirationDate'>;

const StyledCreditCardView = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  gap: 6px;
  
  width: 200px;
  height: 130px;

  padding: 14px;

  border-radius: 4px;

  background: #333333;
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
  gap: 10px;
  letter-spacing: 2px;
`;

const CardAdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const CreditCardView = (props: CreditCardViewProps) => {
  const { name, cardNumbers, expirationDate } = props;
  const partialCardNumbers = /(\d{4})(\d{4})(\d{4})(\d{4})/.exec(cardNumbers)!.slice(1, 3);

  return (
    <StyledCreditCardView>
      <ICChip />
      <CardNumber>
        {partialCardNumbers.map((partialCardNumber) => (
          <Text size="small" key={partialCardNumber}>{partialCardNumber}</Text>
        ))}
        <Text size="small">••••</Text>
        <Text size="small">••••</Text>
      </CardNumber>
      <CardAdditionalInfo>
        <Text size="small">{name}</Text>
        <Text size="small">{expirationDate.join('/')}</Text>
      </CardAdditionalInfo>
    </StyledCreditCardView>
  );
};
