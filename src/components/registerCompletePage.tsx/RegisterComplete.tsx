import { useNavigate } from 'react-router-dom';
import Button from '../common/button/Button';
import { ROUTER } from '../../global/constants';
import styles from './RegisterComplete.module.css';
import useCard from '../../hooks/useCard';

function RegisterComplete() {
  const { cardNumbers, cardIssuer } = useCard();
  const navigate = useNavigate();

  function navigateMainPage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    navigate(ROUTER.main);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img src='./CompleteIcon.png' alt='등록 완료 아이콘' />
        <p className='tx-lg'>{cardNumbers[0]}로 시작하는</p>
        <p className='tx-lg'>{cardIssuer}가 등록되었어요.</p>
        <Button
          type='button'
          name='goToMainButton'
          handleButtonClick={navigateMainPage}
          title='확인'
          className={styles.goToMainButton}
        />
      </div>
    </section>
  );
}

export default RegisterComplete;
