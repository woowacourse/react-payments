import { useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import * as styled from './NicknameForm.styled';

import { useCardInfoActions, useCardInfoValue } from '../../../context/CardInfoContext';
import { useCardListActions } from '../../../context/CardListContext';
import useForm from '../../../hooks/useForm';

import { Input } from '../../';
import Loading from '../../Loading/Loading';

const NicknameForm = () => {
  const navigate = useNavigate();
  const [cardInfo, { setCardInfo, initCardInfo }] = [useCardInfoValue(), useCardInfoActions()];
  const { setCardList } = useCardListActions();
  const [isLoading, setIsLoading] = useState(false);

  const nicknameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nicknameInputRef.current?.focus();
  }, []);

  const { onChange, onSubmit } = useForm({
    submitAction: () => {
      setIsLoading(true);
      setCardList((prev) => [cardInfo, ...prev]);
      setTimeout(() => {
        setIsLoading(false);
        initCardInfo();
        navigate('/');
      }, 2000);
    },
    changeAction: (name: string, value: string) => {
      setCardInfo((prev) => ({ ...prev, [name]: value }));
    },
  });

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
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
      )}
    </>
  );
};

export default NicknameForm;
