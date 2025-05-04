import { useLocation, useNavigate } from 'react-router';
import Button from '../../components/Button/Button';
import styles from './CompletePage.module.css';
import { useEffect } from 'react';

export default function CompletePage() {
  const location = useLocation();

  const navigate = useNavigate();

  const handleGoToHome = () => {
    navigate('/');
  };

  useEffect(() => {
    if (!location.state) {
      navigate('/');
    }
  }, [location.state, navigate]);

  return (
    <div className={styles.wrapper}>
      <img src="images/checkIcon.png" width={76} height={76} />
      <h2 className={styles.text}>
        {location.state?.firstCardNumber}로 시작하는 <br />
        {location.state?.company}가 등록되었어요.
      </h2>
      <Button onClick={handleGoToHome}>확인</Button>
    </div>
  );
}
