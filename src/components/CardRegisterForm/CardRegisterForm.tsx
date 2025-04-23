import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";
import CardExpiryInput from "../CardExpiryInput/CardExpiryInput";
import CardNumbersInput from "../CardNumbersInput/CardNumbersInput";
import CVCInput from "../CVCInput/CVCInput";

const CardRegisterForm = () => {
  return (
    <form>
      <CardNumbersInput />
      <CardCompanySelect />
      <CardExpiryInput />
      <CVCInput />
    </form>
  );
};

export default CardRegisterForm;