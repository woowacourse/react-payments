import S from "./style";
import MasterLogo from "@/assets/MasterLogo.svg?react";
import VisaLogo from "@/assets/VisaLogo.svg?react";
import { theme } from "@/style/theme";
import { CardNumberInputType } from "../CardRegisterForm/components/CardNumbersField/CardNumbersField";
import { ExpirationPeriodInputType } from "../CardRegisterForm/components/ExpirationPeriodField/ExpirationPeriodField";
import { checkCardBrand } from "@/utils/validation";
import { CardType, CardTypeColor } from "@/constants/cardType";

interface Props {
  cardType: CardType | null;
  cardNumbers: CardNumberInputType;
  expirationDate: ExpirationPeriodInputType;
  ownerName: string | null;
}

const CreditCardPreview = ({
  expirationDate,
  ownerName,
  cardNumbers,
  cardType,
}: Props) => {
  const cardTypeLogo = checkCardBrand(cardNumbers.cardNumbers1);
  const cardTypeColor = cardType ? CardTypeColor[cardType] : null;

  return (
    <S.CardWrapper $cardTypeColor={cardTypeColor}>
      <S.FlexBox>
        <S.LogoBox color={theme.COLOR.gold}></S.LogoBox>

        {cardTypeLogo === "VISA" ? (
          <S.LogoBox color={theme.COLOR.white}>
            <VisaLogo />
          </S.LogoBox>
        ) : cardTypeLogo === "MASTER" ? (
          <S.LogoBox color={theme.COLOR.white}>
            <MasterLogo />
          </S.LogoBox>
        ) : null}
      </S.FlexBox>

      <S.CreditCardInfo>
        <S.CardNumbers>
          {Object.values(cardNumbers).map((number: string, index) => {
            const isMasked = index >= 2;
            return isMasked ? (
              <S.Input key={index} type="password" value={number} readOnly />
            ) : (
              <S.Input
                key={index}
                type="text"
                value={number}
                readOnly
              ></S.Input>
            );
          })}
        </S.CardNumbers>
        <S.Input
          type="text"
          value={
            expirationDate.expirationMonth &&
            [
              expirationDate.expirationMonth,
              expirationDate.expirationYear,
            ].join("/")
          }
          readOnly
        ></S.Input>
        <S.Input
          type="text"
          value={ownerName ? ownerName : ""}
          readOnly
        ></S.Input>
      </S.CreditCardInfo>
    </S.CardWrapper>
  );
};

export default CreditCardPreview;
