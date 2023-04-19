import {
  ChangeEvent,
  ChangeEventHandler,
  Dispatch,
  FormEventHandler,
  SetStateAction,
  useState,
} from 'react';
import { Link, useNavigate } from 'react-router-dom';

import Card from '../../components/Card';
import TooltipButton from '../../components/TooltipButton';

import styles from './cardRegisterPage.module.css';

interface Props {
  registerCard: (card: any) => void;
}

const CardRegisterPage = ({ registerCard }: Props) => {
  const navigate = useNavigate();

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
    return Number.isNaN(Number(value)) || value === ' ';
  };

  const handleNumberChange = (
    event: ChangeEvent<HTMLInputElement>,
    setNumber: Dispatch<SetStateAction<string>>,
  ) => {
    if (isNotNumber(event.target.value)) return;

    setNumber(event.target.value);
  };

  const handleOwnerChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setOwner(event.target.value);
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    const cardData = {
      cardNumber1,
      cardNumber2,
      expiredMonth,
      expiredYear,
      owner,
    };

    registerCard(cardData);
    navigate('/');
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <Link to="/">
          <svg
            width={10}
            height={17}
            viewBox="0 0 10 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8.30425 1L1.36475 8.78658L9.15133 15.7261"
              stroke="#525252"
              strokeWidth={1.5}
            />
          </svg>
        </Link>
        <h1 className="text-title">카드 추가</h1>
      </header>
      <main className={styles.formContainer}>
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
              <input
                type="text"
                maxLength={4}
                required
                autoFocus
                value={cardNumber1}
                onChange={(e) => handleNumberChange(e, setCardNumber1)}
              />
              <span>-</span>
              <input
                type="text"
                maxLength={4}
                required
                value={cardNumber2}
                onChange={(e) => handleNumberChange(e, setCardNumber2)}
              />
              <span>-</span>
              <input
                type="password"
                maxLength={4}
                required
                value={cardNumber3}
                onChange={(e) => handleNumberChange(e, setCardNumber3)}
              />
              <span>-</span>
              <input
                type="password"
                maxLength={4}
                required
                value={cardNumber4}
                onChange={(e) => handleNumberChange(e, setCardNumber4)}
              />
            </div>
          </label>

          <label>
            만료일
            <div className={styles.expirationDate}>
              <input
                type="text"
                maxLength={2}
                required
                placeholder="MM"
                value={expiredMonth}
                onChange={(e) => handleNumberChange(e, setExpiredMonth)}
              />
              <span>/</span>
              <input
                type="text"
                maxLength={2}
                required
                placeholder="YY"
                value={expiredYear}
                onChange={(e) => handleNumberChange(e, setExpiredYear)}
              />
            </div>
          </label>

          <label>
            카드 소유자 이름(선택)
            <div className={styles.ownerName}>
              <input
                type="text"
                maxLength={30}
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                value={owner}
                onChange={handleOwnerChange}
              />
            </div>
          </label>

          <label>
            보안 코드(CVC/CVV)
            <div className={styles.cvcContainer}>
              <div className={styles.cvc}>
                <input
                  type="password"
                  maxLength={3}
                  value={cvc}
                  onChange={(e) => handleNumberChange(e, setCvc)}
                />
              </div>
              <TooltipButton />
            </div>
          </label>

          <label>
            카드 비밀번호
            <div className={styles.cardPassword}>
              <input
                type="password"
                maxLength={1}
                value={cardPassword1}
                onChange={(e) => handleNumberChange(e, setCardPassword1)}
              />
              <input
                type="password"
                maxLength={1}
                value={cardPassword2}
                onChange={(e) => handleNumberChange(e, setCardPassword2)}
              />
              <p>﹒</p>
              <p>﹒</p>
            </div>
          </label>

          {isValidCardData && (
            <button className={styles.submitButton}>다음</button>
          )}
        </form>
      </main>
    </div>
  );
};

export default CardRegisterPage;
