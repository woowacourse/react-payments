import * as Styled from './Card.styles';
import { CardType } from '../../types/Card';

type CardProps = Omit<CardType, 'id'>;

const Card = ({ cardNumbers, expiredDates, cardOwnerName }: CardProps) => {
  return (
    <Styled.Wrapper>
      <Styled.ChipWrapper>
        <Styled.Chip />
        <Styled.TextWrapper>
          <Styled.CardText>{cardNumbers[0]}</Styled.CardText>
          <Styled.CardText>{cardNumbers[1]}</Styled.CardText>
          <Styled.CardText>{'•'.repeat(cardNumbers[2].length)}</Styled.CardText>
          <Styled.CardText>{'•'.repeat(cardNumbers[3].length)}</Styled.CardText>
        </Styled.TextWrapper>
        <Styled.TextWrapper>
          <Styled.CardText cardName>{cardOwnerName || 'NAME'}</Styled.CardText>
          <Styled.CardText>
            {expiredDates[0] || 'MM'} / {expiredDates[1] || 'YY'}
          </Styled.CardText>
        </Styled.TextWrapper>
      </Styled.ChipWrapper>
    </Styled.Wrapper>
  );
};

export default Card;
