import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";
import CardExpiryInput from "../CardExpiryInput/CardExpiryInput";
import CardNumbersInput from "../CardNumbersInput/CardNumbersInput";
import CVCInput from "../CVCInput/CVCInput";
import styles from "./CardRegisterForm.module.css";
import { useCardContext } from "../../contexts/CardContext";

const CardRegisterForm = () => {
  const { isValidCardNumbers, isValidCardCompany } = useCardContext();
  return (
    <form>
      {isValidCardCompany && (
        <div className={styles.fadeInWrapper}>
          <CardExpiryInput />
        </div>
      )}
      {isValidCardNumbers && (
        <div className={styles.fadeInWrapper}>
          <CardCompanySelect />
        </div>
      )}
      <CardNumbersInput />
      {/* <CardCompanySelect />
      <CardExpiryInput />
      <CVCInput /> */}
    </form>
  );
};

export default CardRegisterForm;
