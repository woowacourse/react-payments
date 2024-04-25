import CardCVCField from "../FormField/CardCVCField";
import CardIssuerField from "../FormField/CardIssuerField";
import CardNumberField from "../FormField/CardNumberField";
import CardOwnerField from "../FormField/CardOwnerField";
import CardPasswordField from "../FormField/CardPasswordField";
import CardValidityPeriodField from "../FormField/CardValidityPeriodField";
import FormContextProvider from "./FormContextProvider";
import FormRefContextProvider from "./FormRefContextProvider";

const Form = () => {
  return (
    <form>
      <FormContextProvider>
        <FormRefContextProvider>
          <CardPasswordField />
          <CardCVCField />
          <CardOwnerField />
          <CardValidityPeriodField />
          <CardIssuerField />
          <CardNumberField />
        </FormRefContextProvider>
      </FormContextProvider>
    </form>
  );
};

export default Form;
