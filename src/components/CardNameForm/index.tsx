import { useRef } from 'react';
import type { FormEventHandler } from 'react';
import { useNavigate } from 'react-router-dom';

import Input from '../common/Input';

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

    if (nameInputRef.current === null) {
      return;
    }

    if (!company) {
        return;
    }

    const cardData: CardData = {
      name: nameInputRef.current.value,
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
        <button>확인</button>
      </div>
    </form>
  );
};

export default CardNameForm;
