import NumberInput from '../common/NumberInput';
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from '../../styles/CardForm.styles';
import useCardExpirationValidation from '../../hooks/Validation/useCardExpirationValidation';

interface CardExpirationFormProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) => void;
  maxLength: number;
}

function CardExpirationForm({ cardInfo, handleCardInfo, maxLength }: CardExpirationFormProps) {
  const { isCardExpirationError, errorText } = useCardExpirationValidation(cardInfo, maxLength);

  const InputInfo = [
    {
      value: cardInfo.expiration.month,
      setValue: (value: string) => handleCardInfo('expiration', value, 'month'),
      placeholder: 'MM',
    },
    {
      value: cardInfo.expiration.year,
      setValue: (value: string) => handleCardInfo('expiration', value, 'year'),
      placeholder: 'YY',
    },
  ];

  return (
    <NumberInputForm>
      <Label>유효기간</Label>
      <NumberInputContainer>
        {InputInfo.map((inputInfo, index) => (
          <NumberInput
            key={index}
            value={inputInfo.value}
            setValue={inputInfo.setValue}
            maxLength={maxLength}
            placeholder={inputInfo.placeholder}
            isError={isCardExpirationError[index]}
          />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardExpirationForm;
