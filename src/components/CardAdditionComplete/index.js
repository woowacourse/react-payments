import React from 'react';

import Card from '../../common/Card';
import Input from '../../common/Input';
import { CardAdditionCompleteWrapper } from './index.styles';
import { PAGE } from '../../constants/constant';
import ButtonMenu from '../mixin/ButtonMenu';
import { useContext } from 'react';
import { CardListContext } from '../../data/context/CardListContext';
import { PageContext } from '../../data/context/PageContext';
import { CardContext } from '../../data/context/CardContext';

const CardAdditionComplete = () => {
  const { cardInfo, setCardInfo, cardId } = useContext(CardContext);
  const { addNewCard, modifyCardNickName } = useContext(CardListContext);
  const { setPage } = useContext(PageContext);

  const onChangeNickNameInput = (e) => {
    const { value } = e.target;

    setCardInfo({ ...cardInfo, cardNickName: value });
  };

  const onSubmitAddCard = (e) => {
    e.preventDefault();

    cardId
      ? modifyCardNickName(cardId, cardInfo.cardNickName)
      : addNewCard(cardInfo);

    setPage(PAGE.CARD_LIST);
  };

  return (
    <CardAdditionCompleteWrapper onSubmit={onSubmitAddCard}>
      <div className='form__column card-addition-title'>
        <h1>카드등록이 완료되었습니다.</h1>
      </div>
      <div className='form__column card-info'>
        <Card cardInfo={cardInfo} />
      </div>
      <div className='form__column'>
        <Input
          nickNameInput
          label='카드 별칭'
          value={cardInfo.cardNickName}
          onChange={onChangeNickNameInput}
          placeholder='카드 별칭을 입력해주세요.'
        />
      </div>
      <ButtonMenu visible>다음</ButtonMenu>
    </CardAdditionCompleteWrapper>
  );
};

export default CardAdditionComplete;
