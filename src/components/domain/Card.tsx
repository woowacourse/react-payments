import styled from '@emotion/styled';
import { CARD_COMPANY_COLORS, CARD_TYPE_PATH } from '../../constants/setting';
import getCardType from '../../utils/getCardType';

interface CardProps {
  cardNumber: string[];
  company: keyof typeof CARD_COMPANY_COLORS;
  expiration: { month: string; year: string };
}

const Card = ({ cardNumber, company, expiration }: CardProps) => {
  const cardType = getCardType(cardNumber[0]);

  function maskCardNumber(cardNumber: string[]) {
    return [
      ...cardNumber.slice(0, 2),
      ...cardNumber.slice(2).map((letter) => '·'.repeat(letter.length)),
    ];
  }

  return (
    <CardContainer company={company}>
      <CardHeader>
        <CardIC />
        {cardType !== 'None' && <CardType src={CARD_TYPE_PATH[cardType]} alt={cardType} />}
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

const CardContainer = styled.div<{ company: keyof typeof CARD_COMPANY_COLORS }>`
  width: 212px;
  height: 132px;
  color: ${({ company }) => (company === '카카오뱅크' ? '#333' : 'white')};
  padding: 8px 12px;
  border-radius: 4px;
  background: ${({ company }) => CARD_COMPANY_COLORS[company]};
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
  display: flex;
  flex-direction: column;
  gap: 8px;
  letter-spacing: 1.5px;
`;
