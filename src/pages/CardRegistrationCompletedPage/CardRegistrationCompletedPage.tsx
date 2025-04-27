import { useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import styles from './CardRegistrationCompletedPage.module.css';
import { FaCircleCheck } from 'react-icons/fa6';

export default function CardRegistrationCompletedPage() {
  const navigate = useNavigate();

  const handleGoToCardRegistrationPage = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <FaCircleCheck size={76} />
      <p className={styles.description}>
        로 시작하는
        <br /> 가 등록되었어요.
      </p>
      <Button text="확인" height="44px" borderRadius="5px" onClick={handleGoToCardRegistrationPage} />
    </div>
  );
}
