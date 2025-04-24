import { useLocation } from 'react-router-dom';
import Button from '../../components/Button/Button';
import styles from './CardRegisterSuccessPage.module.css';
import { CARD_BRANDS } from '../../constants/cardBrand';

export const CardRegisterSuccessPage = () => {
  const location = useLocation();
  const { cardNumbers, brand } = location.state as {
    cardNumbers: string[];
    brand: keyof typeof CARD_BRANDS;
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
          {cardNumbers[0]}로 시작하는 {CARD_BRANDS[brand]}카드가 등록되었어요.
        </p>
        <Button text="확인" />
      </div>
    </div>
  );
};
