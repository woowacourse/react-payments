import CardCompanySelect from "../../components/CardCompanySelect/CardCompanySelect";
import CardExpiryInput from "../../components/CardExpiryInput/CardExpiryInput";
import CardNumbersInput from "../../components/CardNumbersInput/CardNumbersInput";
import CVCInput from "../../components/CVCInput/CVCInput";
import styles from "./CardRegisterForm.module.css";
import { useCardContext } from "../../contexts/CardContext";
import PasswordInput from "../../components/PasswordInput/PasswordInput";
import RegisterCardButton from "../../components/RegisterCardButton/RegisterCardButton";

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
