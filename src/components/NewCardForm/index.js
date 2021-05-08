import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import { NewCardFormWrapper } from './index.styles';
import {
  getCVCMessage,
  getUserMessage,
  messageObject,
} from '../../utils/cardFormValidator';
import CardNumberInput from './CardNumberInput';
import CardExpireDateInput from './CardExpireDateInput';
import CardUserInput from './CardUserInput';
import CardCVCInput from './CardCVCInput';
import CardPasswordInput from './CardPasswordInput';
import { CARD_INFOS_LENGTH } from '../../constants/validation';

const NewCardForm = ({
  cardInfo,
  setNewCardInfo,
  handleModalOpen,
  setPage,
}) => {
  const [errorMessage, setErrorMessage] = useState({
    numbers: '',
    expireDate: '',
    user: '',
    cvc: '',
    password: '',
  });

  const [cardFormFlag, setCardFormFlag] = useState(false);
  const cardFormValidation = () => {
    const isFilled =
      Object.values(cardInfo.numbers).every(
        (number) => number.length === Number(CARD_INFOS_LENGTH.CARD)
      ) &&
      Object.values(cardInfo.expireDate).every(
        (date) => date.length === Number(CARD_INFOS_LENGTH.EXPIRE_DATE)
      ) &&
      Object.values(cardInfo.password).every(
        (pwd) => pwd.length === Number(CARD_INFOS_LENGTH.PASSWORD)
      ) &&
      cardInfo.cvc.length === Number(CARD_INFOS_LENGTH.CVC);

    setCardFormFlag(isFilled);
  };

  const onChangeCardInputObject = ({
    target: {
      name,
      value,
      dataset: { detail },
    },
  }) => {
    const message = messageObject[name](value);
    setErrorMessage({
      ...errorMessage,
      [name]: message,
    });

    if (message !== '') return;

    setNewCardInfo((prevInfo) => ({
      ...prevInfo,
      [name]: { ...prevInfo[name], [detail]: value },
    }));
  };

  const onChangeCardInput = (e) => {
    let { name, value } = e.target;
    let message = '';

    switch (name) {
      case 'user':
        message = getUserMessage(value);
        value = value.toUpperCase();
        break;

      case 'cvc':
        message = getCVCMessage(value);
        break;
    }

    setErrorMessage({
      ...errorMessage,
      [name]: message,
    });

    if (message !== '') return;

    setNewCardInfo({ ...cardInfo, [name]: value });
  };

  // 다음눌렀을때 실행되는 메서드 (App으로 빠질수도 있음)
  const onSubmitCardForm = (e) => {
    e.preventDefault();

    if (cardInfo.cardName === 'DEFAULT') {
      alert('카드 종류를 선택해주세요!');
      return;
    }

    setPage('cardComplete');
  };

  const { numbers, expireDate, user, cvc, password } = cardInfo;

  return (
    <NewCardFormWrapper onSubmit={onSubmitCardForm}>
      <CardNumberInput
        cardFormValidation={cardFormValidation}
        numbers={numbers}
        errorMessage={errorMessage.numbers}
        onChangeCardInputObject={onChangeCardInputObject}
      />
      <CardExpireDateInput
        cardFormValidation={cardFormValidation}
        expireDate={expireDate}
        errorMessage={errorMessage.expireDate}
        onChangeCardInputObject={onChangeCardInputObject}
      />
      <CardUserInput
        user={user}
        errorMessage={errorMessage.user}
        onChangeCardInput={onChangeCardInput}
      />
      <CardCVCInput
        cardFormValidation={cardFormValidation}
        cvc={cvc}
        errorMessage={errorMessage.cvc}
        onChangeCardInput={onChangeCardInput}
        handleModalOpen={handleModalOpen}
      />
      <CardPasswordInput
        cardFormValidation={cardFormValidation}
        password={password}
        errorMessage={errorMessage.password}
        onChangeCardInputObject={onChangeCardInputObject}
      />
      <div className='card-form-btns'>
        {cardFormFlag && <Button onClick={onSubmitCardForm}>다음</Button>}
      </div>
    </NewCardFormWrapper>
  );
};

NewCardForm.propTypes = {
  cardInfo: PropTypes.shape({
    cardName: PropTypes.string,
    numbers: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
      third: PropTypes.string,
      fourth: PropTypes.string,
    }),
    user: PropTypes.string,
    expireDate: PropTypes.shape({
      month: PropTypes.string,
      year: PropTypes.string,
    }),
    cvc: PropTypes.string,
    password: PropTypes.shape({
      first: PropTypes.string,
      second: PropTypes.string,
    }),
  }),

  setNewCardInfo: PropTypes.func,
  setPage: PropTypes.func,
  handleModalOpen: PropTypes.func,
};

export default NewCardForm;
