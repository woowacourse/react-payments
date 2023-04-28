import { useRef } from 'react';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import NumberField from './NumberField';
import ExpiredDateField from './ExpiredDataField';
import OwnerField from './OwnerField';
import CvcField from './CvcField';
import PasswordField from './PasswordField';

import useCardRegisterForm from './hooks/useCardRegisterForm';
import { isValidExpiredDate } from './utils/validation';
import type { CardData } from '../../types/card';

import styles from './cardRegisterForm.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardRegisterForm = ({ registerCard }: Props) => {
  const navigate = useNavigate();

  const inputRefs = Array.from({ length: 10 }).map(() =>
    useRef<HTMLInputElement>(null),
  );
  const { handleNumberChange, handleOwnerChange } =
    useCardRegisterForm(inputRefs);

  //const handleSubmit: FormEventHandler<HTMLFormElement> = (event) => {
  //  event.preventDefault();

  //  if (!company) {
  //    alert('현재 카드사를 선택하지 않았습니다. 카드사를 선택해주세요.');
  //    openModal();
  //    return;
  //  }

  //  if (!isValidExpiredDate(Number(expiredMonth), Number(expiredYear))) {
  //    alert('유효한 만료일이 아닙니다. 다시 입력해주세요.');
  //    inputRefs[4].current?.focus();
  //    return;
  //  }

  //  const cardData = {
  //    company,
  //    cardNumber1,
  //    cardNumber2,
  //    expiredMonth,
  //    expiredYear,
  //    owner: owner.trim(),
  //  };

  //  registerCard(cardData);
  //  navigate('/');
  //};

  return (
    <form className={styles.form}>
      <NumberField handleNumberChange={handleNumberChange} />
      <ExpiredDateField handleNumberChange={handleNumberChange} />
      <OwnerField handleOwnerChange={handleOwnerChange} />
      <CvcField handleNumberChange={handleNumberChange} />
      <PasswordField handleNumberChange={handleNumberChange} />
      {/*<div className={styles.submitButton}>
        {isValidCardData && <button tabIndex={11}>다음</button>}
      </div>*/}
    </form>
  );
};

export default CardRegisterForm;
