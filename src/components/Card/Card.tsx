/** @jsxImportSource @emotion/react */
import Dot from '../@common/Dot/Dot';
import {MasterCard, Visa} from '../../asset/image';
import {
  cardContainer,
  cardSection,
  cardContent,
  cardContentContainer,
  cardContentText,
  cardFrame,
  cardLayout,
  cardType,
} from './Card.style';
import {CARD_TYPE} from '../../constants';
import {CardBrandType, CardExpirationDate, CardNumber} from "../../types";
import {css, useTheme} from "@emotion/react";

type CardProps = {
  cardNumber: CardNumber;
  cardExpirationDate: CardExpirationDate;
  brand: CardBrandType | null;
};

function Card({cardNumber, cardExpirationDate, brand}: CardProps) {
  const theme = useTheme();

  const {first, second, third, forth} = cardNumber;

  const firstString = first?.toString();

  const masterCardType =
    firstString &&
    CARD_TYPE.masterCard.startsWith.some((prefix) =>
      firstString.startsWith(prefix)
    );

  const visaCardType =
    firstString && firstString.startsWith(CARD_TYPE.visa.startsWith);

  const checkCardType = () => {
    if (masterCardType) {
      return MasterCard;
    } else if (visaCardType) {
      return Visa;
    }
  };

  const hasFilledExpirationField = Boolean(cardExpirationDate.month || cardExpirationDate.year);

  const dotStyle = brand === '카카오뱅크' ? 'black' : 'white';
  const fontColor = brand === '카카오뱅크' ? css`color: ${theme.color.black};` : undefined;
  const brandBackground = brand ? css`background-color: ${theme.color.cardBrand[brand]};` : undefined;

  return (
    <section css={cardLayout}>
      <div css={[cardSection, brandBackground]}>
        <div css={cardContainer}>
          <div css={cardFrame}></div>
          {checkCardType() && (
            <div>
              <img css={cardType} src={checkCardType() ?? ''} alt="카드 타입"/>
            </div>
          )}
        </div>
        <div css={cardContentContainer}>
          <div css={cardContent}>
            <span css={[cardContentText, fontColor]}>{first}</span>
            <span css={[cardContentText, fontColor]}>{second}</span>
            <Dot value={third} css={fontColor} color={dotStyle}/>
            <Dot value={forth} css={fontColor} color={dotStyle}/>
          </div>
          <div css={cardContent}>
            {hasFilledExpirationField && (
              <span css={[cardContentText, fontColor]}>
              {cardExpirationDate.month}/{cardExpirationDate.year}
            </span>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Card;
