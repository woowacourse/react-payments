import styled from "@emotion/styled";
import Cvc from "./cardInfo/cvc/Cvc";
import CardPreview from "./cardPreview/CardPreview";
import CardNumber from "./cardInfo/cardNumber/CardNumber";
import ExpireDate from "./cardInfo/expireDate/ExpireDate";
import PaymentProvider from "../context/PaymentProvider";
import CardBrand from "./cardInfo/cardBrand/CardBrand";

export default function PaymentWidget() {
  return (
    <PaymentProvider>
      <CardPaymentWidgetWrapper>
        <CardPreview />

        <CardBrand />
        <CardNumber />
        <ExpireDate />
        <Cvc />
      </CardPaymentWidgetWrapper>
    </PaymentProvider>
  );
}

const CardPaymentWidgetWrapper = styled.div`
  background-color: white;
  width: 376px;
  height: 750px;
  border-radius: 10px;
  padding: 0 20px;
`;
