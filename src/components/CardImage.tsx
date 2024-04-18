import { css } from '@emotion/react';
import { MASTERCARD, VISA } from '../assets';
import { isRange } from '../util/isRange';
import { CARD_INFORMATION } from '../constants/cardInformation';
import { cardBrand, CardBrandType } from '../types/cardType';
import { VALIDATION } from '../constants/validation';

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
  const cardBrandType = (): CardBrandType => {
    const startNumber = Number(cardNumber[0].substring(0, 2));
    if (cardNumber[0][0] === CARD_INFORMATION.visa) {
      return cardBrand.visa;
    }
    if (!isRange(startNumber, CARD_INFORMATION.masterCard.min, CARD_INFORMATION.masterCard.max)) {
      return cardBrand.masterCard;
    }
    return cardBrand.noneImage;
  };

  const getCardImage = () => {
    const cardImageTable: CardImageTableType = {
      masterCard: MASTERCARD,
      visa: VISA,
      noneImage: '',
    };
    return cardImageTable[cardBrandType()];
  };

  const imageUrl = getCardImage();

  const displayNumber = () => {
    return cardNumber.map((value: string, index: number) => {
      if (index === 2 || index === 3) {
        return '*'.repeat(value.length);
      }
      return value;
    });
  };

  const monthFormat = (month: string) => {
    const monthNumber = Number(month);
    if (month && !isRange(monthNumber, VALIDATION.singleDigit.min, VALIDATION.singleDigit.max)) {
      return '0'.repeat(2 - month.length) + month;
    }
    return month;
  };

  const periodFormat = (month: string, year: string) => {
    if (month) return [monthFormat(month), year].join('/');
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
        {/* 컨텐츠 */}
        <div css={cardContentStyle}>
          <div css={[cardDetailStyle, cardNumberGridStyle]}>
            {displayNumber().map((numbers, index) => {
              return <p key={index}>{numbers}</p>;
            })}
          </div>
          <p css={cardDetailStyle}>{periodFormat(cardPeriod[0], cardPeriod[1])}</p>
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
  letter-spacing: inherit;
  white-space: pre-wrap;
`;

const cardNumberGridStyle = css`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`;

export default CardImage;
