import S from "./style";
import MasterLogo from "@/assets/MasterLogo.svg?react";
import VisaLogo from "@/assets/VisaLogo.svg?react";
import { theme } from "@/style/theme";

type CardType = "VISA" | "MASTER";

interface Props {
  cardType: CardType;
}
const CreditCardPreview = ({ cardType }: Props) => {
  return (
    <S.CardWrapper>
      <S.FlexBox>
        <S.LogoBox color={theme.COLOR.gold}></S.LogoBox>
        <S.LogoBox color={theme.COLOR.white}>
          {cardType === "VISA" ? <VisaLogo /> : <MasterLogo />}
        </S.LogoBox>
      </S.FlexBox>

      <S.CreditCardInfo>
        <S.CardNumbers>
          <S.Input type="text" value="1234" readOnly center></S.Input>
          <S.Input type="text" value="1234" readOnly center></S.Input>
          <S.Input type="password" value="4534" readOnly center></S.Input>
          <S.Input type="password" value="1234" readOnly center></S.Input>
        </S.CardNumbers>
        <S.Input type="text" value="04/21" readOnly></S.Input>
        <S.Input type="text" value="LIM DONGJUN" readOnly></S.Input>
      </S.CreditCardInfo>
    </S.CardWrapper>
  );
};

export default CreditCardPreview;
