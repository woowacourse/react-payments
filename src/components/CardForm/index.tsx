import React, { Dispatch, FormEvent, SetStateAction, useMemo } from 'react';

import { CardInfo } from '../../modules/useCardInfoReducer';
import CardCompanySelect, {
  CardCompanySelectProps,
} from '../CardCompanySelect';
import CardCVCInput, { CardCVCInputProps } from '../CardCVCInput';
import CardExpirationPeriodInput, {
  CardExpirationPeriodFormProps,
} from '../CardExpirationPeriodInput';
import CardNumbersInput, { CardNumbersInputProps } from '../CardNumbersInput';
import CardPassword, { CardPasswordProps } from '../CardPassword';
import { CardSide } from '../CardPreview';
import CardUserNameInput, {
  CardUserNameInputProps,
} from '../CardUserNameInput';

import styles from './style.module.css';

interface CardFormProps
  extends CardPasswordProps,
    CardCVCInputProps,
    CardUserNameInputProps,
    CardExpirationPeriodFormProps,
    CardCompanySelectProps,
    CardNumbersInputProps {
  cardInfo: CardInfo;
  setCardSide: Dispatch<SetStateAction<CardSide>>;
}

function CardForm(props: CardFormProps) {
  const {
    cardInfo,
    editCardCVC,
    editCardCompany,
    editCardMark,
    editCardNumbers,
    editCardPassword,
    editCardPeriod,
    editCardUserName,
    setCardSide,
  } = props;

  const isCardCompleted = useMemo(
    () =>
      Object.entries(cardInfo)
        .map(([key, value]) => {
          if (!value) return false;
          if (key === 'period') return value.month && value.year;
          if (key === 'numbers')
            return Object.values(value).every((number) => !!number);

          return !!value;
        })
        .every((i) => i),

    [cardInfo],
  );
  const handleSubmit = (event: FormEvent<HTMLButtonElement>) => {
    event.preventDefault();
    // 카드 등록 완료 페이지로 이동
  };

  return (
    <form className={styles.formContainer}>
      <fieldset className={styles.fieldset}>
        <CardPassword editCardPassword={editCardPassword} />
        <CardCVCInput setCardSide={setCardSide} editCardCVC={editCardCVC} />
        <CardUserNameInput editCardUserName={editCardUserName} />
        <CardExpirationPeriodInput editCardPeriod={editCardPeriod} />
        <CardCompanySelect editCardCompany={editCardCompany} />
        <CardNumbersInput
          editCardMark={editCardMark}
          editCardNumbers={editCardNumbers}
        />
      </fieldset>
      {isCardCompleted && (
        <button
          className={styles.submitBtn}
          type="submit"
          onSubmit={handleSubmit}
        >
          확인
        </button>
      )}
    </form>
  );
}

export default CardForm;
