import { useState } from 'react';
import { ErrorMessage } from './ErrorMessage';
import { CardInput, CardSingleFieldContainer, CardLabel } from '../../style/CardStyles';
import { Validator } from '../../validators/CardValidator';
import { useCardContext } from '../../hooks/useCardContext';

export function CardPasswordInput({
  cardPasswordRef,
}: {
  cardPasswordRef: React.RefObject<HTMLInputElement | null>;
}) {
  const { cardPassword, setCardPassword } = useCardContext();

  const [fieldErrors, setError] = useState({
    state: false,
    message: '',
  });

  const changeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const result = Validator.isNumber(value);
    if (!result.valid) {
      setError({ ...fieldErrors, state: true, message: result.message });
      return;
    }
    setError({ ...fieldErrors, state: false, message: '' });
    setCardPassword(value);
  };

  const handleBlurPassword = (e: React.FocusEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const result = Validator.isValidPasswordLength(value, e.target.maxLength);
    if (!result.valid) {
      setError({ ...fieldErrors, state: true, message: result.message });
      return;
    }
    setError({ ...fieldErrors, state: false, message: '' });
  };

  return (
    <CardSingleFieldContainer>
      <CardLabel htmlFor="card-password-input">비밀번호 앞 2자리</CardLabel>
      <CardInput
        type="password"
        maxLength={2}
        inputMode="numeric"
        placeholder="12"
        id="card-password-input"
        value={cardPassword}
        onChange={changeCardPassword}
        onBlur={handleBlurPassword}
        $fieldErrors={fieldErrors.state}
        ref={cardPasswordRef}
      />
      <ErrorMessage message={fieldErrors['message']} />
    </CardSingleFieldContainer>
  );
}
