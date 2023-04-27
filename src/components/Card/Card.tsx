import * as Styled from './Card.styles';
import { CardType } from '../../types/Card';
import { cardCompanies } from '../../constants/cards';

type CardProps = Omit<CardType, 'id'>;

const Card = ({
  cardNumbers,
  expiredDate,
  cardOwnerName,
  cardCompany,
}: CardProps) => {
  const cardColor = cardCompanies.find(
    (card) => card.name === cardCompany
  )?.color;

  return (
    <>
      <Styled.CardWrapper cardColor={cardColor}>
        <Styled.ChipWrapper>
          <Styled.CardCompany>{cardCompany}</Styled.CardCompany>
          <Styled.Chip />
          <Styled.TextWrapper>
            <Styled.CardText>{cardNumbers[0]}</Styled.CardText>
            <Styled.CardText>{cardNumbers[1]}</Styled.CardText>
            <Styled.CardText>
              {'•'.repeat(cardNumbers[2].length)}
            </Styled.CardText>
            <Styled.CardText>
              {'•'.repeat(cardNumbers[3].length)}
            </Styled.CardText>
          </Styled.TextWrapper>
          <Styled.TextWrapper>
            <Styled.CardText>{cardOwnerName || 'NAME'}</Styled.CardText>
            <Styled.CardText>
              {expiredDate[0] || 'MM'} / {expiredDate[1] || 'YY'}
            </Styled.CardText>
          </Styled.TextWrapper>
        </Styled.ChipWrapper>
      </Styled.CardWrapper>
    </>
  );
};

export default Card;
