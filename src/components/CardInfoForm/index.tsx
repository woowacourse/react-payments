import { useRef } from 'react';
import type { FormEventHandler, ChangeEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import NumberField from './NumberField';
import ExpiredDateField from './ExpiredDataField';
import OwnerField from './OwnerField';
import CvcField from './CvcField';
import PasswordField from './PasswordField';
import Button from '../common/Button';

import useFieldFilled from './hooks/useFieldFilled';
import useAutofocus from '../../hooks/useAutofocus';
import useCardFormValidation from '../../hooks/useCardFormValidation';

import styles from './cardInfoForm.module.css';

const CardInfoForm = () => {
  const inputRefs = Array.from({ length: 10 }).map(() =>
    useRef<HTMLInputElement>(null),
  );
  const navigate = useNavigate();

  const focusNextInput = useAutofocus(inputRefs);
  const { validateCompany, validateExpiredDate } = useCardFormValidation();
  const isFilled = useFieldFilled(inputRefs);

  const handleFormChange: ChangeEventHandler<HTMLFormElement> = (event) => {
    const { target } = event;

    if (target instanceof HTMLInputElement) {
      focusNextInput(target);
    }
  };

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
    <form
      className={styles.form}
      onChange={handleFormChange}
      onSubmit={handleFormSubmit}
    >
      <NumberField
        inputRefs={[inputRefs[0], inputRefs[1], inputRefs[2], inputRefs[3]]}
      />
      <ExpiredDateField inputRefs={[inputRefs[4], inputRefs[5]]} />
      <OwnerField inputRefs={[inputRefs[6]]} />
      <CvcField inputRefs={[inputRefs[7]]} />
      <PasswordField inputRefs={[inputRefs[8], inputRefs[9]]} />
      <div className={styles.submitButton}>
        {isFilled && <Button padding>다음</Button>}
      </div>
    </form>
  );
};

export default CardInfoForm;
