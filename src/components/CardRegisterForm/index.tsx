import { useRef } from 'react';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import NumberField from './NumberField';
import ExpiredDateField from './ExpiredDataField';
import OwnerField from './OwnerField';
import CvcField from './CvcField';
import PasswordField from './PasswordField';
import useCardRegisterForm from './hooks/useCardRegisterForm';
import useCardFormValidation from './hooks/useCardFormValidation';

import useCardFormValue from '../../hooks/useCardFormValue';
import type { CardData } from '../../types/card';

import styles from './cardRegisterForm.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardRegisterForm = ({ registerCard }: Props) => {
  const inputRefs = Array.from({ length: 10 }).map(() =>
    useRef<HTMLInputElement>(null),
  );
  const navigate = useNavigate();

  const { number, owner } = useCardFormValue();
  const { isValidCardData, validateCompany, validateExpiredDate } =
    useCardFormValidation();
  const { handleNumberChange, handleOwnerChange } =
    useCardRegisterForm(inputRefs);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    try {
      const validCompany = validateCompany();
      const validExpiredDate = validateExpiredDate();

      const cardData = {
        company: validCompany,
        number: { first: number.first, second: number.second },
        expiredDate: validExpiredDate,
        owner,
      };

      registerCard(cardData);
      navigate('/');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <NumberField handleNumberChange={handleNumberChange} />
      <ExpiredDateField handleNumberChange={handleNumberChange} />
      <OwnerField handleOwnerChange={handleOwnerChange} />
      <CvcField handleNumberChange={handleNumberChange} />
      <PasswordField handleNumberChange={handleNumberChange} />
      <div className={styles.submitButton}>
        {isValidCardData && <button tabIndex={11}>다음</button>}
      </div>
    </form>
  );
};

export default CardRegisterForm;
