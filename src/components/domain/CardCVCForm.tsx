import NumberInput from '../common/NumberInput';
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from '../../styles/CardForm.styles';
import useCardCVCValidation from '../../hooks/Validation/useCardCVCValidation';

interface CardCVCFormProps {
  cardInfo: CardInfo;
  handleCardInfo: (field: keyof CardInfo, value: string) => void;
  maxLength: number;
}

function CardCVCForm({ cardInfo, handleCardInfo, maxLength }: CardCVCFormProps) {
  const { isCardCVCError, errorText } = useCardCVCValidation(cardInfo, maxLength);

  return (
    <NumberInputForm>
      <Label>CVC</Label>
      <NumberInputContainer>
        <NumberInput
          value={cardInfo.cvc}
          setValue={(value) => {
            handleCardInfo('cvc', value);
          }}
          maxLength={maxLength}
          placeholder="123"
          isError={isCardCVCError}
          autoFocus={true}
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardCVCForm;
