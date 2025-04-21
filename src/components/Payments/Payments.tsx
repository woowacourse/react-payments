import InputSection from "../\bInputSection/InputSection";
import { INPUT_TYPE } from "../../constants/constants";
import Preview from "../Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";

function Payments() {
  return (
    <PaymentsCSS>
      <Preview />
      <InputSection type={INPUT_TYPE.cardNumbers} />
      <InputSection type={INPUT_TYPE.expirationPeriod} />
      <InputSection type={INPUT_TYPE.cvcNumber} />
    </PaymentsCSS>
  );
}

export default Payments;
