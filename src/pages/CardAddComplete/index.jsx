import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CardContext } from '@/contexts';

import { Button, Header, TextField } from '@/components/@common';
import { Card } from '@/components';

import { PATH } from '@/constants';
import { putCardNickname } from '@/apis';

function CardAddComplete() {
  const { cardNumber, userName, expireMonth, expireYear } = useContext(CardContext);
  const [cardNickname, setCardNickname] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const isCardAddComplete = cardNumber.every((unit) => unit !== '');

    if (isCardAddComplete) return;

    navigate(PATH.CARD_ADD);
  }, [cardNumber, navigate]);

  const onChangeCardNickname = ({ target }) => {
    setCardNickname(target.value);
  };

  const onClickConfirmButton = async () => {
    try {
      await putCardNickname(cardNickname);

      navigate(PATH.CARD_LIST);
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex-column-center">
      <div className="flex-center">
        <Header className="page-comment mt-30 mb-10">카드등록이 완료되었습니다.</Header>
      </div>
      <Card
        size="big"
        cardNumber={cardNumber}
        userName={userName}
        expireMonth={expireMonth}
        expireYear={expireYear}
      />
      <TextField
        className="input-underline flex-center w-75"
        name="cardNickname"
        value={cardNickname}
        placeholder="카드의 별칭을 입력해주세요."
        maxLength={10}
        onChange={onChangeCardNickname}
      />
      <div className="button-container right mt-50">
        <Button onClick={onClickConfirmButton}>확인</Button>
      </div>
    </div>
  );
}

export default CardAddComplete;
