import { useRef } from 'react';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import NumberField from './NumberField';
import ExpiredDateField from './ExpiredDataField';
import OwnerField from './OwnerField';
import CvcField from './CvcField';
import PasswordField from './PasswordField';
import Button from '../common/Button';

import useCardRegisterForm from './hooks/useCardRegisterForm';
import useCardFormValidation from '../../hooks/useCardFormValidation';

import styles from './cardRegisterForm.module.css';

const CardRegisterForm = () => {
  const inputRefs = Array.from({ length: 10 }).map(() =>
    useRef<HTMLInputElement>(null),
  );
  const navigate = useNavigate();

  const { isValidCardData, validateCompany, validateExpiredDate } =
    useCardFormValidation();
  const { handleNumberChange, handleOwnerChange } =
    useCardRegisterForm(inputRefs);

  const handleFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    try {
      validateCompany();
      validateExpiredDate();

      navigate('/card-name-register');
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    }
  };

  return (
    <form className={styles.form} onSubmit={handleFormSubmit}>
      <NumberField
        handleNumberChange={handleNumberChange}
        inputRefs={inputRefs}
      />
      <ExpiredDateField
        handleNumberChange={handleNumberChange}
        inputRefs={inputRefs}
      />
      <OwnerField handleOwnerChange={handleOwnerChange} inputRefs={inputRefs} />
      <CvcField handleNumberChange={handleNumberChange} inputRefs={inputRefs} />
      <PasswordField
        handleNumberChange={handleNumberChange}
        inputRefs={inputRefs}
      />
      <div className={styles.submitButton}>
        {isValidCardData && (
          <Button tabIndex={11} padding>
            다음
          </Button>
        )}
      </div>
    </form>
  );
};

export default CardRegisterForm;
