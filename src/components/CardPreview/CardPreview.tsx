import { useEffect, useState } from "react";
import Visa from "../../static/Visa.png";
import Mastercard from "../../static/Mastercard.png";
import * as S from "./style";

interface Props {
  cardInformation: TCardInformation;
}

export default function CardPreview({ cardInformation }: Props) {
  const [cardBrandImg, setCardBrandImg] = useState("");

  useEffect(() => {
    if (cardInformation.cardNumbers[0].value[0] === "4") {
      setCardBrandImg(Visa);
      return;
    }

    if (
      Number(cardInformation.cardNumbers[0].value.slice(0, 2)) >= 51 &&
      Number(cardInformation.cardNumbers[0].value.slice(0, 2)) <= 55
    ) {
      setCardBrandImg(Mastercard);
      return;
    }

    setCardBrandImg("");
  }, [cardInformation.cardNumbers]);

  return (
    <S.CardContainer>
      <S.CardHeader>
        <div></div>
        {cardBrandImg && <img src={cardBrandImg}></img>}
      </S.CardHeader>
      <S.CardInfoContainer>
        <S.CardPreviewTextContainer>
          <S.PreviewText>{cardInformation.cardNumbers[0].value}</S.PreviewText>
          <S.PreviewText>{cardInformation.cardNumbers[1].value}</S.PreviewText>
          <S.HiddenNumberContainer>
            {Array.from({
              length: cardInformation.cardNumbers[2].value.length,
            }).map((_, index) => (
              <S.HiddenNumber key={index} />
            ))}
          </S.HiddenNumberContainer>
          <S.HiddenNumberContainer>
            {Array.from({
              length: cardInformation.cardNumbers[3].value.length,
            }).map((_, index) => (
              <S.HiddenNumber key={index} />
            ))}
          </S.HiddenNumberContainer>
        </S.CardPreviewTextContainer>
        <S.CardPreviewTextContainer>
          <div>
            <S.PreviewText>
              {cardInformation.cardExpirationMonth.value}
            </S.PreviewText>
            {cardInformation.cardExpirationMonth.value.length === 2 && "/"}
            <S.PreviewText>
              {cardInformation.cardExpirationYear.value}
            </S.PreviewText>
          </div>
        </S.CardPreviewTextContainer>
        <S.CardPreviewTextContainer>
          <S.PreviewText>{cardInformation.cardOwnerName.value}</S.PreviewText>
        </S.CardPreviewTextContainer>
      </S.CardInfoContainer>
    </S.CardContainer>
  );
}
