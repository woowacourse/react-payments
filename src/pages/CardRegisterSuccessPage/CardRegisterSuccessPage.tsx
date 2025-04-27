import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import styles from './CardRegisterSuccessPage.module.css';
import { CARD_BRANDS } from '../../constants/cardBrand';

export const CardRegisterSuccessPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { cardNumbers, brand } = location.state as {
    cardNumbers: string[];
    brand: keyof typeof CARD_BRANDS;
  };
  const firstCardNumbers = cardNumbers[0];

  const handleClick = () => {
    navigate('/react-payments/');
  };

  return (
    <div className={styles['container']}>
      <div className={styles['small-container']}>
        <img
          className={styles['check-image']}
          src="./check.png"
          alt="체크 아이콘"
        />
        <p className={styles.text}>
          {firstCardNumbers}로 시작하는
          <br />
          {CARD_BRANDS[brand]}카드가 등록되었어요.
        </p>
        <Button text="확인" onClick={handleClick} />
      </div>
    </div>
  );
};
