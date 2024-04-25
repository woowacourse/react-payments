import S from "./CreditCardPreview.styled";
import MasterLogo from "@/assets/MasterLogo.svg?react";
import VisaLogo from "@/assets/VisaLogo.svg?react";
import { theme } from "@/style/theme";

export type CardBrand = "VISA" | "MASTER" | "NONE";
const companyColor = {
  BC카드: "#F04651",
  신한카드: "#0046FF",
  카카오뱅크: "#FFE600",
  현대카드: "#000000",
  우리카드: "#007BC8",
  롯데카드: "#ED1C24",
  하나카드: "#009490",
  국민카드: "#6A6056",
  NONE: "#333333",
};

interface Props {
  cardBrand: CardBrand;
  cardNumbers: string[];
  expirationDate: string;
  ownerName: string;
  cardCompany: keyof typeof companyColor;
}

const CreditCardPreview = ({ cardBrand, cardNumbers, expirationDate, ownerName, cardCompany }: Props) => {
  return (
    <S.CardWrapper $background={companyColor[cardCompany]}>
      <S.FlexBox>
        <S.LogoBox color={theme.COLOR.gold}></S.LogoBox>

        {cardBrand === "VISA" ? (
          <S.LogoBox color={theme.COLOR.white}>
            <VisaLogo />
          </S.LogoBox>
        ) : cardBrand === "MASTER" ? (
          <S.LogoBox color={theme.COLOR.white}>
            <MasterLogo />
          </S.LogoBox>
        ) : null}
      </S.FlexBox>

      <S.CreditCardInfo>
        <S.CardNumbers>
          {cardNumbers.map((number: string, index) => {
            const isMasked = index >= 2;
            const type = isMasked ? "password" : "text";
            return <S.Input key={index} type={type} value={number} readOnly />;
          })}
        </S.CardNumbers>
        <S.Input type="text" value={expirationDate} readOnly></S.Input>
        <S.Input type="text" value={ownerName} readOnly></S.Input>
      </S.CreditCardInfo>
    </S.CardWrapper>
  );
};

export default CreditCardPreview;
