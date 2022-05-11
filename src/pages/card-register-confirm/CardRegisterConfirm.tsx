import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePaymentContext } from '../../PaymentContext';
import Card from '../../components/card/Card';
import { useCardRegisterContext } from '../card-register/context';
import useForm from '../../hooks/useForm/useForm';
import { UseFormSubmitResult } from '../../hooks/useForm/types';
import ConfirmButton from '../card-register/components/card-form/confirm-button/ConfirmButton';
import S from '../card-register/styled';

function CardRegisterConfirm() {
  const { cardList, addCard } = usePaymentContext();
  const { card } = useCardRegisterContext();
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(true);
  const { handleSubmit, register, watch } = useForm({ shouldValidateOnChange: true, shouldShowNativeHint: true });
  const prevCardListCount = React.useRef<number>(cardList.length);

  useEffect(() => {
    return watch('card-name', newValue => setDisabled(!newValue));
  }, []);

  useEffect(() => {
    const empty = (Object.keys(card) as (keyof typeof card)[]).some(key => {
      if (key === 'ownerName') return false;
      return card[key]?.length === 0;
    });
    empty && navigate('/');
  }, [navigate, card]);

  useEffect(() => {
    if (prevCardListCount.current < cardList.length) {
      prevCardListCount.current += 1;
      navigate('/');
    }
  }, [navigate, cardList]);

  const onSubmit = (event: React.FormEvent<HTMLFormElement>, result: UseFormSubmitResult) => {
    if (!result.isValid) return;
    if (!result.values) return;
    const cardName = result.values['card-name'];
    cardName && addCard({ ...card, cardName });
  };
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
