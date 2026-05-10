import { ErrorMessage } from './ErrorMessage';
import { CardInput, CardSingleFieldContainer, CardLabel } from '../../style/CardStyles';
import { Validator } from '../../validators/CardValidator';
import { useCardContext } from '../../hooks/useCardContext';
import { useSingleInput } from '../../hooks/useSingleInput';

export function CardPasswordInput({
  cardPasswordRef,
}: {
  cardPasswordRef: React.RefObject<HTMLInputElement | null>;
}) {
  const { cardPassword, setCardPassword } = useCardContext();

  const { fieldErrors, onChange, onBlur } = useSingleInput(
    setCardPassword,
    Validator.isNumber,
    Validator.isValidPasswordLength,
  );

  return (
    <CardSingleFieldContainer>
      <CardLabel htmlFor="card-password-input">비밀번호 앞 2자리</CardLabel>
      <CardInput
        type="password"
        autoComplete="off"
        maxLength={2}
        inputMode="numeric"
        placeholder="12"
        id="card-password-input"
        value={cardPassword}
        onChange={onChange}
        onBlur={onBlur}
        $fieldErrors={fieldErrors.state}
        ref={cardPasswordRef}
      />
      <ErrorMessage message={fieldErrors['message']} />
    </CardSingleFieldContainer>
  );
}
