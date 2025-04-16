import { INPUT_TYPE } from "../../constants/constants";
import InputForm from "../InputForm/InputForm";
import Preview from "../Preview/Preview";
import { PaymentsCSS } from "./Payments.styled";

function Payments() {
  const cardNumbers = ["1234", "1233", "1232", "1211"];
  const expirationPeriod = ["02", "13"];

  return (
    <PaymentsCSS>
      <Preview
        cardNumbers={cardNumbers}
        expirationPeriod={expirationPeriod}
      ></Preview>
      <InputForm type={INPUT_TYPE.cardNumber} />
      <InputForm type={INPUT_TYPE.expirationPeriod}></InputForm>
      <InputForm type={INPUT_TYPE.cvcNumber}></InputForm>
    </PaymentsCSS>
  );
}

export default Payments;
