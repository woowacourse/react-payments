import { CardInfo } from "../../types/type";
import * as Styled from "./CardPreview.styled";
import MasterCardImage from "../../assets/Mastercard.png";
import VisaImage from "../../assets/Visa.png";
import CardNumbers from "../cardNumbers/CardNumbers";
import CardExpiration from "../cardExpiration/CardExpiration";
import { CARD_BRAND } from "../../constants/setting";

export interface CardPreviewProps {
  cardInfo: CardInfo;
}

const CardPreview = ({ cardInfo }: CardPreviewProps) => {
  const getCardBrandImage = () => {
    const IIN = Math.floor(cardInfo.cardNumbers[0] / 100);
    let cardBrandImage = "";

    if (IIN >= CARD_BRAND.MASTERCARD.MIN_NUMBER && IIN <= CARD_BRAND.MASTERCARD.MAX_NUMBER) {
      cardBrandImage = MasterCardImage;
    } else if (IIN >= CARD_BRAND.VISA.MIN_NUMBER && IIN <= CARD_BRAND.VISA.MAX_NUMBER) {
      cardBrandImage = VisaImage;
    }

    return cardBrandImage;
  };

  const cardBrandImage = getCardBrandImage();

  return (
    <Styled.CardPreviewContainer>
      <Styled.ChipSection>
        <Styled.ICChip></Styled.ICChip>
        {cardBrandImage && (
          <Styled.CardBrand>
            <img
              src={cardBrandImage}
              alt={"카드 브랜드 이미지"}
            />
          </Styled.CardBrand>
        )}
      </Styled.ChipSection>
      <Styled.CardInfoSection>
        <CardNumbers cardNumbers={cardInfo.cardNumbers} />
        <CardExpiration
          month={cardInfo.cardExpiration[0]}
          year={cardInfo.cardExpiration[1]}
        />
        <div>{cardInfo.userName && cardInfo.userName}</div>
      </Styled.CardInfoSection>
    </Styled.CardPreviewContainer>
  );
};

export default CardPreview;
