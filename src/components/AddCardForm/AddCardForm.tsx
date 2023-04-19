import styles from './AddCardForm.module.css';
import Input from '../Input/Input';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import NextButton from '../NextButton/NextButton';

const AddCardForm = () => {
  return (
    <form className={styles.container}>
      <CardInfoInput title="카드 번호">
        <Input width="100%" />
      </CardInfoInput>
      <CardInfoInput title="만료일">
        <Input width="40%" />
      </CardInfoInput>
      <CardInfoInput title="카드 소유자 이름 (선택)" numberOfLetter={[0, 30]}>
        <Input width="100%" />
      </CardInfoInput>
      <CardInfoInput title="보안 코드(CVC/CVV)">
        <Input width="30%" />
      </CardInfoInput>
      <CardInfoInput title="카드 비밀번호">
        <Input width="15%" />
        <Input width="15%" />
      </CardInfoInput>
      <div className={styles.button}>
        <NextButton />
      </div>
    </form>
  );
};

export default AddCardForm;
