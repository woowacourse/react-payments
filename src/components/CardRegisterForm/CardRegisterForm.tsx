import CardCompanySelect from "../CardCompanySelect/CardCompanySelect";
import CardExpiryInput from "../CardExpiryInput/CardExpiryInput";
import CardNumbersInput from "../CardNumbersInput/CardNumbersInput";
import CVCInput from "../CVCInput/CVCInput";
import styles from "./CardRegisterForm.module.css";
import { useCardContext } from "../../contexts/CardContext";
import PasswordInput from "../PasswordInput/PasswordInput";
import RegisterCardButton from "../RegisterCardButton/RegisterCardButton";

const CardRegisterForm = () => {
  const {
    showCardCompanySelect,
    showExpiryInput,
    showCVCInput,
    showPasswordInput,
    isValidForm,
  } = useCardContext();
  return (
    <form>
      {showPasswordInput && (
        <div className={styles.fadeInWrapper}>
          <PasswordInput />
        </div>
      )}
      {showCVCInput && (
        <div className={styles.fadeInWrapper}>
          <CVCInput />
        </div>
      )}
      {showExpiryInput && (
        <div className={styles.fadeInWrapper}>
          <CardExpiryInput />
        </div>
      )}
      {showCardCompanySelect && (
        <div className={styles.fadeInWrapper}>
          <CardCompanySelect />
        </div>
      )}
      <CardNumbersInput />
      {isValidForm && <RegisterCardButton />}
    </form>
  );
};

export default CardRegisterForm;
