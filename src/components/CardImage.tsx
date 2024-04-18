import { css } from '@emotion/react';
import { MASTERCARD, VISA } from '../assets';
import { useState } from 'react';

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

  const imageUrl = getCardImage();
  // const [displayedNumbers, setDisplayedNumbers] = useState([...cardNumber]);
  const displayNumber = () => {
    return cardNumber.map((value: string, index: number) => {
      if (index === 2 || index === 3) {
        return '*'.repeat(value.length);
      }
      return value;
    });
  };

  return (
    <>
      {/* 카드 배경 영역 */}
      <div css={cardContainerStyle}>
        {/* 헤더 */}
        <div css={cardHeaderStyle}>
          <div css={cardIcStyle}></div>
          {imageUrl && <img src={imageUrl} css={cardLogoStyle} />}
        </div>
        {}
        {/* 컨텐츠 */}
        <div css={cardContentStyle}>
          <p css={cardDetailStyle}>{displayNumber().join(' ')}</p>
          <p css={cardDetailStyle}>{cardPeriod.join('/')}</p>
          <p css={cardDetailStyle}>{cardOwner}</p>
        </div>
      </div>
    </>
  );
}

const cardContainerStyle = css`
  background-color: #333333;
  width: 212px;
  height: 132px;
  border-radius: 4px;
  box-sizing: border-box;
  box-shadow: 3px 3px 5px 0px;
  padding: 8px 12px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin: 0 auto;
`;

const cardHeaderStyle = css`
  display: flex;
  justify-content: space-between;
`;

const cardIcStyle = css`
  background-color: #ddcd78;
  border-radius: 4px;
  width: 36px;
  height: 22px;
`;

const cardLogoStyle = css`
  width: 36px;
  height: 22px;
`;

const cardContentStyle = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const cardDetailStyle = css`
  height: 20px;

  color: #ffffff;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 16%;
  white-space: pre-wrap;
`;

export default CardImage;
