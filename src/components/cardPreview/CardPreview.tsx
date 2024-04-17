import { useEffect, useState } from "react";
import { ICardInfo } from "../../types/type";
import * as Styled from "./CardPreview.styles";
import MasterCardImage from "../../assets/Mastercard.png";
import VisaImage from "../../assets/Visa.png";
import CardNumbers from "../cardNumbers/CardNumbers";
import CardExpiration from "../cardExpiration/CardExpiration";

interface Props {
  cardInfo: ICardInfo;
}

const CardPreview = ({ cardInfo }: Props) => {
  const [cardBrand, setCardBrand] = useState("");

  useEffect(() => {
    const firstNumber = Math.floor(cardInfo.cardNumbers[0] / 100);

    if (firstNumber >= 40 && firstNumber <= 49) {
      setCardBrand("MasterCard");
    } else if (firstNumber >= 51 && firstNumber <= 55) {
      setCardBrand("Visa");
    } else {
      setCardBrand("");
    }
  }, [cardInfo.cardNumbers]);

  const getCardBrandImage = () => {
    switch (cardBrand) {
      case "MasterCard":
        return MasterCardImage;
      case "Visa":
        return VisaImage;
      default:
        return "";
    }
  };

  return (
    <Styled.CardPreviewContainer>
      <Styled.ChipSection>
        <Styled.ICChip></Styled.ICChip>
        {cardBrand && (
          <Styled.CardBrand>
            <img
              src={getCardBrandImage()}
              alt={cardBrand}
            />
          </Styled.CardBrand>
        )}
      </Styled.ChipSection>
      <Styled.CardInfoSection>
        <CardNumbers cardNumbers={cardInfo.cardNumbers} />
        <CardExpiration
          month={cardInfo.cardExpiration["month"]}
          year={cardInfo.cardExpiration["year"]}
        />
        <div>{cardInfo.userName && cardInfo.userName}</div>
      </Styled.CardInfoSection>
    </Styled.CardPreviewContainer>
  );
};

export default CardPreview;
