import React from 'react';
import { css } from '@emotion/react';
import { useNavigate } from 'react-router-dom';
import { Card } from '../../types';
import { useCardRegisterContext } from './context';
import useForm from '../../hooks/useForm/useForm';
import { UseFormSubmitResult } from '../../hooks/useForm/types';
import S from './styled';
import { FormProvider } from '../../hooks/useForm/useFormContext';
import CardPreview from './components/card-preview/CardPreview';
import CardNumber from './components/card-form/card-number/CardNumber';
import CardExpiredPeriod from './components/card-form/card-expired-period/CardExpiredPeriod';
import CardOwnerName from './components/card-form/card-owner/CardOwnerName';
import CardCVC from './components/card-form/card-cvc/CardCVC';
import CardPassword from './components/card-form/card-password/CardPassword';
import ConfirmButtonContainer from './components/card-form/confirm-button/ConfirmButtonContainer';

function CardRegister() {
  const { updateCard } = useCardRegisterContext();
  const navigate = useNavigate();
  const methods = useForm({ shouldValidateOnChange: true, shouldShowNativeHint: true, shouldUseAutoFocus: true });
  const { handleSubmit } = methods;
  const onSubmit = (event: React.FormEvent<HTMLFormElement>, result: UseFormSubmitResult) => {
    const { values } = result;
    if (!values) return;

    const cardNumber = `${values['card-number-1']}${values['card-number-2']}${values['card-number-3']}${values['card-number-4']}`;
    const ownerName = values['card-owner-name'];
    const { cvc } = values;
    const expiredPeriod = `${values['expired-period-1']}${values['expired-period-2']}`;
    const password = `${values['password-1']}${values['password-2']}`;

    const newCard: Card = {
      cardNumber,
      ownerName,
      cvc,
      expiredPeriod,
      password,
    };

    updateCard(newCard);

    navigate('/card-register-confirm');
  };

  return (
    <S.CardRegister>
      <FormProvider {...methods}>
        <form id="card-register-form" onSubmit={handleSubmit(onSubmit)}>
          <div
            css={css`
              display: flex;
              justify-content: center;
            `}
          >
            <CardPreview />
          </div>
          <CardNumber />
          <CardExpiredPeriod />
          <CardOwnerName />
          <CardCVC />
          <CardPassword />
          <ConfirmButtonContainer>다음</ConfirmButtonContainer>
        </form>
      </FormProvider>
    </S.CardRegister>
  );
}

export default CardRegister;
