import React from 'react';
import styles from './AddCardForm.module.css';

import { INITIAL_VALUES } from '../../constants/form';

import CVCInput from '../AddCardFormInput/CVCInput/CVCInput';
import CardIssuerInput from '../AddCardFormInput/CardIssuerInput/CardIssuerInput';
import CardNumberInput from '../AddCardFormInput/CardNumberInput/CardNumberInput';
import ExpirationDateInput from '../AddCardFormInput/ExpirationDateInput/ExpirationDateInput';
import OwnerNameInput from '../AddCardFormInput/OwnerNameInput/OwnerNameInput';
import PasswordInput from '../AddCardFormInput/PasswordInput/PasswordInput';
import CardPreview from '../CardPreview/CardPreview';
import Button from '../common/Button/Button';

import { useNavigate } from 'react-router-dom';
import {
  AddCardFormContextType,
  useAddCardFormContext,
} from '../../context/AddCardFormContext';
import useAddCardFormField from '../../hooks/useAddCardFormField';

export default function AddCardForm() {
  const { findStep, curStep, isFormValid } =
    useAddCardFormContext() as AddCardFormContextType;

  const cardNumbersProps = useAddCardFormField<CardNumbers>({
    initialValues: INITIAL_VALUES.cardNumbers,
  });
  const expirationDateProps = useAddCardFormField<ExpirationDate>({
    initialValues: INITIAL_VALUES.expirationDate,
  });
  const ownerNameProps = useAddCardFormField<OwnerName>({
    initialValues: INITIAL_VALUES.ownerName,
  });
  const cardIssuerProps = useAddCardFormField<CardIssuer>({
    initialValues: INITIAL_VALUES.cardIssuer,
  });
  const cvcProps = useAddCardFormField<CVC>({
    initialValues: INITIAL_VALUES.cvc,
  });
  const passwordProps = useAddCardFormField<Password>({
    initialValues: INITIAL_VALUES.password,
  });

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (isFormValid)
      navigate(
        `/confirm/${cardNumbersProps.values.first}/${cardIssuerProps.values.cardIssuer}`
      );
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
