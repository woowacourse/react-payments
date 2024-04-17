import S from "./style";
import MasterLogo from "@/assets/MasterLogo.svg?react";
import VisaLogo from "@/assets/VisaLogo.svg?react";

const CreditCardPreview = () => {
  return (
    <S.CardWrapper>
      <MasterLogo />
      <VisaLogo />
      <S.CreditCardInfo>
        <S.CardNumbers>
          <S.Input type="text" value="1234" readOnly></S.Input>
          <S.Input type="text" value="1234" readOnly></S.Input>
          <S.Input type="password" value="4534" readOnly></S.Input>
          <S.Input type="password" value="1234" readOnly></S.Input>
        </S.CardNumbers>
        <S.Input type="text" readOnly></S.Input>
        <S.Input type="text" readOnly></S.Input>
      </S.CreditCardInfo>
    </S.CardWrapper>
  );
};

export default CreditCardPreview;
