import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../common/Button';
import Card from '../../common/Card';
import Input from '../../common/Input';
import { v4 as uuidv4 } from 'uuid';
import { useHistory } from 'react-router-dom';
import {
  CardAdditionCompleteWrapper,
  CardAdditionTitle,
  FormColumn,
  CardInfo,
  CardFormButtons,
} from './index.styles';
import useModal from '../../hooks/useModal';
import { postNewCard } from '../../service/card';

const CardAdditionComplete = ({ newCardInfo, setNewCardInfo, addNewCard }) => {
  const history = useHistory();
  const { setIsModalOpen } = useModal();

  const onChangeNickNameInput = ({ target }) => {
    setNewCardInfo({ ...newCardInfo, cardNickName: target.value });
  };

  const {
    cardName,
    cardNickName,
    numbers,
    user,
    expireDate,
    cvc,
    password,
  } = newCardInfo;

  const { first, second, third, fourth } = numbers;
  const { month, year } = expireDate;

  const body = {
    id: uuidv4(),
    cardName,
    cardNickName,
    user,
    cvc,
    numbers: { first, second, third, fourth },
    expireDate: { month, year },
    password: {
      first: password.first,
      second: password.second,
    },
  };

  const onSubmitAddCard = async (e) => {
    e.preventDefault();

    addNewCard();
    postNewCard(history, body);

    alert('새 카드가 등록되었습니다.');
  };

  return (
    <CardAdditionCompleteWrapper onSubmit={onSubmitAddCard}>
      <CardAdditionTitle>
        <h1>카드등록이 완료되었습니다.</h1>
      </CardAdditionTitle>
      <CardInfo>
        <Card
          cardInfo={newCardInfo}
          setIsModalOpen={setIsModalOpen}
          disableClick
        />
      </CardInfo>
      <FormColumn>
        <Input
          nickNameInput
          value={newCardInfo.cardNickName}
          onChange={onChangeNickNameInput}
          placeholder='카드 별칭을 입력해주세요.'
        />
      </FormColumn>
      <CardFormButtons>
        <Button>다음</Button>
      </CardFormButtons>
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
};

export default CardAdditionComplete;
