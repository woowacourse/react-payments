import { FormEventHandler, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import Input, { Focus } from '../common/Input';
import Tooltip from '../Tooltip';
import TooltipButton from '../TooltipButton';

import useCardRegisterForm from './useCardRegisterForm';
import { useModal } from '../common/Modal/ModalContext';
import { useCardCompany } from '../CardCompany/CardCompanyContext';
import { useCardsContext } from '../../domain/context/CardsContext';
import { CARD_NUMBER_INPUT_PLACEHOLDER } from '../../domain/constants';

import styles from './cardRegisterForm.module.css';

const today = new Date();
const currentYear = today.getFullYear() % 100;
const currentMonth = today.getMonth() + 1;

const CardRegisterForm = () => {
  const inputRefs = Array.from({ length: 10 }).map(() => useRef<Focus>(null));
  const navigate = useNavigate();
  const { isModalOpen, openModal } = useModal();
  const { cardCompany } = useCardCompany();
  const { registerCard } = useCardsContext();
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

    isCardFormFilled,
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

    if (!cardCompany) {
      alert('카드를 터치 후 카드사를 선택해 주세요.');

      return;
    }

    if (!isValidExpiredDate(Number(expiredMonth), Number(expiredYear))) {
      const expiredMonthInput = inputRefs[4];

      alert('유효한 만료일이 아닙니다. 다시 입력해주세요.');
      expiredMonthInput.current?.focus();

      return;
    }

    const cardData = {
      cardCompany,
      cardNumber1,
      cardNumber2,
      expiredMonth,
      expiredYear,
      owner: owner.trim(),
    };

    registerCard(cardData);
    navigate('/card-nickname');
  };

  useEffect(() => {
    if (isModalOpen === false) {
      const [cardNumberInputRef] = inputRefs;

      cardNumberInputRef.current?.focus();
    }
  }, [isModalOpen]);

  return (
    <>
      <span className={`${styles.subtitle} text-subtitle`}>
        {cardCompany === null ? '카드 터치 후 카드사를 선택해 주세요.' : ''}
      </span>

      <Card
        cardCompany={cardCompany}
        cardNumber1={cardNumber1}
        cardNumber2={cardNumber2}
        cardNumber3={cardNumber3}
        cardNumber4={cardNumber4}
        owner={owner}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
        onClick={openModal}
      />
      <form className={styles.form} onSubmit={handleSubmit}>
        <label>
          카드 번호
          <div className={styles.inputContainer}>
            <Input
              type="text"
              inputMode="numeric"
              minLength={4}
              maxLength={4}
              required
              tabIndex={1}
              autoFocus
              value={cardNumber1}
              onChange={(e) => handleNumberChange(e, setCardNumber1)}
              ref={inputRefs[0]}
              placeholder={CARD_NUMBER_INPUT_PLACEHOLDER}
            />
            <span>-</span>
            <Input
              type="text"
              inputMode="numeric"
              minLength={4}
              maxLength={4}
              required
              tabIndex={2}
              value={cardNumber2}
              onChange={(e) => handleNumberChange(e, setCardNumber2)}
              ref={inputRefs[1]}
              placeholder={CARD_NUMBER_INPUT_PLACEHOLDER}
            />
            <span>-</span>
            <Input
              type="password"
              inputMode="numeric"
              minLength={4}
              maxLength={4}
              required
              tabIndex={3}
              value={cardNumber3}
              onChange={(e) => handleNumberChange(e, setCardNumber3)}
              ref={inputRefs[2]}
              placeholder={CARD_NUMBER_INPUT_PLACEHOLDER}
            />
            <span>-</span>
            <Input
              type="password"
              inputMode="numeric"
              minLength={4}
              maxLength={4}
              required
              tabIndex={4}
              value={cardNumber4}
              onChange={(e) => handleNumberChange(e, setCardNumber4)}
              ref={inputRefs[3]}
              placeholder={CARD_NUMBER_INPUT_PLACEHOLDER}
            />
          </div>
        </label>

        <label>
          만료일
          <div className={styles.expirationDate}>
            <Input
              type="text"
              inputMode="numeric"
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
              inputMode="numeric"
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
            <div className={styles.ownerName}>
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
            <div className={styles.cvc}>
              <Input
                type="password"
                inputMode="numeric"
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
          <div className={styles.cardPassword}>
            <Input
              type="password"
              inputMode="numeric"
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
              inputMode="numeric"
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

        {isCardFormFilled && (
          <button tabIndex={11} className={styles.submitButton}>
            다음
          </button>
        )}
      </form>
    </>
  );
};

export default CardRegisterForm;
