import { useLocation, useNavigate } from 'react-router-dom';

import IMAGES from '../../assets/images';
import Button from '../../components/common/Button';

import styles from './style.module.css';

function CardRegisterSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardNumber, cardCompany } = location.state;

  const handleConfirmButtonClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.pageContainer}>
      <img
        className={styles.checkImg}
        src={IMAGES.check}
        alt="체크 아이콘 이미지"
      />
      <p className={styles.infoContainer}>
        <div>{cardNumber}로 시작하는</div>
        <div>{cardCompany}가 등록되었어요.</div>
      </p>
      <div className={styles.confirmButton}>
        <Button onClick={handleConfirmButtonClick}>확인</Button>
      </div>
    </div>
  );
}

export default CardRegisterSuccess;
