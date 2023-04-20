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

  height: 12px;
`;

const CardAdditionalInfo = styled.div`
  display: flex;
  justify-content: space-between;

  height: 12px;
`;

export const CreditCardView = (props: CreditCardViewProps) => {
  const { name, cardNumbers, expirationDate } = props;

  const getPartialCardNumber = (index: number) => {
    const partialCardNumber = cardNumbers.slice(index * 4, (index + 1) * 4);

    return [0, 1].includes(index) ? partialCardNumber : partialCardNumber.replaceAll(/\d/g, '•');
  };

  const partialCardNumbers = [0, 1, 2, 3].map(getPartialCardNumber);

  return (
    <StyledCreditCardView>
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
