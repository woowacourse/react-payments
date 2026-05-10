import styled from "@emotion/styled";
import CardPreview from "./cardPreview/CardPreview";
import CardNumber from "./cardInfo/cardNumber/CardNumber";
import PaymentProvider from "../context/PaymentProvider";
import ConditionalCardBrand from "./conditional/ConditionalCardBrand";
import ConditionalExpireDate from "./conditional/ConditionalExpireDate";
import ConditionalCvc from "./conditional/ConditionalCvc";
import ConditionalPassword from "./conditional/ConditionalPassword";

export default function PaymentWidget() {
  return (
    <PaymentProvider>
      <CardPaymentWidgetWrapper>
        <CardPreview />

        <ConditionalPassword />
        <ConditionalCvc />
        <ConditionalExpireDate />
        <ConditionalCardBrand />
        <CardNumber />
      </CardPaymentWidgetWrapper>
    </PaymentProvider>
  );
}

const CardPaymentWidgetWrapper = styled.div`
  background-color: white;
  width: 376px;
  height: 750px;
  border-radius: 10px;
  padding: 0 20px 20px 20px;
  overflow-y: auto;
`;
