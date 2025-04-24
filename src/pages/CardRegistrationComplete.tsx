import ConfirmButton from '@/components/common/ComfirmButton/ConfirmButton';
import CheckIcon from '@assets/CheckIcon.png';
import buttonStyle from '../css/button.module.css';
import styles from './cardRegistrationComplete.module.css';
const CardRegistrationComplete = ({ firstNumber }: { firstNumber: string }) => {
  return (
    <div className={styles.container}>
      <img src={CheckIcon} alt="체크 아이콘" className={styles.checkIcon} />
      <div className={styles.text}>
        {firstNumber}로 시작하는
        <br /> BC카드가 등록되었어요
      </div>
      <div className={buttonStyle.buttonContainer}>
        <ConfirmButton
          type="button"
          text="확인"
          onClick={() => {}}
          className={buttonStyle.finish}
        />
      </div>
    </div>
  );
};

export default CardRegistrationComplete;
