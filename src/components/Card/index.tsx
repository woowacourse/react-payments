import { CardInfo } from '../../types/card';
import * as styled from './Card.styled';

interface CardProps {
  cardInfo: CardInfo;
  bgColor?: string;
}

const Card = ({ cardInfo, bgColor }: CardProps) => {
  return (
    <styled.Card bgColor={bgColor}>
      <styled.Rectangle />
      <styled.CardInfos>
        <styled.CardNumbers>
          <div>{cardInfo?.firstCardNumbers}</div>
          <div>{cardInfo?.secondCardNumbers}</div>
          <styled.EllipseContainer>
            {Array.from({ length: cardInfo?.thirdCardNumbers.length }).map((_, index) => (
              <styled.Ellipse key={index} />
            ))}
          </styled.EllipseContainer>
          <styled.EllipseContainer>
            {Array.from({ length: cardInfo?.fourthCardNumbers.length }).map((_, index) => (
              <styled.Ellipse key={index} />
            ))}
          </styled.EllipseContainer>
        </styled.CardNumbers>
        <styled.CardBottomInfos>
          <styled.CardOwnerName>
            {cardInfo?.ownerName ? cardInfo?.ownerName : 'NAME'}
          </styled.CardOwnerName>
          <styled.ExpirationDate>
            <styled.ExpirationMonth>
              {[cardInfo?.expirationMonth ? cardInfo?.expirationMonth : 'MM'].map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </styled.ExpirationMonth>
            <span>/</span>
            <styled.ExpirationYear>
              {[cardInfo?.expirationYear ? cardInfo?.expirationYear : 'YY'].map((char, index) => (
                <span key={index}>{char}</span>
              ))}
            </styled.ExpirationYear>
          </styled.ExpirationDate>
        </styled.CardBottomInfos>
      </styled.CardInfos>
    </styled.Card>
  );
};

export default Card;
