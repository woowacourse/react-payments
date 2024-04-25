import CardNumberField from "../FormField/CardNumberField";
import CardOwnerField from "../FormField/CardOwnerField";
import CardValidityPeriodField from "../FormField/CardValidityPeriodField";
import ErrorContextProvider from "./ErrorContextProvider";

const Form = () => {
  return (
    <form>
      <ErrorContextProvider>
        <CardNumberField />
        <CardValidityPeriodField />
        <CardOwnerField />
      </ErrorContextProvider>
    </form>
  );
};

export default Form;
