import { useNavigate } from 'react-router-dom';
import { useEffect, useRef } from 'react';

import * as styled from './NicknameForm.styled';

import { useCardInfoActions, useCardInfoValue } from '../../../context/CardInfoContext';
import { useCardListActions } from '../../../context/CardListContext';
import useForm from '../../../hooks/useForm';

import { Input } from '../../Form';

const NicknameForm = () => {
  const navigate = useNavigate();
  const [cardInfo, { setCardInfo, initCardInfo }] = [useCardInfoValue(), useCardInfoActions()];
  const { setCardList } = useCardListActions();

  const nicknameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nicknameInputRef.current?.focus();
  }, []);

  const { onChange, onSubmit } = useForm({
    submitAction: () => {
      setCardList((prev) => [cardInfo, ...prev]);
      navigate('/');
      initCardInfo();
    },
    changeAction: (name: string, value: string) => {
      setCardInfo((prev) => ({ ...prev, [name]: value }));
    },
    errorOptions: {},
  });

  return (
    <styled.NicknameForm onSubmit={onSubmit}>
      <Input
        ref={nicknameInputRef}
        type="text"
        center={true}
        maxLength={8}
        value={cardInfo.nickname}
        name="nickname"
        onChange={onChange}
        placeholder="카드 별칭 (선택)"
      />
      <styled.NicknameSubmitButton>완료</styled.NicknameSubmitButton>
    </styled.NicknameForm>
  );
};

export default NicknameForm;
