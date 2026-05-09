import styled from "@emotion/styled";
import Cvc from "./cardInfo/cvc/Cvc";
import CardTopSection from "./cardTopSection/CardTopSection";

export default function PaymentWidget() {
  return (
    <CardPaymentWidgetWrapper>
      <CardTopSection />
      <Cvc />
    </CardPaymentWidgetWrapper>
  );
}

const CardPaymentWidgetWrapper = styled.div`
  background-color: white;
  width: 376px;
  height: 750px;
  border-radius: 10px;
  padding: 0 20px;
`;
