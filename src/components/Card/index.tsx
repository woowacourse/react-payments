import { CardInfo } from '../../App';
import * as styled from './Card.styled';

interface CardInfoProps {
  cardInfo: CardInfo;
  bgColor: string;
}

const Card = ({ cardInfo, bgColor }: CardInfoProps) => {
  return (
    <styled.Card bgColor={bgColor}>
      <styled.Rectangle />
      <styled.CardInfos>
        <styled.CardNumbers>
          <div>{cardInfo.numbers[0]}</div>
          <div>{cardInfo.numbers[1]}</div>
          <styled.EllipseContainer>
            {Array.from({ length: cardInfo.numbers[2].length }).map(() => (
              <styled.Ellipse />
            ))}
          </styled.EllipseContainer>
          <styled.EllipseContainer>
            {Array.from({ length: cardInfo.numbers[3].length }).map(() => (
              <styled.Ellipse />
            ))}
          </styled.EllipseContainer>
        </styled.CardNumbers>
        <styled.CardBottomInfos>
          <styled.CardOwnerName>
            {cardInfo.ownerName ? cardInfo.ownerName : 'NAME'}
          </styled.CardOwnerName>
          <styled.ExpirationDate>
            <styled.ExpirationMonth>
              {[cardInfo.expirationDate.month ? cardInfo.expirationDate.month : 'MM'].map(
                (char) => (
                  <span>{char}</span>
                )
              )}
            </styled.ExpirationMonth>
            <span>/</span>
            <styled.ExpirationYear>
              {[cardInfo.expirationDate.year ? cardInfo.expirationDate.year : 'YY'].map((char) => (
                <span>{char}</span>
              ))}
            </styled.ExpirationYear>
          </styled.ExpirationDate>
        </styled.CardBottomInfos>
      </styled.CardInfos>
    </styled.Card>
  );
};

export default Card;
