import * as Styled from "./CardPreview.styled";
import MasterCardImage from "../../../assets/Mastercard.png";
import VisaImage from "../../../assets/Visa.png";
import CardNumbers from "../cardNumbers/CardNumbers";
import CardExpiration from "../cardExpiration/CardExpiration";
import { CARD_BRAND } from "../../../constants/setting";
import { CardCompany } from "../../../types/type";

interface CardPreview {
  isCardFlipped: boolean;
  cvc: string;
  userName: string;
  cardExpiration: string[];
  cardCompany: CardCompany;
  cardNumbers: string[];
}

const CardPreview = ({ isCardFlipped, cvc, userName, cardExpiration, cardCompany, cardNumbers }: CardPreview) => {
  const getCardBrandImage = () => {
    const IIN = Math.floor(Number(cardNumbers[0]) / 100);
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
      {!isCardFlipped ? (
        <Styled.FrontCard cardCompany={cardCompany}>
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
            <CardNumbers cardNumbers={cardNumbers} />
            <CardExpiration
              month={cardExpiration[0]}
              year={cardExpiration[1]}
            />
            <div>{userName && userName}</div>
          </Styled.CardInfoSection>
        </Styled.FrontCard>
      ) : (
        <Styled.BackCard>
          <Styled.CVC>{cvc}</Styled.CVC>
        </Styled.BackCard>
      )}
    </Styled.CardPreviewContainer>
  );
};

export default CardPreview;
