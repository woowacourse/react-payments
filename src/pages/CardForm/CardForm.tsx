import CardFormSection from "../../components/CardForm/CardFormSection/CardFormSection";
import CardPreview from "../../components/CardForm/CardPreview/CardPreview";
import Button from "../../components/Common/Button/Button";
import { CARD_FORM_TYPE } from "../../constants/constants";
import { CardProvider } from "../../contexts/CardContext";
import { CardValidationProvider } from "../../contexts/CardValidationContext";
import {
  CardFormContainerCSS,
  CardFormScrollCSS,
  CardFormWrapperCSS,
} from "./CardForm.styled";

export default function CardForm() {
  return (
    <CardProvider>
      <CardValidationProvider>
        <CardFormContainerCSS>
          <CardFormWrapperCSS>
            <CardPreview />
            <CardFormScrollCSS>
              <CardFormSection type={CARD_FORM_TYPE.password} />
              <CardFormSection type={CARD_FORM_TYPE.cvcNumber} />
              <CardFormSection type={CARD_FORM_TYPE.expirationPeriod} />
              <CardFormSection type={CARD_FORM_TYPE.cardCompany} />
              <CardFormSection type={CARD_FORM_TYPE.cardNumbers} />
            </CardFormScrollCSS>
            <Button type="submit" text="확인" />
          </CardFormWrapperCSS>
        </CardFormContainerCSS>
      </CardValidationProvider>
    </CardProvider>
  );
}
