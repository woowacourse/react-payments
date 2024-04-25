import CardCVCField from "../FormField/CardCVCField";
import CardIssuerField from "../FormField/CardIssuerField";
import CardNumberField from "../FormField/CardNumberField";
import CardOwnerField from "../FormField/CardOwnerField";
import CardValidityPeriodField from "../FormField/CardValidityPeriodField";
import ErrorContextProvider from "./ErrorContextProvider";

const Form = () => {
  return (
    <form>
      <ErrorContextProvider>
        <CardCVCField />
        <CardOwnerField />
        <CardValidityPeriodField />
        <CardIssuerField />
        <CardNumberField />
      </ErrorContextProvider>
    </form>
  );
};

export default Form;
