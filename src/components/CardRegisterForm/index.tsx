import { MouseEventHandler, useRef, useState } from 'react';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import Card from '../Card';
import TextField from '../common/TextField';
import Input from '../common/Input';

import useCardRegisterForm from './hooks/useCardRegisterForm';
import { isValidExpiredDate } from './utils/validation';
import type { CardInfo } from '../../types/card';

import styles from './cardRegisterForm.module.css';
import CardCompanyModal from '../CardCompanyModal';
import useModal from '../../hooks/useModal';
import { CompanyName, isCompanyName } from '../../constants/company';

interface Props {
  registerCard: (card: CardInfo) => void;
}

const CardRegisterForm = ({ registerCard }: Props) => {
  const [company, setCompany] = useState<CompanyName>();
  const navigate = useNavigate();
  const { toggleModal, openModal, closeModal } = useModal();
  const inputRefs = Array.from({ length: 10 }).map(() =>
    useRef<HTMLInputElement>(null),
  );
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

    isValidCardData,
    handleNumberChange,
    handleOwnerChange,
  } = useCardRegisterForm(inputRefs);

  const handleCompanyClick: MouseEventHandler<HTMLLIElement> = (event) => {
    const { name } = event.currentTarget.dataset;

    if (!name || !isCompanyName(name)) return;

    setCompany(name);
    closeModal();
  };

  const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (!company) {
      alert('현재 카드사를 선택하지 않았습니다. 카드사를 선택해주세요.');
      openModal();
      return;
    }

    if (!isValidExpiredDate(Number(expiredMonth), Number(expiredYear))) {
      alert('유효한 만료일이 아닙니다. 다시 입력해주세요.');
      inputRefs[4].current?.focus();
      return;
    }

    const cardData = {
      company,
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
        company={company}
        cardNumber1={cardNumber1}
        cardNumber2={cardNumber2}
        cardNumber3={cardNumber3}
        cardNumber4={cardNumber4}
        owner={owner}
        expiredMonth={expiredMonth}
        expiredYear={expiredYear}
      />
      <button type="button" onClick={openModal}>
        카드사 선택
      </button>
      <form className={styles.form} onSubmit={handleSubmit}>
        <TextField label="카드 번호" size="fit">
          <Input
            type="text"
            name="cardNumber1"
            minLength={4}
            maxLength={4}
            required
            tabIndex={1}
            autoFocus
            value={cardNumber1}
            onChange={handleNumberChange}
            ref={inputRefs[0]}
            placeholder="0000"
            align="center"
          />
          <span>-</span>
          <Input
            type="text"
            name="cardNumber2"
            minLength={4}
            maxLength={4}
            required
            tabIndex={2}
            value={cardNumber2}
            onChange={handleNumberChange}
            ref={inputRefs[1]}
            placeholder="0000"
            align="center"
          />
          <span>-</span>
          <Input
            type="password"
            name="cardNumber3"
            minLength={4}
            maxLength={4}
            required
            tabIndex={3}
            value={cardNumber3}
            onChange={handleNumberChange}
            ref={inputRefs[2]}
            placeholder="0000"
            align="center"
          />
          <span>-</span>
          <Input
            type="password"
            name="cardNumber4"
            minLength={4}
            maxLength={4}
            required
            tabIndex={4}
            value={cardNumber4}
            onChange={handleNumberChange}
            ref={inputRefs[3]}
            placeholder="0000"
            align="center"
          />
        </TextField>

        <TextField label="만료일" size="medium">
          <Input
            type="text"
            name="expiredMonth"
            minLength={2}
            maxLength={2}
            required
            tabIndex={5}
            placeholder="MM"
            value={expiredMonth}
            onChange={handleNumberChange}
            ref={inputRefs[4]}
            align="center"
          />
          <span>/</span>
          <Input
            type="text"
            name="expiredYear"
            minLength={2}
            maxLength={2}
            required
            tabIndex={6}
            placeholder="YY"
            value={expiredYear}
            onChange={handleNumberChange}
            ref={inputRefs[5]}
            align="center"
          />
        </TextField>

        <TextField
          label="카드 소유자 이름(선택)"
          size="fit"
          valueLength={owner.length}
          maxLength={20}
        >
          <Input
            type="text"
            name="owner"
            maxLength={20}
            placeholder="카드에 표시된 이름과 동일하게 입력하세요."
            tabIndex={7}
            value={owner}
            onChange={handleOwnerChange}
            ref={inputRefs[6]}
          />
        </TextField>

        <TextField
          label="보안코드(CVC/CVV)"
          size="small"
          tooltipMessage="카드 뒷면의 서명란에 인쇄된 숫자 끝 3자리가 CVC 번호입니다."
        >
          <Input
            type="password"
            name="cvc"
            minLength={3}
            maxLength={3}
            required
            tabIndex={8}
            value={cvc}
            onChange={handleNumberChange}
            ref={inputRefs[7]}
            align="center"
          />
        </TextField>

        <TextField label="카드 비밀번호" size="medium" split>
          <Input
            type="password"
            name="cardPassword1"
            minLength={1}
            maxLength={1}
            required
            tabIndex={9}
            value={cardPassword1}
            onChange={handleNumberChange}
            ref={inputRefs[8]}
            align="center"
          />
          <Input
            type="password"
            name="cardPassword2"
            minLength={1}
            maxLength={1}
            required
            tabIndex={10}
            value={cardPassword2}
            onChange={handleNumberChange}
            ref={inputRefs[9]}
            align="center"
          />
          <p>﹒</p>
          <p>﹒</p>
        </TextField>

        <div className={styles.submitButton}>
          {isValidCardData && <button tabIndex={11}>다음</button>}
        </div>
      </form>
      {toggleModal && (
        <CardCompanyModal
          onClose={closeModal}
          onClickCompany={handleCompanyClick}
        />
      )}
    </>
  );
};

export default CardRegisterForm;
