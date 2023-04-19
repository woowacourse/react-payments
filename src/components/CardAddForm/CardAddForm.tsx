import styles from './style.module.css';
import { Dispatch, SetStateAction, useState } from 'react';
import CardExpirationDate from './CardExpirationDate/CardExpirationDate';
import CardNumber from './CardNumber/CardNumber';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardSecurityCode from './CardSecurityCode/CardSecurityCode';
import { Card, CardInputValidation } from '../../types';
import CardPassword from './CardPassword/CardPassword';
import validator from '../../utils/validator';

interface CardAddFormProps {
  onChange: Dispatch<SetStateAction<Card>>;
  onSubmit: Dispatch<SetStateAction<Card[]>>;
}

function CardAddForm({ onChange, onSubmit }: CardAddFormProps) {
  const [cardInputValidation, setCardInputValidation] = useState({
    cardNumber: false,
    expirationDate: false,
    ownerName: true,
    securityCode: false,
    password: false,
  });

  console.log(cardInputValidation);

  const handleValidationChange = (key: keyof CardInputValidation, value: boolean) => {
    setCardInputValidation((cardInputValidation) => {
      return {
        ...cardInputValidation,
        [key]: value,
      };
    });
  };

  const handleOwnerNameChange = (key: keyof CardInputValidation, inputValue: string) => {
    onChange((value) => {
      return {
        ...value,
        [key]: inputValue,
      };
    });
  };

  return (
    <form action="" className={styles.form}>
      <CardNumber onChange={() => {}} />
      <CardExpirationDate
        validator={validator.expirationDate}
        onValidation={handleValidationChange}
      />
      <CardOwnerName
        validator={validator.ownerName}
        onValidation={handleValidationChange}
        onChange={handleOwnerNameChange}
      />
      <CardSecurityCode validator={validator.securityCode} onValidation={handleValidationChange} />
      <CardPassword validator={validator.password} onValidation={handleValidationChange} />
    </form>
  );
}

export default CardAddForm;
