import NumberInput from '../common/NumberInput';
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from '../../styles/CardForm.styles';
import useCardPasswordValidation from '../../hooks/Validation/useCardPasswordValidation';

interface CardPasswordProps {
  cardInfo: CardInfo;
  handleCardInfo: (field: keyof CardInfo, value: string) => void;
  maxLength: number;
}

function CardPasswordForm({ cardInfo, handleCardInfo, maxLength }: CardPasswordProps) {
  const { isError, errorText } = useCardPasswordValidation(cardInfo, maxLength);

  return (
    <NumberInputForm>
      <Label>비밀번호 앞 2자리</Label>
      <NumberInputContainer>
        <NumberInput
          value={cardInfo.passwordFront}
          setValue={(value) => {
            handleCardInfo('passwordFront', value);
          }}
          maxLength={maxLength}
          placeholder="**"
          isHidden={true}
          isError={isError}
        />
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardPasswordForm;
