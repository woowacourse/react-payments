import * as Styled from './Card.styles';
import { CardType } from '../../types/Card';

type CardProps = Omit<CardType, 'id'>;

const Card = ({ cardNumbers, expiredDate, cardOwnerName }: CardProps) => {
  return (
    <>
      <Styled.Wrapper>
        <Styled.ChipWrapper>
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
      </Styled.Wrapper>
    </>
  );
};

export default Card;
