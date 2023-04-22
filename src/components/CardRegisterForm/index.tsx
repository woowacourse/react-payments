import { FormEventHandler, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import Input, { Focus } from '../Input';
import Tooltip from '../Tooltip';
import TooltipButton from '../TooltipButton';
import useCardRegisterForm from './useCardRegisterForm';

import type { CardInfo } from '../../types/card';

import styles from './cardRegisterForm.module.css';

const today = new Date();
const currentYear = today.getFullYear() % 100;
const currentMonth = today.getMonth() + 1;

interface Props {
  registerCard: (card: CardInfo) => void;
}

const CardRegisterForm = ({ registerCard }: Props) => {
  const navigate = useNavigate();
  const inputRefs = Array.from({ length: 10 }).map(() => useRef<Focus>(null));
  const {
    cardNumber1,
    cardNumber2,
    cardNumber3,
    cardNumber4,
    expiredMonth,
    expiredYear,
    owner,
    cvc,
    cardPassword1,
    cardPassword2,

    setCardNumber1,
    setCardNumber2,
    setCardNumber3,
    setCardNumber4,
    setExpiredMonth,
    setExpiredYear,
    setCvc,
    setCardPassword1,
    setCardPassword2,

    isValidCardData,
    handleNumberChange,
    handleOwnerChange,
  } = useCardRegisterForm(inputRefs);

  const isValidExpiredDate = (month: number, year: number) => {
    if (month < 1 || month > 12) return false;
    if (year < currentYear) return false;
    if (year === currentYear && month <= currentMonth) return false;

    return true;
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!isValidExpiredDate(Number(expiredMonth), Number(expiredYear))) {
      alert('유효한 만료일이 아닙니다. 다시 입력해주세요.');
      inputRefs[4].current?.focus();
      return;
    }

    const cardData = {
      cardNumber1,
      cardNumber2,
      expiredMonth,
      expiredYear,
      owner: owner.trim(),
    };

    registerCard(cardData);
    navigate('/');
  };

  return (
    <>
      <Card
        cardNumber1={cardNumber1}
        cardNumber2={cardNumber2}
        cardNumber3={cardNumber3}
        cardNumber4={cardNumber4}
        owner={owner}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          카드 번호
          <div className={`${styles.inputContainer} ${styles.cardNumber}`}>
            <Input
              type="text"
              minLength={4}
              maxLength={4}
              required
              tabIndex={1}
              autoFocus
              value={cardNumber1}
              onChange={(e) => handleNumberChange(e, setCardNumber1)}
              ref={inputRefs[0]}
              placeholder="0000"
            />
            <span>-</span>
            <Input
              type="text"
              minLength={4}
              maxLength={4}
              required
              tabIndex={2}
              value={cardNumber2}
              onChange={(e) => handleNumberChange(e, setCardNumber2)}
              ref={inputRefs[1]}
              placeholder="0000"
            />
            <span>-</span>
            <Input
              type="password"
              minLength={4}
              maxLength={4}
              required
              tabIndex={3}
              value={cardNumber3}
              onChange={(e) => handleNumberChange(e, setCardNumber3)}
              ref={inputRefs[2]}
              placeholder="0000"
            />
            <span>-</span>
            <Input
              type="password"
              minLength={4}
              maxLength={4}
              required
              tabIndex={4}
              value={cardNumber4}
              onChange={(e) => handleNumberChange(e, setCardNumber4)}
              ref={inputRefs[3]}
              placeholder="0000"
            />
          </div>
        </label>

        <label>
          만료일
          <div className={`${styles.inputContainer} ${styles.expirationDate}`}>
            <Input
              type="text"
              minLength={2}
              maxLength={2}
              required
              tabIndex={5}
              placeholder="MM"
              value={expiredMonth}
              onChange={(e) => handleNumberChange(e, setExpiredMonth)}
              ref={inputRefs[4]}
            />
            <span>/</span>
            <Input
              type="text"
              minLength={2}
              maxLength={2}
              required
              tabIndex={6}
              placeholder="YY"
              value={expiredYear}
              onChange={(e) => handleNumberChange(e, setExpiredYear)}
              ref={inputRefs[5]}
            />
          </div>
        </label>

        <div>
          <label>
            카드 소유자 이름(선택)
            <span className={styles.ownerNameLength}>{owner.length} / 20</span>
            <div className={`${styles.inputContainer} ${styles.ownerName}`}>
              <Input
                type="text"
                maxLength={20}
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                tabIndex={7}
                value={owner}
                onChange={(e) => handleOwnerChange(e)}
                ref={inputRefs[6]}
              />
            </div>
          </label>
        </div>

        <label>
          보안 코드(CVC/CVV)
          <div className={styles.cvcContainer}>
            <div className={`${styles.inputContainer} ${styles.cvc}`}>
              <Input
                type="password"
                minLength={3}
                maxLength={3}
                required
                tabIndex={8}
                value={cvc}
                onChange={(e) => handleNumberChange(e, setCvc)}
                ref={inputRefs[7]}
              />
            </div>
            <Tooltip>
              <TooltipButton tabIndex={12} />
            </Tooltip>
          </div>
        </label>

        <label>
          카드 비밀번호
          <div className={`${styles.inputContainer} ${styles.cardPassword}`}>
            <Input
              type="password"
              minLength={1}
              maxLength={1}
              required
              tabIndex={9}
              value={cardPassword1}
              onChange={(e) => handleNumberChange(e, setCardPassword1)}
              ref={inputRefs[8]}
            />
            <Input
              type="password"
              minLength={1}
              maxLength={1}
              required
              tabIndex={10}
              value={cardPassword2}
              onChange={(e) => handleNumberChange(e, setCardPassword2)}
              ref={inputRefs[9]}
            />
            <p>﹒</p>
            <p>﹒</p>
          </div>
        </label>
        <div className={styles.submitButton}>
          {isValidCardData && <button tabIndex={11}>다음</button>}
        </div>
      </form>
    </>
  );
};

export default CardRegisterForm;
