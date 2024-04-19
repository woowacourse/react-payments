import Input from '../common/Input/Input';
import Field from '../common/Field/Field';

import useAddCardInput, { InputType } from '../../hooks/useAddCardInput';
import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../constants/messages';
import { hasFourDigit, isInteger } from '../../domain/validators';

interface CardNumberInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

const { CARD_NUMBER } = ADD_CARD_FORM_FIELDS;

export default function CardNumberInput({ setCardData }: CardNumberInputProps) {
  const validateInputOnChange = ({ value }: InputType) => {
    if (!isInteger(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotInteger };
    }
    return { isValid: true, errorMsg: '' };
  };

  const validateInputOnBlur = ({ value }: InputType) => {
    if (!hasFourDigit(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotFourDigit };
    }
    return { isValid: true, errorMsg: '' };
  };

  const updateCardData = () => {
    setCardData('cardNumbers', Object.values(cardNumbers));
  };

  const {
    values: cardNumbers,
    errMsg,
    isError,
    onChange,
    onBlur,
  } = useAddCardInput<CardNumbers>({
    initialValues: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    initialErrors: {
      first: false,
      second: false,
      third: false,
      fourth: false,
    },
    validateInputOnChange,
    validateInputOnBlur,
    updateCardData,
  });

  return (
    <Field
      title={CARD_NUMBER.title}
      description={CARD_NUMBER.description}
      labelText={CARD_NUMBER.labelText}
      errMsg={errMsg}
    >
      {Object.keys(cardNumbers).map((n) => {
        const name = n as keyof CardNumbers;
        return (
          <Input
            key={name}
            name={name}
            placeholder={CARD_NUMBER.placeholder}
            value={cardNumbers[name]}
            isError={isError[name]}
            handleChange={onChange}
            handleOnBlur={onBlur}
            maxLength={Object.keys(cardNumbers).length}
          />
        );
      })}
    </Field>
  );
}
