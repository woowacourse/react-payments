import React, { useState } from 'react';
import {
  getCVCMessage,
  getUserMessage,
  messageObject,
} from '../../utils/cardFormValidator';

import Button from '../../common/Button';
import { CARD_INFOS_LENGTH } from '../../constants/validation';
import CardCVCInput from './CardCVCInput';
import CardExpireDateInput from './CardExpireDateInput';
import CardNumberInput from './CardNumberInput';
import CardPasswordInput from './CardPasswordInput';
import CardUserInput from './CardUserInput';
import { NewCardFormWrapper } from './index.styles';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const NewCardForm = ({ cardInfo, changeCardName, setNewCardInfo }) => {
  const { numbers, expireDate, user, cvc, password } = cardInfo;

  const [cardFormFlag, setCardFormFlag] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    numbers: '',
    expireDate: '',
    user: '',
    cvc: '',
    password: '',
  });

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

    setNewCardInfo(name, detail, value);
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

    setErrorMessage({ ...errorMessage, [name]: message });

    if (message !== '') return;

    changeCardName(name, value);
  };

  const history = useHistory();
  const onSubmitCardForm = (e) => {
    e.preventDefault();

    if (cardInfo.cardName === 'DEFAULT') {
      alert('카드 종류를 선택해주세요!');
      return;
    }

    history.push('/completed');
  };

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
  cardInfo: PropTypes.object,
  changeCardName: PropTypes.func,
  setNewCardInfo: PropTypes.func,
};

export default NewCardForm;
