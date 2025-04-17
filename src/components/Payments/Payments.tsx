import { INPUT_TYPE } from "../../constants/constants";
import InputForm from "../InputForm/InputForm";
import Preview from "../Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";

function Payments() {
  return (
    <PaymentsCSS>
      <Preview />
      <InputForm type={INPUT_TYPE.cardNumbers} />
      <InputForm type={INPUT_TYPE.expirationPeriod} />
      <InputForm type={INPUT_TYPE.cvcNumber} />
    </PaymentsCSS>
  );
}

export default Payments;
