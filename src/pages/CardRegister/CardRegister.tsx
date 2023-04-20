import React, { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Card from '../../components/@common/Card/Card';
import CardCVCInput from '../../components/pages/CardRegister/CardCVCInput/CardCVCInput';
import CardExpirationDateInput from '../../components/pages/CardRegister/CardExpirationDateInput/CardExpirationDateInput';
import CardNameInput from '../../components/pages/CardRegister/CardNameInput/CardNameInput';
import CardNumberInput from '../../components/pages/CardRegister/CardNumberInput/CardNumberInput';
import CardPasswordInput from '../../components/pages/CardRegister/CardPasswordInput/CardPasswordInput';
import { useCardRegisterContext } from '../../context/CardRegisterContext';
import * as Styled from './CardRegister.styles';

export default function CardRegister() {
  const navigate = useNavigate();
  const { cardRegisterInfo } = useCardRegisterContext();
  const [allValid, setAllValid] = useState(false);
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate('/', { state: { isReadyForRegister: true } });
  };

  const handleChange = (e: FormEvent<HTMLFormElement>) => {
    const form = e.currentTarget as HTMLFormElement;
    const inputs = Array.from(form.elements).filter(
      (e) => e.tagName === 'INPUT'
    ) as HTMLInputElement[];

    inputs.find((input, i) => {
      if (input !== e.target) return;

      if (input.name === 'name') {
        if (input.value.length === input.maxLength) inputs[i + 1]?.focus();
        if (input.value === '') inputs[i - 1]?.focus();
        return;
      }

      if (input.validity.valid) inputs[i + 1]?.focus();
      if (input.value === '') inputs[i - 1]?.focus();
    });

    const allValid = inputs.every((input, i, inputs) => input.validity.valid);

    setAllValid(allValid);
  };

  return (
    <Styled.Root>
      <Styled.CardSection>
        <Card {...cardRegisterInfo} />
      </Styled.CardSection>
      <Styled.InfoSection>
        <Styled.RegisterForm onSubmit={handleSubmit} onChange={handleChange}>
          <CardNumberInput />
          <CardExpirationDateInput />
          <CardNameInput />
          <CardCVCInput />
          <CardPasswordInput />
          {allValid && <Styled.CompleteButton>바로</Styled.CompleteButton>}
        </Styled.RegisterForm>
      </Styled.InfoSection>
    </Styled.Root>
  );
}
