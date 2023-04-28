import refineExpirationDate from '../../../utils/refineExpirationDate';
import useCardNumber from '../../../hooks/useCardNumber';
import { CardCompanyEng } from '../../../@types/cardCompany';
import { KOR_NAME_BY_CARD_COMPANY, COLOR_BY_CARD_COMPANY } from '../../../@types/cardCompany';
import { StyleCardChip, StyleCardContainer, StyleCardName, StyleCardNumber } from './Card.style';

interface CardProps {
  cardNumber: string[];
  ownerName: string;
  expirationDate: string[];
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  cardCompany: CardCompanyEng;
}

const Card = ({ cardNumber, ownerName, expirationDate, cardCompany, onClick }: CardProps) => {
  const cardNumberList = useCardNumber(cardNumber);

  return (
    <StyleCardContainer
      onClick={onClick}
      cardColor={COLOR_BY_CARD_COMPANY[cardCompany]}
      cardCompany={cardCompany}
      color={cardCompany === 'hyundai' ? 'white' : 'black'}
    >
      <span>{KOR_NAME_BY_CARD_COMPANY[cardCompany]}</span>
      <StyleCardChip />
      <StyleCardNumber>
        {cardNumberList.map((numberValue, index) => (
          <span key={`card-number-${index}`}>{numberValue}</span>
        ))}
      </StyleCardNumber>
      <StyleCardName>
        <span>{ownerName}</span>
        <span>{refineExpirationDate(expirationDate)}</span>
      </StyleCardName>
    </StyleCardContainer>
  );
};

export default Card;
