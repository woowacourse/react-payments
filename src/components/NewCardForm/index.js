import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import { NewCardFormWrapper } from './index.styles';
import {
  getCardNumberMessage,
  getCVCMessage,
  getExpireDateMessage,
  getPasswordMessage,
  getUserMessage,
} from './cardFormValidator';
import CardNumberInput from './CardNumberInput';
import CardExpireDateInput from './CardExpireDateInput';
import CardUserInput from './CardUserInput';
import CardCVCInput from './CardCVCInput';
import CardPasswordInput from './CardPasswordInput';

const NewCardForm = ({ cardInfo, setNewCardInfo, handleModalOpen }) => {
  const [errorMessage, setErrorMessage] = useState({
    numbers: '',
    expireDate: '',
    user: '',
    cvc: '',
    password: '',
  });

  const messageObject = {
    numbers: (value) => getCardNumberMessage(value),
    expireDate: (value) => getExpireDateMessage(value),
    password: (value) => getPasswordMessage(value),
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

    // 만료일 - 올해/이번달 이후인지 검증
    //다음 컴포넌트 렌더링
  };

  const { numbers, expireDate, user, cvc, password } = cardInfo;

  return (
    <NewCardFormWrapper onSubmit={onSubmitCardForm}>
      <CardNumberInput
        numbers={numbers}
        errorMessage={errorMessage.numbers}
        onChangeCardInputObject={onChangeCardInputObject}
      />
      <CardExpireDateInput
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
        cvc={cvc}
        errorMessage={errorMessage.cvc}
        onChangeCardInput={onChangeCardInput}
        handleModalOpen={handleModalOpen}
      />
      <CardPasswordInput
        password={password}
        errorMessage={errorMessage.password}
        onChangeCardInputObject={onChangeCardInputObject}
      />
      <div className='form__column'>
        <Button>다음</Button>
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
  handleModalOpen: PropTypes.func,
};

export default NewCardForm;
