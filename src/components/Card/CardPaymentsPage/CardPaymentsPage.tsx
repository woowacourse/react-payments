import { CARD_FORM_TYPE } from "../../../constants/constants";
import CardFormSections from "../CardFormSection/CardFormSection";
import CardPreview from "../CardPreview/CardPreview";
import { CardPaymentsPageCSS } from "./CardPaymentsPage.styled";

function CardPaymentsPage() {
  return (
    <CardPaymentsPageCSS>
      <CardPreview />
      <CardFormSections type={CARD_FORM_TYPE.cvcNumber} />
      <CardFormSections type={CARD_FORM_TYPE.expirationPeriod} />
      <CardFormSections type={CARD_FORM_TYPE.cardCompany} />
      <CardFormSections type={CARD_FORM_TYPE.cardNumbers} />
    </CardPaymentsPageCSS>
  );
}

export default CardPaymentsPage;
