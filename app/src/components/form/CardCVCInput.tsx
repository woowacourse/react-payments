import { ErrorMessage } from './ErrorMessage';
import { CardInput, CardSingleFieldContainer, CardLabel } from '../../style/CardStyles';
import { Validator } from '../../validators/CardValidator';
import { useCardContext } from '../../hooks/useCardContext';
import { useSingleInput } from '../../hooks/useSingleInput';

export function CardCVCInput({
  cardCVCRef,
  serverError,
  onCardCVCComplete,
}: {
  cardCVCRef: React.RefObject<HTMLInputElement | null>;
  serverError: { code: string; message: string } | null;
  onCardCVCComplete: () => void;
}) {
  const { cardCVC, setCardCVC } = useCardContext();

  const { fieldErrors, onChange, onBlur } = useSingleInput(
    setCardCVC,
    Validator.isNumber,
    Validator.isValidCardCVCLength,
  );

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
        onChange={(e) => {
          onChange(e);
          if (e.target.value.length === 3) {
            onCardCVCComplete();
          }
        }}
        onBlur={onBlur}
        $fieldErrors={fieldErrors.state}
        ref={cardCVCRef}
      />
      <ErrorMessage
        message={fieldErrors['message'] || (serverError?.code === 'INVALID_CVC' ? serverError.message : '')}
      />
    </CardSingleFieldContainer>
  );
}
