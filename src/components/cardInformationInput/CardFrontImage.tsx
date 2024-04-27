import { css } from '@emotion/react';
import { MASTERCARD, VISA } from '../../assets';
import { CARD_INFORMATION } from '../../constants/cardInformation';
import { cardBrand, CardBrandType, CardNumberType, IssuerType, OwnerType, PeriodType } from '../../types/cardType';
import { isValueInRange } from '../../util/isValueInRange';
import { monthFormat, yearFormat } from '../../util/periodFormat';
import ISSUER_COLOR from '../../constants/issuerColor';
import styled from '@emotion/styled';

interface CardImageType {
  cardNumber: CardNumberType;
  cardPeriod: PeriodType;
  cardOwner: OwnerType;
  issuer: string;
}

interface CardImageTableType {
  masterCard: string;
  visa: string;
  noneImage: string;
}

function CardFrontImage({ cardNumber, issuer, cardPeriod, cardOwner }: CardImageType) {
  const cardBrandType = (): CardBrandType => {
    const startNumber = Number(cardNumber.number_1.substring(0, 2));
    if (cardNumber.number_1[0] === CARD_INFORMATION.visa) {
      return cardBrand.visa;
    }
    if (isValueInRange(startNumber, CARD_INFORMATION.masterCard.min, CARD_INFORMATION.masterCard.max)) {
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

  const stringToStar = (value: string) => {
    return '*'.repeat(value.length);
  };

  const displayNumber = () => {
    const copy = { ...cardNumber };
    return { ...copy, ['number_3']: stringToStar(copy.number_3), ['number_4']: stringToStar(copy.number_4) };
  };

  return (
    <>
      <CardContainerStyle color={ISSUER_COLOR[issuer as IssuerType]} className="card-image">
        <div css={cardHeaderStyle}>
          <div css={cardIcStyle}></div>
          {imageUrl && <img src={imageUrl} css={cardLogoStyle} />}
        </div>

        <div css={cardContentStyle}>
          <div css={[cardDetailStyle, cardNumberGridStyle]}>
            {Object.values(displayNumber()).map((numbers, index) => {
              return <p key={index}>{numbers}</p>;
            })}
          </div>
          <p css={[cardDetailStyle, cardPeriodStyle]}>
            <p>{monthFormat(cardPeriod.month)}</p>
            <p>{yearFormat(cardPeriod.year)}</p>
          </p>
          <p css={cardDetailStyle}>{cardOwner.owner}</p>
        </div>
      </CardContainerStyle>
    </>
  );
}

export const CardContainerStyle = styled.div`
  background-color: ${(props) => (props.color ? props.color : '#333333')};
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
  /* 
  transition: transform 0.5s ease; 
  transform-origin: center;

  .rotate-animation {
    transform: rotateY(60deg);
  } */
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
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const cardPeriodStyle = css`
  display: flex;
  gap: 5px;
`;

const cardNumberGridStyle = css`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
`;

export default CardFrontImage;
