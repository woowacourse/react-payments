import { CARD_INPUT_TYPE } from "../../../constants/constants";
import CardInputSection from "../CardInputSection/CardInputSection";
import CardPreview from "../CardPreview/CardPreview";
import { CardPaymentsPageCSS } from "./CardPaymentsPage.styled";

function CardPaymentsPage() {
  return (
    <CardPaymentsPageCSS>
      <CardPreview />
      <CardInputSection type={CARD_INPUT_TYPE.cvcNumber} />
      <CardInputSection type={CARD_INPUT_TYPE.expirationPeriod} />
      <CardInputSection type={CARD_INPUT_TYPE.cardCompany} />
      <CardInputSection type={CARD_INPUT_TYPE.cardNumbers} />
    </CardPaymentsPageCSS>
  );
}

export default CardPaymentsPage;
