import { useNavigate } from 'react-router-dom';
import Button from '../common/button/Button';
import { INITIAL_CARD, ROUTER } from '../../global/constants';
import styles from './RegisterComplete.module.css';
import useCard from '../../hooks/useCard';

function RegisterComplete() {
  const {
    cardNumbers,
    cardIssuer,
    setCardNumbers,
    setCardIssuer,
    setExpiryDate,
    setCardCVC,
    setPassword,
  } = useCard();
  const navigate = useNavigate();

  function navigateMainPage(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();

    initForm();
    navigate(ROUTER.main);
  }

  function initForm() {
    setCardNumbers(INITIAL_CARD.cardNumbers);
    setCardIssuer(INITIAL_CARD.cardIssuer);
    setExpiryDate(INITIAL_CARD.expiryDate);
    setCardCVC(INITIAL_CARD.cardCVC);
    setPassword(INITIAL_CARD.password);
  }

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <img src='/CompleteIcon.png' alt='등록 완료 아이콘' />
        <p className='tx-xl'>{cardNumbers[0]}로 시작하는</p>
        <p className='tx-xl'>{cardIssuer}가 등록되었어요.</p>
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
