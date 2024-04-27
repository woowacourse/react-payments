import Button from '../common/Button/Button';
import styles from './ConfirmAddCardPage.module.css';
import Check from '../../imgs/check.svg';

import { useNavigate, useParams } from 'react-router-dom';

export default function ConfirmAddCardPage() {
  const { firstNumber, cardIssuer } = useParams();

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <img src={Check} alt="확인" />
      <p className={styles.message}>
        {`${firstNumber}로 시작하는`}
        <br />
        {`${cardIssuer?.includes('카드') ? cardIssuer : `${cardIssuer}카드`}가 등록되었어요.`}
      </p>
      <Button type="button" theme="confirm" onClick={handleClick} text="확인" />
    </div>
  );
}
