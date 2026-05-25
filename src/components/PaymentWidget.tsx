import styled from "@emotion/styled";
import CardPreview from "./cardPreview/CardPreview";
import TotalInfo from "./cardInfo/TotalInfo";
import PaymentProvider from "../context/PaymentProvider";

export default function PaymentWidget() {
  return (
    <PaymentProvider>
      <CardPaymentWidgetWrapper>
        <CardPreview />
        <TotalInfo />
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
  position: relative;
  flex-direction: column;
`;
