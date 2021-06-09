import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import Card from '../../common/Card';
import Input from '../../common/Input';
import { v4 as uuidv4 } from 'uuid';
import { CardAdditionCompleteWrapper } from './index.styles';

const CardAdditionComplete = ({
  newCardInfo,
  setNewCardInfo,
  addNewCard,
  setPage,
}) => {
  const onChangeNickNameInput = (e) => {
    const { value } = e.target;

    setNewCardInfo({ ...newCardInfo, cardNickName: value });
  };

  const onSubmitAddCard = async (e) => {
    e.preventDefault();

    addNewCard();
    alert('새 카드가 등록되었습니다.');
    setPage('cardList');
    const {
      cardName,
      cardNickName,
      numbers,
      user,
      expireDate,
      cvc,
      password,
    } = newCardInfo;

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        id: uuidv4(),
        cardName,
        cardNickName,
        user,
        cvc,
        numbers: {
          first: numbers.first,
          second: numbers.second,
          third: numbers.third,
          fourth: numbers.fourth,
        },
        expireDate: {
          month: expireDate.month,
          year: expireDate.year,
        },
        password: {
          first: password.first,
          second: password.second,
        },
      }),
    };

    try {
      const response = await fetch(
        'http://localhost:4000/cards',
        requestOptions
      ).then((response) => response.json());
      const data = await response;
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <CardAdditionCompleteWrapper onSubmit={onSubmitAddCard}>
      <div className='form__column card-addition-title'>
        <h1>카드등록이 완료되었습니다.</h1>
      </div>
      <div className='form__column card-info'>
        <Card cardInfo={newCardInfo} />
      </div>
      <div className='form__column'>
        <Input
          nickNameInput
          value={newCardInfo.cardNickName}
          onChange={onChangeNickNameInput}
          placeholder='카드 별칭을 입력해주세요.'
        />
      </div>
      <div className='card-form-btns'>
        <Button>다음</Button>
      </div>
    </CardAdditionCompleteWrapper>
  );
};

CardAdditionComplete.propTypes = {
  newCardInfo: PropTypes.shape({
    id: PropTypes.string,
    cardName: PropTypes.string,
    cardNickName: PropTypes.string,
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
  addNewCard: PropTypes.func,
  setPage: PropTypes.func,
};

export default CardAdditionComplete;
