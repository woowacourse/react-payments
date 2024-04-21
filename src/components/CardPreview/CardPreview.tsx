import { getCardBrandImg } from "../../utils/getCardBrand";
import * as S from "./style";

interface Props {
  cardInformation: CardInformation;
}

export default function CardPreview({ cardInformation }: Props) {
  const cardBrandImg = getCardBrandImg(cardInformation.cardNumbers[0].value);

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
