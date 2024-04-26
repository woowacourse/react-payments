import { css } from '@emotion/react';
import { MASTERCARD, VISA } from '../assets';
import checkCardBrand from '../util/checkCardBrand';
import formatCardDisplayNumber from '../util/formatCardDisplayNumber';
import { CARD_DISPLAY_INDEX } from '../constants/cardInformation';
import formatValue from '../util/formatValue';

const cardContainerStyle = (backgroundColor: string) =>
  css({
    backgroundColor: `${backgroundColor}`,
    width: '212px',
    height: '132px',
    borderRadius: '4px',
    boxSizing: 'border-box',
    boxShadow: '3px 3px 5px 0px',
    padding: '8px 12px',
    display: 'flex',
    flexDirection: 'column',
    gap: '14px',
    margin: '0 auto',
  });

const cardHeaderStyle = css({
  display: 'flex',
  justifyContent: 'space-between',
});

const cardIcStyle = css({
  backgroundColor: '#ddcd78',
  borderRadius: '4px',
  width: '36px',
  height: '22px',
});

const cardLogoStyle = css({
  width: '36px',
  height: '22px',
});

const cardContentStyle = css({
  display: 'flex',
  flexDirection: 'column',
  gap: '8px',
});

const cardDetailStyle = css({
  height: '20px',
  color: '#ffffff',
  fontSize: '14px',
  lineHeight: '20px',
  letterSpacing: 'inherit',
  whiteSpace: 'pre-wrap',
});

const cardNumberGridStyle = css({
  display: 'grid',
  gap: '10px',
  gridTemplateColumns: 'repeat(4, 1fr)',
  justifyContent: 'center',
});

interface CardImageType {
  cardNumber: string[];
  cardPeriod: { month: string; year: string };
  cardOwner: string;
  cardProvider: string;
}

interface CardImageTableType {
  masterCard: string;
  visa: string;
  domesticCard: string;
}

function CardImage({ cardNumber, cardPeriod, cardOwner, cardProvider }: CardImageType) {
  const getCardImage = () => {
    const cardImageTable: CardImageTableType = {
      masterCard: MASTERCARD,
      visa: VISA,
      domesticCard: '',
    };
    return cardImageTable[checkCardBrand(cardNumber)];
  };

  const imageUrl = getCardImage();

  const cardColorTable: { [key: string]: string } = {
    default: '#333333',
    BC카드: '#F04651',
    신한카드: '#0046FF',
    카카오뱅크: '#FFE600',
    현대카드: '#000000',
    우리카드: '#007BC8',
    롯데카드: '#ED1C24',
    하나카드: '#009490',
    국민카드: '#6A6056',
  };

  const getCardColor = () => {
    if (!cardProvider) return cardColorTable['default'];
    return cardColorTable[cardProvider];
  };

  return (
    <div css={cardContainerStyle(getCardColor())}>
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
        <p css={cardDetailStyle}>{formatValue.periodFormat(cardPeriod.month, cardPeriod.year)}</p>
        <p css={cardDetailStyle}>{cardOwner}</p>
      </div>
    </div>
  );
}

export default CardImage;
