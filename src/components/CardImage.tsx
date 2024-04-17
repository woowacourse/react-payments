import { css } from '@emotion/react';
import { MASTERCARD, VISA } from '../assets';

interface CardImageType {
  cardNumber: string[];
  cardPeriod: string[];
  cardOwner: string[];
}

interface CardImageTableType {
  masterCard: string;
  visa: string;
  noneImage: string;
}

function CardImage({ cardNumber, cardPeriod, cardOwner }: CardImageType) {
  const cardType = (): 'visa' | 'masterCard' | 'noneImage' => {
    if (cardNumber[0][0] === '4') {
      return 'visa';
    }
    const startNumber = Number(cardNumber[0].substring(0, 2));
    if (startNumber >= 51 && startNumber <= 55) {
      return 'masterCard';
    }
    return 'noneImage';
  };

  const getCardImage = () => {
    const cardImageTable: CardImageTableType = {
      masterCard: MASTERCARD,
      visa: VISA,
      noneImage: '',
    };
    return cardImageTable[cardType()];
  };

  return (
    <>
      {/* 카드 배경 영역 */}
      <div>
        {/* 헤더 */}
        <div>
          <div>왼쪽 박스</div>
          <img src={getCardImage()} />
        </div>

        {/* 컨텐츠 */}
        <div>
          <p>{cardNumber}</p>
          <p>{cardPeriod}</p>
          <p>{cardOwner}</p>
        </div>
      </div>
    </>
  );
}

export default CardImage;
