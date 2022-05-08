import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { nanoid } from 'nanoid';
import styled from 'styled-components';

import { InputBasic } from '../common/styled';
import { Button } from '../common/Button';
import { Card } from '../common/Card';
import {
  deleteCardInfos,
  getCardInfos,
  setCardInfos,
} from '../../utils/localStorage';

export const CardNickName = ({
  cardInfo,
  message = '카드 등록이 완료되었습니다!',
  isModify,
}) => {
  const navigate = useNavigate();
  const cardId = useLocation().pathname.split('/')[3];
  const info = isModify ? getCardInfos(cardId)[cardId] : cardInfo;

  const [cardNickName, setCardNickName] = useState(info.cardNickName ?? '');

  const handleSubmitCardInfo = () => {
    const id = info.id ?? nanoid();
    const { password, CVC, ...safeCardInfo } = info;
    const uploadCardInfo = {
      [id]: {
        ...safeCardInfo,
        id: id,
        cardNickName,
      },
    };

    setCardInfos(uploadCardInfo);
    navigate('/react-payments');
  };

  const handleDeleteCard = () => {
    if (confirm('정말 삭제하시겠습니까?')) {
      deleteCardInfos(info.id);
      navigate('/react-payments');
    }
  };

  return (
    <>
      <Style.CardWrapper>
        <Style.Message>{message}</Style.Message>
        <Card size="lg" cardInfo={info} />
        <Style.ModifyCardNameInput
          value={cardNickName}
          onChange={(e) => {
            setCardNickName(e.target.value);
          }}
          placeholder="별칭을 입력해주세요."
        />
      </Style.CardWrapper>
      <Style.ButtonWrapper>
        {isModify && <Button onClick={handleDeleteCard}>삭제</Button>}
        <Button onClick={handleSubmitCardInfo}>확인</Button>
      </Style.ButtonWrapper>
    </>
  );
};

const Style = {
  Message: styled.h1`
    font-size: 22px;
    font-weight: unset;
    margin-bottom: 5rem;
  `,
  CardWrapper: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 5rem;
  `,
  ModifyCardNameInput: styled(InputBasic)`
    background-color: transparent;
    border-bottom: 1px solid black;
    width: 80%;
    border-radius: 0;
    color: black;
    margin-top: 15px;
  `,
  ButtonWrapper: styled.div`
    margin-top: 5rem;
    width: 100%;
    text-align: right;
  `,
};
