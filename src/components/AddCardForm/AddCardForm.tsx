import React, { useEffect, useState } from 'react';
import styles from './AddCardForm.module.css';

import { INITIAL_VALUES } from '../../constants/form';

import CardPreview from '../CardPreview/CardPreview';
import PasswordInput from '../AddCardFormInput/PasswordInput/PasswordInput';
import CVCInput from '../AddCardFormInput/CVCInput/CVCInput';
import OwnerNameInput from '../AddCardFormInput/OwnerNameInput/OwnerNameInput';
import ExpirationDateInput from '../AddCardFormInput/ExpirationDateInput/ExpirationDateInput';
import CardIssuerInput from '../AddCardFormInput/CardIssuerInput/CardIssuerInput';
import CardNumberInput from '../AddCardFormInput/CardNumberInput/CardNumberInput';

import { useNavigate } from 'react-router-dom';
import useAddCardFormField from '../../hooks/useAddCardFormField';
import Button from '../common/Button/Button';

export default function AddCardForm() {
  const [isFormValid, setFormValid] = useState(false);

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

    if (isFormValid) navigate('/confirm');
  };

  useEffect(() => {
    setFormValid(
      () =>
        cardNumbersProps.isFieldComplete &&
        expirationDateProps.isFieldComplete &&
        ownerNameProps.isFieldComplete &&
        cardIssuerProps.isFieldComplete &&
        cvcProps.isFieldComplete &&
        passwordProps.isFieldComplete
    );
  }, [
    cardNumbersProps,
    expirationDateProps,
    ownerNameProps,
    cardIssuerProps,
    cvcProps,
    passwordProps,
  ]);

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
        {cvcProps.showNextStep && <PasswordInput {...passwordProps} />}
        {ownerNameProps.showNextStep && <CVCInput {...cvcProps} />}
        {expirationDateProps.showNextStep && (
          <OwnerNameInput {...ownerNameProps} />
        )}
        {cardIssuerProps.showNextStep && (
          <ExpirationDateInput {...expirationDateProps} />
        )}
        {cardNumbersProps.showNextStep && (
          <CardIssuerInput {...cardIssuerProps} />
        )}
        <CardNumberInput {...cardNumbersProps} />

        {passwordProps.showNextStep && (
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
