import CardFormSection from "../../components/CardForm/CardFormSection/CardFormSection";
import CardPreview from "../../components/CardForm/CardPreview/CardPreview";
import Button from "../../components/Common/Button/Button";
import { CARD_FORM_TYPE } from "../../constants/constants";
import { useCardSubmit } from "../../hooks/useCardSubmit";
import { CardFormScrollStyles, CardFormStyles } from "./CardForm.styled";

export default function CardForm() {
  const { handleSubmit, isFormComplete } = useCardSubmit();

  return (
    <CardFormStyles onSubmit={handleSubmit}>
      <CardPreview />
      <CardFormScrollStyles>
        <CardFormSection type={CARD_FORM_TYPE.password} />
        <CardFormSection type={CARD_FORM_TYPE.cvcNumber} />
        <CardFormSection type={CARD_FORM_TYPE.expirationPeriod} />
        <CardFormSection type={CARD_FORM_TYPE.cardCompany} />
        <CardFormSection type={CARD_FORM_TYPE.cardNumbers} />
      </CardFormScrollStyles>
      {isFormComplete && <Button type="submit" text="확인" />}
    </CardFormStyles>
  );
}
