import Input from '../common/Input';

import styles from './cardNameForm.module.css';

const CardNameForm = () => {
  return (
    <form>
      <div className={styles.inputContainer}>
        <Input type="text" align="center" />
      </div>
      <div className={styles.buttonContainer}>
        <button>확인</button>
      </div>
    </form>
  );
};

export default CardNameForm;
