import React, { useMemo, useState } from 'react';
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

  // const data: CardInfo = {
  //   userName: 'BADA',
  //   numbers: [1234, 1234, 1234, 1234],
  //   mark: 'etc',
  //   period: { month: '01', year: '25' },
  //   company: CARD_COMPANY.get('sinhan') || null,
  //   cvc: '123',
  //   password: '12',
  // };

  const handleClick = () => {
    navigateToPage();
  };

  const cardCompanyName = useMemo(() => {
    const name = data.company?.name;
    const isEtc = name === CARD_COMPANY.get('etc')?.name;

    return isEtc ? CARD : name;
  }, [data.company]);

  return (
    <div className={styles.confirmation}>
      <CardPreview cardInfo={data} side="front" />
      <section className={styles.message}>
        <img className={styles.checkMark} src={CheckMark} alt="check mark" />
        <p>{data.numbers?.[0]}로 시작하는</p>
        <p>{cardCompanyName}가 등록되었어요.</p>
      </section>
      <button className={styles.btn} type="button" onClick={handleClick}>
        확인
      </button>
    </div>
  );
}

export default CardEnrollmentConfirmation;
