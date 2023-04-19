import styles from './AddCardForm.module.css';
import Input from '../Input/Input';
import CardInfoInput from '../CardInfoInput/CardInfoInput';
import NextButton from '../NextButton/NextButton';
import CardNumberInput from '../CardNumberInput/CardNumberInput';

const AddCardForm = () => {
  return (
    <form className={styles.container}>
      <CardNumberInput />
      <CardInfoInput title="만료일">
        <Input width="40%" value="" onChange={() => {}} />
      </CardInfoInput>
      <CardInfoInput title="카드 소유자 이름 (선택)" numberOfLetter={[0, 30]}>
        <Input width="100%" value="" onChange={() => {}} />
      </CardInfoInput>
      <CardInfoInput title="보안 코드(CVC/CVV)">
        <Input width="30%" value="" onChange={() => {}} />
      </CardInfoInput>
      <CardInfoInput title="카드 비밀번호">
        <Input width="15%" value="" onChange={() => {}} />
        <Input width="15%" value="" onChange={() => {}} />
      </CardInfoInput>
      <div className={styles.button}>
        <NextButton />
      </div>
    </form>
  );
};

export default AddCardForm;
