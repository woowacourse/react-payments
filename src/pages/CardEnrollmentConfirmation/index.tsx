import { useMemo } from 'react';
import { useLocation } from 'react-router-dom';

import CheckMark from '../../assets/images/checkMark.svg';
import { CardPreview } from '../../components';
import { CARD_COMPANY } from '../../constants';
import useMoveToPage from '../../hooks/useMoveToPage';

import styles from './style.module.css';

const CARD = '카드';

function CardEnrollmentConfirmation() {
  const location = useLocation();
  const { navigateToPage } = useMoveToPage('cardEnrollment');

  const { state: data } = location.state;

  const handleBtnClick = () => {
    navigateToPage();
  };

  const cardCompanyName = useMemo(() => {
    const name = data.company?.name;
    const isEtc = name === CARD_COMPANY.get('etc')?.name;

    return isEtc ? CARD : name;
  }, [data.company]);

  return (
    <div className={styles.confirmation}>
      <div className={styles.cardPreviewContainer}>
        <CardPreview cardInfo={data} side="front" />
      </div>
      <section className={styles.message}>
        <img className={styles.checkMark} src={CheckMark} alt="check mark" />
        <p>{data.numbers?.[0]}로 시작하는</p>
        <p>{cardCompanyName}가 등록되었어요.</p>
      </section>
      <button className={styles.btn} type="button" onClick={handleBtnClick}>
        확인
      </button>
    </div>
  );
}

export default CardEnrollmentConfirmation;
