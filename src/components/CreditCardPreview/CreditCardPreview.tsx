import S from "./style";
import MasterLogo from "@/assets/MasterLogo.svg?react";
import VisaLogo from "@/assets/VisaLogo.svg?react";
import { theme } from "@/style/theme";

type CardType = "VISA" | "MASTER" | "NONE";

interface Props {
  cardType: CardType;
  cardNumbers: string[];
  expirationDate: string;
  ownerName: string;
}
const CreditCardPreview = ({
  cardType,
  cardNumbers,
  expirationDate,
  ownerName,
}: Props) => {
  return (
    <S.CardWrapper>
      <S.FlexBox>
        <S.LogoBox color={theme.COLOR.gold}></S.LogoBox>
        <S.LogoBox color={theme.COLOR.white}>
          {cardType === "VISA" ? (
            <VisaLogo />
          ) : cardType === "MASTER" ? (
            <MasterLogo />
          ) : null}
        </S.LogoBox>
      </S.FlexBox>

      <S.CreditCardInfo>
        <S.CardNumbers>
          {cardNumbers.map((number: string, index) => {
            const isMasked = index >= 2;
            return isMasked ? (
              <S.Input
                key={index}
                type="password"
                value={number}
                readOnly
                $center
              ></S.Input>
            ) : (
              <S.Input
                key={index}
                type="text"
                value={number}
                readOnly
                $center
              ></S.Input>
            );
          })}
        </S.CardNumbers>

        <S.Input type="text" value={expirationDate} readOnly></S.Input>
        <S.Input type="text" value={ownerName} readOnly></S.Input>
      </S.CreditCardInfo>
    </S.CardWrapper>
  );
};

export default CreditCardPreview;
