import { CARD_FORM_TYPE } from "../../../constants/constants";
import { CardProvider } from "../../../contexts/CardContext";
import { CardValidationProvider } from "../../../contexts/CardValidationContext";
import CardFormSection from "../CardFormSection/CardFormSection";
import CardPreview from "../CardPreview/CardPreview";
import {
  CardFormCSS,
  CardFormScrollCSS,
  CardPaymentsPageCSS,
} from "./CardPaymentsPage.styled";

export default function CardPaymentsPage() {
  return (
    <CardProvider>
      <CardValidationProvider>
        <CardPaymentsPageCSS>
          <CardFormCSS>
            <CardPreview />
            <CardFormScrollCSS>
              <CardFormSection type={CARD_FORM_TYPE.password} />
              <CardFormSection type={CARD_FORM_TYPE.cvcNumber} />
              <CardFormSection type={CARD_FORM_TYPE.expirationPeriod} />
              <CardFormSection type={CARD_FORM_TYPE.cardCompany} />
              <CardFormSection type={CARD_FORM_TYPE.cardNumbers} />
            </CardFormScrollCSS>
          </CardFormCSS>
        </CardPaymentsPageCSS>
      </CardValidationProvider>
    </CardProvider>
  );
}
