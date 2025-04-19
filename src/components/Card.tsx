import styled from '@emotion/styled';
import { CARD_TYPE_PATH, VISA_CARD_PREFIXES, MASTER_CARD_PREFIXES } from '../constants/setting';

interface CardProps {
  cardNumber: string[];
  expiration: { month: string; year: string };
}

const Card = ({ cardNumber, expiration }: CardProps) => {
  const cardType = getCardType(cardNumber[0]);

  function maskCardNumber(cardNumber: string[]) {
    return [
      ...cardNumber.slice(0, 2),
      ...cardNumber.slice(2).map((letter) => '·'.repeat(letter.length)),
    ];
  }

  return (
    <CardContainer>
      <CardHeader>
        <CardIC />
        {cardType !== 'None' && <CardType src={CARD_TYPE_PATH[cardType]} />}
      </CardHeader>

      <CardInfo>
        <p>{maskCardNumber(cardNumber).join(' ')}</p>
        <p>
          {expiration.year === '' ? expiration.month : `${expiration.month} / ${expiration.year}`}
        </p>
      </CardInfo>
    </CardContainer>
  );
};

export default Card;

const getCardType = (cardFirstNumber: string) => {
  for (const prefix of VISA_CARD_PREFIXES) {
    if (cardFirstNumber.startsWith(prefix)) return 'VISA';
  }
  for (const prefix of MASTER_CARD_PREFIXES) {
    if (cardFirstNumber.startsWith(prefix)) return 'MasterCard';
  }

  return 'None';
};

const CardContainer = styled.div`
  width: 212px;
  height: 132px;
  padding: 8px 12px;
  border-radius: 4px;
  background: #333;
  box-shadow: 3px 3px 5px 0px rgba(0, 0, 0, 0.25);
  margin-bottom: 30px;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const CardIC = styled.div`
  width: 36px;
  height: 22px;
  background: #ddcd78;
  border-radius: 2px;
  stroke-width: 0.5px;
  stroke: rgba(221, 205, 120, 0.1);
`;

const CardType = styled.img`
  width: 36px;
  height: 22px;
`;

const CardInfo = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  gap: 8px;
  letter-spacing: 1.5px;
`;
