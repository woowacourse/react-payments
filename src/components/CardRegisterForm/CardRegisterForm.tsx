import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";
import CardExpiryInput from "../CardExpiryInput/CardExpiryInput";
import CardNumbersInput from "../CardNumbersInput/CardNumbersInput";
import CVCInput from "../CVCInput/CVCInput";
import styles from "./CardRegisterForm.module.css";
import { useCardContext } from "../../contexts/CardContext";

const CardRegisterForm = () => {
  const { isValidCardNumbers, isValidCardCompany, isValidExpiry } =
    useCardContext();
  return (
    <form>
      {isValidExpiry && (
        <div className={styles.fadeInWrapper}>
          <CVCInput />
        </div>
      )}
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
    </form>
  );
};

export default CardRegisterForm;
