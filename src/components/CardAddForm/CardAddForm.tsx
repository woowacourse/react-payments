import type { FormEvent } from 'react';
import type { CardFormData, CardFormValidation } from '../../types';
import Button from '../common/Button/Button';
import CardExpirationDate from './CardExpirationDate/CardExpirationDate';
import CardIssuer from './CardIssuer/CardIssuer';
import CardNumber from './CardNumber/CardNumber';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardPassword from './CardPassword/CardPassword';
import CardSecurityCode from './CardSecurityCode/CardSecurityCode';
import { useFormFocus } from '../../hooks/common/useFormFocusMove';
import styles from './style.module.css';

interface CardAddFormProps {
  cardInputError: CardFormValidation;
  updateInputValue: <K extends keyof CardFormData>(key: K, value: CardFormData[K]) => void;
  updateInputError: <K extends keyof CardFormValidation>(key: K, value: CardFormData[K]) => void;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

const CardAddForm = ({
  cardInputError,
  updateInputValue,
  updateInputError,
  handleSubmit,
}: CardAddFormProps) => {
  const { moveFocus } = useFormFocus();

  return (
    <form className={styles.form} onChange={moveFocus} onSubmit={handleSubmit} noValidate>
      <CardIssuer
        isError={cardInputError.issuer}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
      <CardNumber
        isError={cardInputError.cardNumber}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
      <CardExpirationDate
        isError={cardInputError.expirationDate}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
      <CardOwnerName updateInputValue={updateInputValue} />
      <CardSecurityCode
        isError={cardInputError.securityCode}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
      <CardPassword
        isError={cardInputError.password}
        updateInputValue={updateInputValue}
        updateInputError={updateInputError}
      />
      <Button className="submit-button" variant="primary">
        다음
      </Button>
    </form>
  );
};

export default CardAddForm;
