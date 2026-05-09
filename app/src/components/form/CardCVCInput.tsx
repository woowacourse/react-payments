import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { CardInput, CardSingleFieldContainer, CardLabel } from '../../style/CardStyles';
import { Validator } from '../../validators/CardValidator';
import { useCardContext } from '../../hooks/useCardContext';

export function CardCVCInput() {
  const { cardCVC, setCardCVC } = useCardContext();

  const [fieldErrors, setError] = useState({
    state: false,
    message: '',
  });

  const changeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const result = Validator.isNumber(value);
    if (!result.valid) {
      setError({ ...fieldErrors, state: true, message: result.message });
      return;
    }
    setError({ ...fieldErrors, state: false, message: '' });
    setCardCVC(value);
  };

  const handleBlurCVC = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const result = Validator.isValidCardCVCLength(value, e.target.maxLength);
    if (!result.valid) {
      setError({ ...fieldErrors, state: true, message: result.message });
      return;
    }
    setError({ ...fieldErrors, state: false, message: '' });
  };

  return (
    <CardSingleFieldContainer>
      <CardLabel htmlFor="card-cvc-input">CVC</CardLabel>
      <CardInput
        type="text"
        maxLength={3}
        inputMode="numeric"
        placeholder="123"
        id="card-cvc-input"
        value={cardCVC}
        onChange={changeCardCVC}
        onBlur={handleBlurCVC}
        $fieldErrors={fieldErrors.state}
      />
      <ErrorMessage message={fieldErrors['message']} />
    </CardSingleFieldContainer>
  );
}
