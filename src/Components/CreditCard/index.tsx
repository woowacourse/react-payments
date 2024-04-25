import useContextWrapper from "../../hooks/useContextWrapper";
import { CardUIHeadOrTailContext } from "../../routes/Payments/CardInfoContextProvider";
import CreditCardHead from "./CreditCardHead";
import CreditCardTail from "./CreditCardTail";

function CreditCard() {
  const { value: cardHeadOrTail } = useContextWrapper(CardUIHeadOrTailContext)[0];

  const renderComponent = {
    head: <CreditCardHead />,
    tail: <CreditCardTail />,
  };

  return renderComponent[cardHeadOrTail];
}

export default CreditCard;
