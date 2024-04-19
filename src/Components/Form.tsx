import FormField from "./FormField";

const Form = () => {
  return (
    <form>
      <FormField.CardNumberField />
      <FormField.CardValidityPeriodField />
      <FormField.CardOwnerField />
    </form>
  );
};

export default Form;
