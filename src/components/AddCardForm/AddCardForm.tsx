import React from 'react';
import styles from './AddCardForm.module.css';

import CVCInput from '../AddCardFormInput/CVCInput/CVCInput';
import CardIssuerInput from '../AddCardFormInput/CardIssuerInput/CardIssuerInput';
import CardNumberInput from '../AddCardFormInput/CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../AddCardFormInput/ExpirationDateInput/ExpirationDateInput';
import OwnerNameInput from '../AddCardFormInput/OwnerNameInput/OwnerNameInput';
import PasswordInput from '../AddCardFormInput/PasswordInput/PasswordInput';
import CardPreview from '../CardPreview/CardPreview';
import Button from '../common/Button/Button';

import { useNavigate } from 'react-router-dom';
import { useAddCardFormContext } from '../../context/AddCardFormContext';
import useAddCardFormField from '../../hooks/useAddCardFormField';

export default function AddCardForm() {
  const { findStep, curStep, isFormValid } = useAddCardFormContext();

  const cardNumbersProps = useAddCardFormField<CardNumbers>({
    initialValues: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
  });
  const expirationDateProps = useAddCardFormField<ExpirationDate>({
    initialValues: {
      month: '',
      year: '',
    },
  });
  const ownerNameProps = useAddCardFormField<OwnerName>({
    initialValues: {
      ownerName: '',
    },
  });
  const cardIssuerProps = useAddCardFormField<CardIssuer>({
    initialValues: {
      cardIssuer: '',
    },
  });
  const cvcProps = useAddCardFormField<CVC>({
    initialValues: {
      cvc: '',
    },
  });
  const passwordProps = useAddCardFormField<Password>({
    initialValues: {
      password: '',
    },
  });

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid)
      navigate(`/confirm`, {
        state: {
          cardIssuer: cardIssuerProps.values.cardIssuer,
          firstNumbers: cardNumbersProps.values.first,
        },
      });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.srOnly}>카드 추가</h1>

      <CardPreview
        cardNumbers={Object.values(cardNumbersProps.values)}
        expirationDate={Object.values(expirationDateProps.values)}
        ownerName={Object.values(ownerNameProps.values)}
        cardIssuer={Object.values(cardIssuerProps.values)}
        cvc={Object.values(cvcProps.values)}
        password={Object.values(passwordProps.values)}
      />

      <form onSubmit={handleSubmit}>
        <PasswordInput {...passwordProps} />
        <CVCInput {...cvcProps} />
        <OwnerNameInput {...ownerNameProps} />
        <ExpirationDateInput {...expirationDateProps} />
        <CardIssuerInput {...cardIssuerProps} />
        <CardNumberInput {...cardNumbersProps} />

        {curStep >= findStep('password') && (
          <Button
            isActive={isFormValid}
            type="submit"
            theme="submit"
            text="확인"
            onClick={handleSubmit}
          />
        )}
      </form>
    </div>
  );
}
