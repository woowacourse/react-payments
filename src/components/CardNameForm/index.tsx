import { useRef } from 'react';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../common/Input';
import Button from '../common/Button';

import { CARD_NAME_FORM_MESSAGE } from './constants/message';
import { ROUTES } from '../../constants/routes';
import useCardFormAction from '../../hooks/useCardFormAction';

import styles from './cardNameForm.module.css';

const CardNameForm = () => {
  const nameInputRef = useRef<HTMLInputElement>(null);
  const handleCardInfo = useCardFormAction();

  const navigate = useNavigate();

  const handleNameFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (nameInputRef.current === null) {
      return;
    }

    const { value } = nameInputRef.current;

    if (value.trim() === '') {
      alert(CARD_NAME_FORM_MESSAGE.error);
      nameInputRef.current.focus();
      return;
    }

    handleCardInfo(value.trim(), 'name');
    navigate(`/${ROUTES.CARD_REGISTER}`);
  };

  return (
    <form onSubmit={handleNameFormSubmit}>
      <div className={styles.inputContainer}>
        <Input
          type="text"
          placeholder={CARD_NAME_FORM_MESSAGE.placeholder}
          maxLength={10}
          align="center"
          underlined
          ref={nameInputRef}
        />
      </div>
      <div className={styles.buttonContainer}>
        <Button padding>확인</Button>
      </div>
    </form>
  );
};

export default CardNameForm;
