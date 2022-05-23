import TermsOfUseContainer from "component/TermsOfUseContainer/TermsOfUseContainer";
import TotalPaymentContainer from "component/TotalPaymentContainer/TotalPaymentContainer";
import CardSlider from "component/CardSlider/CardSlider";
import { ColumnFlexWrapper, RowFlexWrapper } from "styles/wrapper";
import PaymentButton from "component/PaymentButton/PaymentButton.component";

function PaymentPage() {
  return (
    <ColumnFlexWrapper width="375px" gap="50">
      <CardSlider />
      <TotalPaymentContainer price={326000} />
      <TermsOfUseContainer />
      <RowFlexWrapper gap="25">
        <PaymentButton>결제하기</PaymentButton>
        <PaymentButton>취소하기</PaymentButton>
      </RowFlexWrapper>
    </ColumnFlexWrapper>
  );
}

export default PaymentPage;
