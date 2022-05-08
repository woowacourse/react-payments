import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../shared/components/card/Card';
import ConfirmButton from '../components/card-form/confirm-button/ConfirmButton';
import { useCardRegisterContext } from '../context';
import { UseFormSubmitResult } from '../hooks/useForm/types';
import useForm from '../hooks/useForm/useForm';
import S from '../styled';

function CardRegisterConfirm() {
  const { card } = useCardRegisterContext();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const { handleSubmit, register, watch } = useForm({ shouldValidateOnChange: true, shouldShowNativeHint: true });

  useEffect(() => {
    return watch('card-name', newValue => setDisabled(!newValue));
  }, [watch]);

  useEffect(() => {
    const empty = (Object.keys(card) as (keyof typeof card)[]).some(key => card[key].length === 0);
    empty && navigate('/');
  }, [navigate, card]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>, result: UseFormSubmitResult) => {};
  return (
    <S.CardRegisterConfirm>
      <h2>카드등록이 완료되었습니다</h2>
      <Card marginBottom="30px" {...card} />
      <form id="card-register-confirm-form" onSubmit={handleSubmit(onSubmit)}>
        <S.CardNameInput
          {...register('card-name', { required: { value: true, message: '카드 이름을 입력해 주세요' } })}
        />
        <ConfirmButton disabled={disabled}>확인</ConfirmButton>
      </form>
    </S.CardRegisterConfirm>
  );
}

export default CardRegisterConfirm;
