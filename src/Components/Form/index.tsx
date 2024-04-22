import FormField from "../FormField";
import ErrorContextProvider from "./ErrorContextProvider";

const Form = () => {
  return (
    <form>
      <ErrorContextProvider>
        <FormField.CardNumberField />
        <FormField.CardValidityPeriodField />
        <FormField.CardOwnerField />
      </ErrorContextProvider>
    </form>
  );
};

export default Form;
