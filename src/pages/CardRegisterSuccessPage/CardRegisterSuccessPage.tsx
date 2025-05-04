import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../../components/common/Button/Button';
import styles from './CardRegisterSuccessPage.module.css';
import { CARD_BRANDS } from '../../constants/cardBrand';
import { useCardFormContext } from '../../context/CardFormContext';

type CardBrandKey = keyof typeof CARD_BRANDS;

type CardRegisterSuccessState = {
  numbers: string[];
  brand: CardBrandKey;
};

export const CardRegisterSuccessPage = () => {
  const { resetForm } = useCardFormContext();
  const navigate = useNavigate();
  const location = useLocation();
  const { numbers, brand } = location.state as CardRegisterSuccessState;
  const firstCardNumbers = numbers[0];

  const handleClick = () => {
    resetForm();
    navigate('/payments/');
  };

  return (
    <div className={styles['container']}>
      <div className={styles['small-container']}>
        <img
          className={styles['check-image']}
          src="./check.png"
          alt="체크 아이콘"
        />
        <p className={styles.text} data-testid="success-message">
          {firstCardNumbers}로 시작하는
          <br />
          {CARD_BRANDS[brand]}가 등록되었어요.
        </p>
        <Button text="확인" onClick={handleClick} />
      </div>
    </div>
  );
};
