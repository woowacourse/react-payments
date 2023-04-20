import {
  ChangeEvent,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useRef,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import Input, { Focus } from '../Input';
import Tooltip from '../Tooltip';
import TooltipButton from '../TooltipButton';

import type { CardInfo } from '../../types/card';

import styles from './cardRegisterForm.module.css';

interface Props {
  registerCard: (card: CardInfo) => void;
}

const CardRegisterForm = ({ registerCard }: Props) => {
  const navigate = useNavigate();

  const today = new Date();
  const currentYear = today.getFullYear() % 100;
  const currentMonth = today.getMonth() + 1;

  const [cardNumber1, setCardNumber1] = useState('');
  const [cardNumber2, setCardNumber2] = useState('');
  const [cardNumber3, setCardNumber3] = useState('');
  const [cardNumber4, setCardNumber4] = useState('');

  const [expiredMonth, setExpiredMonth] = useState('');
  const [expiredYear, setExpiredYear] = useState('');

  const [owner, setOwner] = useState('');

  const [cvc, setCvc] = useState('');
  const [cardPassword1, setCardPassword1] = useState('');
  const [cardPassword2, setCardPassword2] = useState('');

  const inputRefs = Array.from({ length: 10 }).map(() => useRef<Focus>(null));

  const isValidCardData =
    cardNumber1.length === 4 &&
    cardNumber2.length === 4 &&
    cardNumber3.length === 4 &&
    cardNumber4.length === 4 &&
    expiredMonth.length === 2 &&
    expiredYear.length === 2 &&
    cvc.length === 3 &&
    cardPassword1.length === 1 &&
    cardPassword2.length === 1;

  const isNotNumber = (value: string) => {
    return (
      Number.isNaN(Number(value)) || value.includes(' ') || value.includes('.')
    );
  };

  const isNotAlphabet = (value: string) => {
    return !/^[a-zA-Z\s]*$/.test(value);
  };

  const isValidExpiredDate = (month: number, year: number) => {
    if (month < 1 || month > 12) return false;
    if (year < currentYear) return false;
    if (year === currentYear && month <= currentMonth) return false;

    return true;
  };

  const autoFocusNextInput = (target: HTMLInputElement) => {
    const { value, maxLength, tabIndex } = target;

    if (tabIndex === inputRefs.length - 1) return;

    if (value.length === maxLength) {
      inputRefs[tabIndex + 1].current?.focus();
    }
  };

  const handleNumberChange = (
    event: ChangeEvent<HTMLInputElement>,
    setNumber: Dispatch<SetStateAction<string>>,
  ) => {
    const { value } = event.target;

    if (isNotNumber(value)) return;

    setNumber(value);

    autoFocusNextInput(event.target);
  };

  const handleOwnerChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

    if (value.length === 1 && value === ' ') return;
    if (isNotAlphabet(value)) return;

    setOwner(value.toUpperCase());

    autoFocusNextInput(event.target);
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
          <div className={styles.inputContainer}>
            <Input
              type="text"
              minLength={4}
              maxLength={4}
              required
              tabIndex={0}
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
              tabIndex={1}
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
              tabIndex={2}
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
              tabIndex={3}
              value={cardNumber4}
              onChange={(e) => handleNumberChange(e, setCardNumber4)}
              ref={inputRefs[3]}
              placeholder="0000"
            />
          </div>
        </label>

        <label>
          만료일
          <div className={styles.expirationDate}>
            <Input
              type="text"
              minLength={2}
              maxLength={2}
              required
              tabIndex={4}
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
              tabIndex={5}
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
            <div className={styles.ownerName}>
              <Input
                type="text"
                maxLength={20}
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                tabIndex={6}
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
            <div className={styles.cvc}>
              <Input
                type="password"
                minLength={3}
                maxLength={3}
                required
                tabIndex={7}
                value={cvc}
                onChange={(e) => handleNumberChange(e, setCvc)}
                ref={inputRefs[7]}
              />
            </div>
            <Tooltip>
              <TooltipButton />
            </Tooltip>
          </div>
        </label>

        <label>
          카드 비밀번호
          <div className={styles.cardPassword}>
            <Input
              type="password"
              minLength={1}
              maxLength={1}
              required
              tabIndex={8}
              value={cardPassword1}
              onChange={(e) => handleNumberChange(e, setCardPassword1)}
              ref={inputRefs[8]}
            />
            <Input
              type="password"
              minLength={1}
              maxLength={1}
              required
              tabIndex={9}
              value={cardPassword2}
              onChange={(e) => handleNumberChange(e, setCardPassword2)}
              ref={inputRefs[9]}
            />
            <p>﹒</p>
            <p>﹒</p>
          </div>
        </label>

        {isValidCardData && (
          <button className={styles.submitButton}>다음</button>
        )}
      </form>
    </>
  );
};

export default CardRegisterForm;
