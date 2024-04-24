import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from '@components/common';

import { SuccessCircle } from '@assets/images';

import styles from './CardRegisterCompletePage.module.css';

const CardRegisterCompletePage = () => {
  const navigate = useNavigate();
  const {
    state: { cardPassword, cardBrand },
  } = useLocation();

  return (
    <div className={styles.cardRegisterCompletePageContainer}>
      <img className={styles.successCircle} src={SuccessCircle} alt="successCircle" />
      <p className={styles.cardRegisterDescription}>
        {cardPassword}로 시작하는 <br /> {cardBrand}가 등록되었습니다.
      </p>
      <Button
        onClick={() => {
          navigate('/');
        }}
      >
        확인
      </Button>
    </div>
  );
};

export default CardRegisterCompletePage;
