import { useRef } from 'react';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../common/Input';
import Button from '../common/Button';

import useCardFormValue from '../../hooks/useCardFormValue';
import type { CardData } from '../../types/card';

import styles from './cardNameForm.module.css';

interface Props {
  registerCard: (card: CardData) => void;
}

const CardNameForm = ({ registerCard }: Props) => {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const { company, number, owner, expiredDate } = useCardFormValue();
  const navigate = useNavigate();

  const handleNameFormSubmit: FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();

    if (nameInputRef.current === null || !company) {
      return;
    }

    if (nameInputRef.current.value === '') {
      alert('카드 이름을 작성하지 않았습니다. 작성 후 다시 제출해주세요.');
      nameInputRef.current.focus();
      return;
    }

    const cardData: CardData = {
      name: nameInputRef.current.value.trim(),
      company,
      number: { first: number.first, second: number.second },
      expiredDate,
      owner,
    };

    registerCard(cardData);
    navigate('/');
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
