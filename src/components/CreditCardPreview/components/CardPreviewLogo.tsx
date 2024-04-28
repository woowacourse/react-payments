import S from "../style";
import { theme } from "@/style/theme";
import MasterLogo from "@/assets/MasterLogo.svg?react";
import VisaLogo from "@/assets/VisaLogo.svg?react";
import { CardNumberInputType } from "@/components/CardRegisterForm/components/CardNumbersField/CardNumbersField";
import { CARD_BRAND_INFO } from "@/constants/condition";
import React from "react";

const CardPreviewLogo = ({
  cardNumbers,
}: {
  cardNumbers: CardNumberInputType;
}) => {
  const checkCardBrand = (cardNumbers: string) => {
    if (Number(cardNumbers[0]) === CARD_BRAND_INFO.VISA.START_NUMBER) {
      return "VISA";
    }
    if (
      Number(cardNumbers.slice(0, 2)) <= CARD_BRAND_INFO.MASTER.END_NUMBER &&
      Number(cardNumbers.slice(0, 2)) >= CARD_BRAND_INFO.MASTER.START_NUMBER
    ) {
      return "MASTER";
    }
    return "NONE";
  };

  const cardTypeLogo = checkCardBrand(cardNumbers.cardNumbers1);

  return (
    <>
      {cardTypeLogo === "VISA" ? (
        <S.LogoBox color={theme.COLOR["grey-4"]}>
          <VisaLogo />
        </S.LogoBox>
      ) : cardTypeLogo === "MASTER" ? (
        <S.LogoBox color={theme.COLOR["grey-4"]}>
          <MasterLogo />
        </S.LogoBox>
      ) : null}
    </>
  );
};

const CardPreviewLogoMemo = React.memo(CardPreviewLogo);
export default CardPreviewLogoMemo;
