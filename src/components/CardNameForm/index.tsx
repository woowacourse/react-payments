import { useRef } from 'react';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../common/Input';
import Button from '../common/Button';

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
      alert(
        '카드 이름은 공백이나 빈 값이 들어갈 수 없습니다. 작성 후 다시 제출해주세요.',
      );
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
          placeholder="카드 이름을 작성해주세요. (최대 10자)"
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
