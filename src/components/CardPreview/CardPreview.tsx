import useCardAddForm from "../../hooks/useCardAddForm";
import useFocusField from "../../hooks/useFieldFocus";

import Card from "./components";

import { CARD_COMPANY_COLOR } from "../../constants/card-app";

const CardPreview = () => {
  const { formState } = useCardAddForm();
  const { isFocused: isCvcFieldFocused } = useFocusField("cvc-number");

  const cardColor = CARD_COMPANY_COLOR[formState.cardCompany.value];

  return (
    <>
      {isCvcFieldFocused ? (
        <Card cardColor="#D5D5D5">
          <Card.CVCLine cvcNumber={formState.cvcNumber.value} />
        </Card>
      ) : (
        <Card cardColor={cardColor}>
          <Card.CardHeader value={formState.cardNumbers.value} />
          <Card.CardBody>
            <Card.CardNumber value={formState.cardNumbers.value} />
            <Card.ExpirationDate value={formState.expirationDate.value} />
            <Card.CardOwner value={formState.ownerName.value} />
          </Card.CardBody>
        </Card>
      )}
    </>
  );
};

export default CardPreview;
