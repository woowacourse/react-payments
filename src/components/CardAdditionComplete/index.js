import React from 'react';
import PropTypes from 'prop-types';

import Card from '../../common/Card';
import Input from '../../common/Input';
import { CardAdditionCompleteWrapper } from './index.styles';
import { SUCCESS_MESSAGE } from '../../constants/constant';
import ButtonMenu from '../mixin/ButtonMenu';

const CardAdditionComplete = ({ newCardInfo, setNewCardInfo, addNewCard }) => {
  const onChangeNickNameInput = (e) => {
    const { value } = e.target;

    setNewCardInfo({ ...newCardInfo, cardNickName: value });
  };

  const onSubmitAddCard = (e) => {
    e.preventDefault();

    alert(SUCCESS_MESSAGE.NEW_CARD_REGISTER);

    addNewCard();
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
          label='카드 별칭'
          value={newCardInfo.cardNickName}
          onChange={onChangeNickNameInput}
          placeholder='카드 별칭을 입력해주세요.'
        />
      </div>
      <ButtonMenu visible>다음</ButtonMenu>
    </CardAdditionCompleteWrapper>
  );
};

CardAdditionComplete.propTypes = {
  newCardInfo: PropTypes.shape({
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
};

export default CardAdditionComplete;
