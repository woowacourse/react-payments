import { useEffect, useRef } from 'react';

import Card from '../../components/Card';
import Spacer from '../../components/common/Spacer';
import Input from '../../components/common/Input';

import useCardNicknameInputPage from './useCardNicknameInputPage';
import type { Focus } from '../../components/common/Input';
import type { CardInfo } from '../../domain/types/card';

import styles from './cardNicknameInputPage.module.css';

const CardNicknameInputPage = () => {
  const inputRef = useRef<Focus>(null);
  const {
    lastRegisteredCard,
    nickname,
    handleNicknameSubmit,
    handleNicknameChange,
  } = useCardNicknameInputPage();
  const {
    cardCompany,
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    expiredMonth,
    expiredYear,
    owner,
  } = lastRegisteredCard as CardInfo;

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={styles.container} onSubmit={handleNicknameSubmit}>
      <Spacer height={130} />
      <h1 className={`${styles.title} text-title`}>
        카드등록이 완료되었습니다.
      </h1>
      <Spacer height={36} />
      <Card
        cardCompany={cardCompany}
        cardNumber1={cardNumber1}
        cardNumber2={cardNumber2}
        cardNumber3={cardNumber3}
        cardNumber4={cardNumber4}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        owner={owner}
      />
      <Spacer height={124} />
      <form className={styles.formContainer}>
        <label>
          <Input
            id="card-nickname"
            className={styles.nicknameInput}
            type="text"
            value={nickname}
            onChange={handleNicknameChange}
            placeholder="카드 별칭 입력(선택)"
            ref={inputRef}
            aria-label="카드 별칭 입력(선택)"
          />
        </label>
        <Spacer height={130} />
        <button className={styles.submitButton}>확인</button>
        <Spacer height={30} />
      </form>
    </div>
  );
};

export default CardNicknameInputPage;
