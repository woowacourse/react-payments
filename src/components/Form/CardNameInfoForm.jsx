/* eslint-disable no-unused-vars */
import React from 'react';
import LineInput from '../Common/Input/LineInput';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { CardContext } from '../../context';
import { isBlankValue, isNotKoreanOrSpace, isOverlappedValue } from '../../utils/validations';
import { DISPATCH_TYPE } from '../../constants';
import { DEFAULT_CARD_INFO } from '../../constants';
import SubmitButton from '../Common/Button/SubmitButton';

function LineInputForm({ handleChangePage }) {
  const { cardList, cardInput, setCardList, cardInputDispatch } = useContext(CardContext);

  const handleSubmit = e => {
    e.preventDefault();
    if (isOverlappedValue(cardInput.cardDesignation, cardList)) {
      alert('동일한 명칭의 카드가 존재합니다.');
      return;
    }

    if (isBlankValue(cardInput.cardDesignation)) {
      alert('카드 이름이 공백입니다.');
      return;
    }

    setCardList({ ...cardList, [cardInput.cardDesignation]: { ...cardInput } });
    cardInputDispatch({
      type: DISPATCH_TYPE.RESET,
      payload: { ...DEFAULT_CARD_INFO },
    });
    handleChangePage('cardListPage');
  };

  const onChangeCardDesignation = e => {
    const {
      target: { value: cardDesignation, maxLength },
    } = e;

    if (cardDesignation.length === maxLength) {
      return;
    }

    if (isNotKoreanOrSpace(cardDesignation)) {
      cardInputDispatch({
        type: DISPATCH_TYPE.CHANGE_CARD_DESIGNATION,
        payload: { cardDesignation },
      });
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <LineInput>
        <input
          className="line-input"
          value={cardInput.cardDesignation}
          onChange={e => onChangeCardDesignation(e, 10)}
          maxLength={15}
          required
        />
      </LineInput>
      <SubmitButton>완료</SubmitButton>
    </form>
  );
}

LineInputForm.propTypes = {
  handleChangePage: PropTypes.func,
};

export default LineInputForm;
