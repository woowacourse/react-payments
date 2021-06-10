import React, { useContext } from 'react';
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
import { CardContext } from '../../context/CardContext';

const CardAdditionComplete = () => {
  const history = useHistory();
  const { setIsModalOpen } = useModal();
  const { cardInfo, setCardInfo, addNewCard } = useContext(CardContext);

  const onChangeNickNameInput = ({ target }) => {
    setCardInfo({ ...cardInfo, cardNickName: target.value });
  };

  const {
    cardName,
    cardNickName,
    numbers,
    user,
    expireDate,
    cvc,
    password,
  } = cardInfo;

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

    await postNewCard(body);
    addNewCard();

    alert('새 카드가 등록되었습니다.');
    history.push('/lists');
  };

  return (
    <CardAdditionCompleteWrapper onSubmit={onSubmitAddCard}>
      <CardAdditionTitle>
        <h1>카드등록이 완료되었습니다.</h1>
      </CardAdditionTitle>
      <CardInfo>
        <Card
          cardInfo={cardInfo}
          setIsModalOpen={setIsModalOpen}
          disableClick
        />
      </CardInfo>
      <FormColumn>
        <Input
          nickNameInput
          value={cardInfo.cardNickName}
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

export default CardAdditionComplete;
