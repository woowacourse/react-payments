import ConfirmButton from '@/components/common/ComfirmButton/ConfirmButton';
import CheckIcon from '@assets/checkIcon.png';
import buttonStyle from '../css/button.module.css';
import styles from './cardRegistrationComplete.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { ROUTES } from '@/constants/routes';
const CardRegistrationComplete = () => {
  const nav = useNavigate();
  const location = useLocation();
  const { cardFirstNumber } = location.state as { cardFirstNumber: string };

  const handleClickConfirmButton = () => {
    nav(ROUTES.HOME);
  };

  return (
    <div className={styles.container}>
      <img src={CheckIcon} alt="체크 아이콘" className={styles.checkIcon} />
      <div className={styles.text}>
        {cardFirstNumber}로 시작하는
        <br /> BC카드가 등록되었어요
      </div>
      <div className={buttonStyle.buttonContainer}>
        <ConfirmButton
          type="button"
          text="확인"
          onClick={handleClickConfirmButton}
          className={buttonStyle.finish}
        />
      </div>
    </div>
  );
};

export default CardRegistrationComplete;
