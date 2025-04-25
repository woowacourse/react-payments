import { useNavigate } from "react-router-dom";
import CardFormSection from "../../components/CardForm/CardFormSection/CardFormSection";
import CardPreview from "../../components/CardForm/CardPreview/CardPreview";
import Button from "../../components/Common/Button/Button";
import { CARD_FORM_TYPE } from "../../constants/constants";
import { CardFormScrollStyles } from "./CardForm.styled";
import { useCard } from "../../hooks/useCard";

const CARD_COMPANY_INFO = {
  "": "",
  bc: "BC카드",
  shinhan: "신한카드",
  kakaobank: "카카오뱅크",
  hyundai: "현대카드",
  woori: "우리카드",
  lotte: "롯데카드",
  hana: "하나카드",
  kb: "국민카드",
};

export default function CardForm() {
  const { cardCompany, cardNumbers } = useCard();
  const navigate = useNavigate();

  const handleRegister = () => {
    navigate("/register-complete", {
      state: {
        cardFirstSegment: cardNumbers.first,
        cardName: CARD_COMPANY_INFO[cardCompany],
      },
    });
  };

  return (
    <>
      <CardPreview />
      <CardFormScrollStyles>
        <CardFormSection type={CARD_FORM_TYPE.password} />
        <CardFormSection type={CARD_FORM_TYPE.cvcNumber} />
        <CardFormSection type={CARD_FORM_TYPE.expirationPeriod} />
        <CardFormSection type={CARD_FORM_TYPE.cardCompany} />
        <CardFormSection type={CARD_FORM_TYPE.cardNumbers} />
      </CardFormScrollStyles>
      <Button type="button" text="확인" onClick={handleRegister} />
    </>
  );
}
