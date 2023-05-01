import { useEffect, useRef } from 'react';

import Card from '../Card';
import Input, { Focus } from '../common/Input';
import Tooltip from '../Tooltip';
import TooltipButton from '../TooltipButton';

import useCardRegisterForm from './useCardRegisterForm';
import { useModal } from '../common/Modal/ModalContext';
import { CARD_NUMBER_INPUT_PLACEHOLDER } from '../../domain/constants';

import styles from './cardRegisterForm.module.css';

const CardRegisterForm = () => {
  const inputRefs = Array.from({ length: 10 }).map(() => useRef<Focus>(null));
  const { isModalOpen, openModal } = useModal();
  const {
    cardCompany,
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
    handleSubmit,
  } = useCardRegisterForm(inputRefs);

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
              name="cardNumber1"
              inputMode="numeric"
              ref={cardNumberInputRef}
              minLength={4}
              maxLength={4}
              required
              value={cardNumber1}
              onChange={handleNumberChange}
              placeholder={CARD_NUMBER_INPUT_PLACEHOLDER}
            />
            <span>-</span>
            <Input
              type="text"
              name="cardNumber2"
              inputMode="numeric"
              minLength={4}
              maxLength={4}
              required
              value={cardNumber2}
              onChange={handleNumberChange}
              placeholder={CARD_NUMBER_INPUT_PLACEHOLDER}
            />
            <span>-</span>
            <Input
              type="password"
              name="cardNumber3"
              inputMode="numeric"
              minLength={4}
              maxLength={4}
              required
              value={cardNumber3}
              onChange={handleNumberChange}
              placeholder={CARD_NUMBER_INPUT_PLACEHOLDER}
            />
            <span>-</span>
            <Input
              type="password"
              name="cardNumber4"
              inputMode="numeric"
              minLength={4}
              maxLength={4}
              required
              value={cardNumber4}
              onChange={handleNumberChange}
              placeholder={CARD_NUMBER_INPUT_PLACEHOLDER}
            />
          </div>
        </label>

        <label>
          만료일
          <div className={styles.expirationDate}>
            <Input
              type="text"
              name="expiredMonth"
              inputMode="numeric"
              ref={expiredMonthInputRef}
              minLength={2}
              maxLength={2}
              required
              placeholder="MM"
              value={expiredMonth}
              onChange={handleNumberChange}
            />
            <span>/</span>
            <Input
              type="text"
              name="expiredYear"
              inputMode="numeric"
              minLength={2}
              maxLength={2}
              required
              placeholder="YY"
              value={expiredYear}
              onChange={handleNumberChange}
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
                name="owner"
                maxLength={20}
                placeholder="카드에 표시된 이름과 동일하게 입력하세요."
                value={owner}
                onChange={handleOwnerChange}
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
                name="cvc"
                inputMode="numeric"
                minLength={3}
                maxLength={3}
                required
                value={cvc}
                onChange={handleNumberChange}
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
              name="cardPassword1"
              inputMode="numeric"
              minLength={1}
              maxLength={1}
              required
              value={cardPassword1}
              onChange={handleNumberChange}
            />
            <Input
              type="password"
              name="cardPassword2"
              inputMode="numeric"
              minLength={1}
              maxLength={1}
              required
              value={cardPassword2}
              onChange={handleNumberChange}
            />
            <p>﹒</p>
            <p>﹒</p>
          </div>
        </label>

        {isCardFormFilled && (
          <button className={styles.submitButton}>다음</button>
        )}
      </form>
    </>
  );
};

export default CardRegisterForm;
