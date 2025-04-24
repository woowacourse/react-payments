import NumberInput from '../common/NumberInput';
import {
  NumberInputForm,
  Label,
  NumberInputContainer,
  ErrorText,
} from '../../styles/CardForm.styles';
import useCardNumberValidation from '../../hooks/Validation/useCardNumberValidation';

interface CardNumberFormProps {
  cardInfo: CardInfo;
  handleCardInfo: (
    field: keyof CardInfo,
    value: string,
    subfield?: keyof CardNumber | keyof Expiration
  ) => void;
  maxLength: number;
}

function CardNumberForm({ cardInfo, handleCardInfo, maxLength }: CardNumberFormProps) {
  const { isError, errorText } = useCardNumberValidation(cardInfo, maxLength);

  const NumberInputInfo = [
    {
      value: cardInfo.number.first,
      setValue: (value: string) => handleCardInfo('number', value, 'first'),
    },
    {
      value: cardInfo.number.second,
      setValue: (value: string) => handleCardInfo('number', value, 'second'),
    },
    {
      value: cardInfo.number.third,
      setValue: (value: string) => handleCardInfo('number', value, 'third'),
    },
    {
      value: cardInfo.number.fourth,
      setValue: (value: string) => handleCardInfo('number', value, 'fourth'),
    },
  ];

  return (
    <NumberInputForm>
      <Label>카드 번호</Label>
      <NumberInputContainer>
        {NumberInputInfo.map((inputInfo, index) => (
          <NumberInput
            key={index}
            value={inputInfo.value}
            setValue={inputInfo.setValue}
            maxLength={maxLength}
            placeholder="1234"
            isError={isError[index]}
          />
        ))}
      </NumberInputContainer>
      <ErrorText>{errorText}</ErrorText>
    </NumberInputForm>
  );
}

export default CardNumberForm;
