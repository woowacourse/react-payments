import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { NewCardFormWrapper } from './index.styles';

import CardNumberInput from './CardNumberInput';
import CardExpireDateInput from './CardExpireDateInput';
import CardUserInput from './CardUserInput';
import CardCVCInput from './CardCVCInput';
import CardPasswordInput from './CardPasswordInput';

import { cardFormErrorMessages } from './cardFormValidator';
import { ERROR_MESSAGE, INPUT, PAGE } from '../../constants/constant';
import ButtonMenu from '../mixin/ButtonMenu';

const NewCardForm = ({
  cardInfo,
  setNewCardInfo,
  handleModalOpen,
  setPage,
}) => {
  const [cardFormFilled, setCardFormFilled] = useState(false);
  const [errorMessage, setErrorMessage] = useState({
    numbers: '',
    expireDate: '',
    user: '',
    cvc: '',
    password: '',
  });

  const onChangeCardInput = ({
    target: {
      name,
      value,
      dataset: { detail },
    },
  }) => {
    const message = cardFormErrorMessages[name](value);
    setErrorMessage({
      ...errorMessage,
      [name]: message,
    });

    if (message !== '') return;

    detail
      ? setNewCardInfo((prevInfo) => ({
          ...prevInfo,
          [name]: { ...prevInfo[name], [detail]: value },
        }))
      : setNewCardInfo((prevInfo) => ({ ...prevInfo, [name]: value }));
  };

  const cardFormFilledValidation = () => {
    const { numbers, expireDate, password, cvc } = cardInfo;
    const isFilled =
      Object.values(numbers).every(
        (number) => number.length === INPUT.MAX_LENGTH.CARD.NUMBERS
      ) &&
      Object.values(expireDate).every(
        (date) => date.length === INPUT.MAX_LENGTH.CARD.EXPIRE_DATE
      ) &&
      Object.values(password).every(
        (pwd) => pwd.length === INPUT.MAX_LENGTH.CARD.PASSWORD
      ) &&
      cvc.length === INPUT.MAX_LENGTH.CARD.CVC;

    setCardFormFilled(isFilled);
  };

  const onSubmitCardForm = (e) => {
    e.preventDefault();

    if (cardInfo.cardName === '') {
      alert(ERROR_MESSAGE.CHOOSE_CARD);
      return;
    }

    setPage(PAGE.CARD_COMPLETE);
  };

  useEffect(() => {
    cardFormFilledValidation();
  }, [cardInfo]);

  const { numbers, expireDate, user, cvc, password } = cardInfo;
  return (
    <NewCardFormWrapper onSubmit={onSubmitCardForm}>
      <CardNumberInput
        numbers={numbers}
        errorMessage={errorMessage.numbers}
        onChangeCardInput={onChangeCardInput}
      />
      <CardExpireDateInput
        expireDate={expireDate}
        errorMessage={errorMessage.expireDate}
        onChangeCardInput={onChangeCardInput}
      />
      <CardUserInput
        user={user}
        errorMessage={errorMessage.user}
        onChangeCardInput={onChangeCardInput}
      />
      <CardCVCInput
        cvc={cvc}
        errorMessage={errorMessage.cvc}
        onChangeCardInput={onChangeCardInput}
        handleModalOpen={handleModalOpen}
      />
      <CardPasswordInput
        password={password}
        errorMessage={errorMessage.password}
        onChangeCardInput={onChangeCardInput}
      />
      {cardFormFilled && <ButtonMenu>다음</ButtonMenu>}
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
  }).isRequired,

  setNewCardInfo: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  handleModalOpen: PropTypes.func.isRequired,
};

export default NewCardForm;
