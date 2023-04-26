import styles from './style.module.css';
import { ChangeEvent, FormEvent, MouseEvent, memo, useEffect, useRef } from 'react';
import { CardFormData, CardFormValidation } from '../../types';
import CardIssuer from './CardIssuer/CardIssuer';
import CardNumber from './CardNumber/CardNumber';
import CardExpirationDate from './CardExpirationDate/CardExpirationDate';
import CardOwnerName from './CardOwnerName/CardOwnerName';
import CardSecurityCode from './CardSecurityCode/CardSecurityCode';
import CardPassword from './CardPassword/CardPassword';
import Button from '../common/Button/Button';
import { useFormComplete } from '../../hooks/common/useFormComplete';
import { useFormFocus } from '../../hooks/common/useFormFocusMove';

interface CardAddFormProps {
  cardInformation: CardFormData;
  cardInputValidation: CardFormValidation;
  onButtonInputChange: (event: MouseEvent<HTMLButtonElement>) => void;
  onSingleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  onMultipleInputChange: (event: ChangeEvent<HTMLInputElement>) => void;
  updateCardInputValidation: (key: keyof CardFormValidation, value: string | string[]) => boolean;
  handleSubmit: (event: FormEvent<HTMLFormElement>) => void;
}

function CardAddForm({
  cardInformation,
  cardInputValidation,
  onButtonInputChange,
  onSingleInputChange,
  onMultipleInputChange,
  updateCardInputValidation,
  handleSubmit,
}: CardAddFormProps) {
  const isFormComplete = useFormComplete(cardInputValidation);
  const formRef = useRef<HTMLFormElement>(null);
  const inputRefs = useRef<(HTMLInputElement | HTMLButtonElement)[]>([]);
  const { moveFocus } = useFormFocus(inputRefs);

  useEffect(() => {
    if (formRef.current) {
      inputRefs.current = Array.from(formRef.current.querySelectorAll('input, button'));
    }
  }, [formRef]);

  return (
    <form ref={formRef} className={styles.form} onSubmit={handleSubmit}>
      <CardIssuer
        value={cardInformation.issuer}
        onInputChange={onButtonInputChange}
        updateCardInputValidation={updateCardInputValidation}
        moveFocus={moveFocus}
      />
      <CardNumber
        value={cardInformation.cardNumber}
        onInputChange={onSingleInputChange}
        updateCardInputValidation={updateCardInputValidation}
        moveFocus={moveFocus}
      />
      <CardExpirationDate
        value={cardInformation.expirationDate}
        onInputChange={onSingleInputChange}
        updateCardInputValidation={updateCardInputValidation}
        moveFocus={moveFocus}
      />
      <CardOwnerName
        value={cardInformation.ownerName}
        onInputChange={onSingleInputChange}
        moveFocus={moveFocus}
      />
      <CardSecurityCode
        value={cardInformation.securityCode}
        onInputChange={onSingleInputChange}
        updateCardInputValidation={updateCardInputValidation}
        moveFocus={moveFocus}
      />
      <CardPassword
        onInputChange={onMultipleInputChange}
        values={cardInformation.password}
        isValid={cardInputValidation.password}
      />
      <Button className="submit-button" variant="primary" disabled={!isFormComplete}>
        다음
      </Button>
    </form>
  );
}

export default memo(CardAddForm);
