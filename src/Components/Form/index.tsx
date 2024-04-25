import CardCVCField from "../FormField/CardCVCField";
import CardIssuerField from "../FormField/CardIssuerField";
import CardNumberField from "../FormField/CardNumberField";
import CardOwnerField from "../FormField/CardOwnerField";
import CardPasswordField from "../FormField/CardPasswordField";
import CardValidityPeriodField from "../FormField/CardValidityPeriodField";
import FormContextProvider from "./FormContextProvider";

const Form = () => {
  return (
    <form>
      <FormContextProvider>
        <CardPasswordField />
        <CardCVCField />
        <CardOwnerField />
        <CardValidityPeriodField />
        <CardIssuerField />
        <CardNumberField />
      </FormContextProvider>
    </form>
  );
};

export default Form;
