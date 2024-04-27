import { getCardBrandImg } from "../../../utils/getCardBrand";
import { getCompanyColor } from "../../../utils/getCompanyColor";
import * as S from "./style";

interface Props {
  cardNumbers: string[];
  cardCompany: string;
  cardExpirationMonth: string;
  cardExpirationYear: string;
  cardOwnerName: string;
}

export default function CardPreviewFront({
  cardNumbers,
  cardCompany,
  cardExpirationMonth,
  cardExpirationYear,
  cardOwnerName,
}: Props) {
  const cardBrandImg = getCardBrandImg(cardNumbers[0]);

  return (
    <S.CardContainer cardCompanyColor={getCompanyColor(cardCompany)}>
      <S.CardHeader>
        <S.CardIC />
        {cardBrandImg && <S.CardBrandImg src={cardBrandImg} />}
      </S.CardHeader>
      <S.CardInfoContainer>
        <S.CardPreviewTextContainer>
          <S.PreviewText>{cardNumbers[0]}</S.PreviewText>
          <S.PreviewText>{cardNumbers[1]}</S.PreviewText>
          <S.HiddenNumberContainer>
            {Array.from({
              length: cardNumbers[2].length,
            }).map((_, index) => (
              <S.HiddenNumber key={index} />
            ))}
          </S.HiddenNumberContainer>
          <S.HiddenNumberContainer>
            {Array.from({
              length: cardNumbers[3].length,
            }).map((_, index) => (
              <S.HiddenNumber key={index} />
            ))}
          </S.HiddenNumberContainer>
        </S.CardPreviewTextContainer>
        <S.CardPreviewTextContainer>
          <div>
            <S.PreviewText>{cardExpirationMonth}</S.PreviewText>
            {cardExpirationMonth.length === 2 && "/"}
            <S.PreviewText>{cardExpirationYear}</S.PreviewText>
          </div>
        </S.CardPreviewTextContainer>
        <S.CardPreviewTextContainer>
          <S.PreviewText>{cardOwnerName}</S.PreviewText>
        </S.CardPreviewTextContainer>
      </S.CardInfoContainer>
    </S.CardContainer>
  );
}
