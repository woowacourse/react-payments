import CardFormSection from "../../components/CardForm/CardFormSection/CardFormSection";
import CardPreview from "../../components/CardForm/CardPreview/CardPreview";
import Button from "../../components/Common/Button/Button";
import { CARD_FORM_TYPE } from "../../constants/card";
import { useCardSubmit } from "../../hooks/useCardSubmit";
import useSequentialForm from "../../hooks/useSequentialForm";
import { CardFormScrollStyles, CardFormStyles } from "./CardForm.styled";

export default function CardForm() {
  const { handleSubmit, isFormComplete } = useCardSubmit();
  const { shouldShowField } = useSequentialForm();

  return (
    <CardFormStyles onSubmit={handleSubmit}>
      <CardPreview />
      <CardFormScrollStyles>
        {shouldShowField(CARD_FORM_TYPE.password) && (
          <CardFormSection type={CARD_FORM_TYPE.password} />
        )}
        {shouldShowField(CARD_FORM_TYPE.cvcNumber) && (
          <CardFormSection type={CARD_FORM_TYPE.cvcNumber} />
        )}
        {shouldShowField(CARD_FORM_TYPE.expirationPeriod) && (
          <CardFormSection type={CARD_FORM_TYPE.expirationPeriod} />
        )}
        {shouldShowField(CARD_FORM_TYPE.cardCompany) && (
          <CardFormSection type={CARD_FORM_TYPE.cardCompany} />
        )}
        {shouldShowField(CARD_FORM_TYPE.cardNumber) && (
          <CardFormSection type={CARD_FORM_TYPE.cardNumber} />
        )}
      </CardFormScrollStyles>
      {isFormComplete && <Button type="submit" text="확인" />}
    </CardFormStyles>
  );
}
