import TermsOfUseContainer from "component/TermsOfUseContainer/TermsOfUseContainer";
import TotalPaymentContainer from "component/TotalPaymentContainer/TotalPaymentContainer";
import CardSlider from "component/CardSlider/CardSlider";
import { ColumnFlexWrapper, RowFlexWrapper } from "styles/wrapper";
import PaymentButton from "component/PaymentButton/PaymentButton.component";
import { useState } from "react";

function PaymentPage({ price }: { price: number }) {
  const [checked, setChecked] = useState<boolean>(false);
  return (
    <ColumnFlexWrapper width="375px" gap="50">
      <CardSlider />
      <TotalPaymentContainer price={price} />
      <TermsOfUseContainer setChecked={setChecked} />
      <RowFlexWrapper gap="25">
        <PaymentButton checked={checked}>결제하기</PaymentButton>
        <PaymentButton>취소하기</PaymentButton>
      </RowFlexWrapper>
    </ColumnFlexWrapper>
  );
}

export default PaymentPage;
