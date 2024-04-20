import { css } from '@emotion/react';
import { MASTERCARD, VISA } from '../assets';
import { isRange } from '../util/isRange';
import { VALIDATION } from '../constants/validation';
import checkCardBrand from '../util/checkCardBrand';
import formatCardDisplayNumber from '../util/formatCardDisplayNumber';
import { CARD_DISPLAY_INDEX } from '../constants/cardInformation';

interface CardImageType {
  cardNumber: string[];
  cardPeriod: string[];
  cardOwner: string[];
}

interface CardImageTableType {
  masterCard: string;
  visa: string;
  domesticCard: string;
}

function CardImage({ cardNumber, cardPeriod, cardOwner }: CardImageType) {
  const getCardImage = () => {
    const cardImageTable: CardImageTableType = {
      masterCard: MASTERCARD,
      visa: VISA,
      domesticCard: '',
    };
    return cardImageTable[checkCardBrand(cardNumber)];
  };

  const imageUrl = getCardImage();

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
            {formatCardDisplayNumber(cardNumber, [CARD_DISPLAY_INDEX.third, CARD_DISPLAY_INDEX.fourth]).map(
              (numbers, index) => {
                return <p key={index}>{numbers}</p>;
              },
            )}
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
