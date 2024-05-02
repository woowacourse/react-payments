import S from "../style";
import { theme } from "@/style/theme";
import { CardNumberInputType } from "@/components/CardRegisterForm/components/CardNumbersField/CardNumbersField";
import { ExpirationPeriodInputType } from "@/components/CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";
import { CardBrandType, CardBrandTypeColor } from "@/constants/cardBrandType";
import CardPreviewLogo from "./CardPreviewLogo";
import CardPreviewNumbersMemo from "./CardPreviewNumbers";

interface Props {
  cardBrandType: CardBrandType | null;
  cardNumbers: CardNumberInputType;
  expirationDate: ExpirationPeriodInputType;
  ownerName: string | null;
}

const CardPreviewFront = ({
  expirationDate,
  ownerName,
  cardNumbers,
  cardBrandType,
}: Props) => {
  const cardTypeColor = cardBrandType
    ? CardBrandTypeColor[cardBrandType]
    : null;

  return (
    <S.CardInner $cardTypeColor={cardTypeColor} $isFront={true}>
      <S.FlexBox>
        <S.LogoBox color={theme.COLOR["gold-1"]}></S.LogoBox>
        <CardPreviewLogo cardNumbers={cardNumbers} />
      </S.FlexBox>

      <S.CreditCardInfo>
        <CardPreviewNumbersMemo
          cardBrandType={cardBrandType}
          cardNumbers={cardNumbers}
        />
        <S.Input
          $isWhite={cardBrandType !== "카카오뱅크"}
          type="text"
          value={
            expirationDate.expirationMonth &&
            [
              expirationDate.expirationMonth,
              expirationDate.expirationYear,
            ].join("/")
          }
          readOnly
        />
        <S.Input
          $isWhite={cardBrandType !== "카카오뱅크"}
          type="text"
          value={ownerName ? ownerName : ""}
          readOnly
        />
      </S.CreditCardInfo>
    </S.CardInner>
  );
};

export default CardPreviewFront;
