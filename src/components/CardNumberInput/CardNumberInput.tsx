import Input from '../common/Input/Input';
import Field from '../layout/Field/Field';

import useAddCardInput from '../../hooks/useAddCardInput';
import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../constants/messages';
import { hasFourDigit, isInteger } from '../../domain/validators';

interface CardNumberInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

const { CARD_NUMBER } = ADD_CARD_FORM_FIELDS;

export default function CardNumberInput({ setCardData }: CardNumberInputProps) {
  const validateInputOnChange = ({
    value,
  }: {
    name?: string;
    value: string;
  }) => {
    if (!isInteger(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotInteger };
    }
    return { isValid: true, errorMsg: '' };
  };

  const validateInputOnBlur = ({ value }: { name?: string; value: string }) => {
    if (!hasFourDigit(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotFourDigit };
    }
    return { isValid: true, errorMsg: '' };
  };

  const processData = () => {
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
    processData,
  });

  return (
    <Field
      title={CARD_NUMBER.title}
      description={CARD_NUMBER.description}
      labelText={CARD_NUMBER.labelText}
      errMsg={errMsg}
    >
      {Object.keys(cardNumbers).map((name) => (
        <Input
          key={name}
          name={name as keyof CardNumbers}
          placeholder={CARD_NUMBER.placeholder}
          value={cardNumbers[name as keyof CardNumbers]}
          isError={isError[name as keyof CardNumbers]}
          handleChange={onChange}
          handleOnBlur={onBlur}
          maxLength={4}
        ></Input>
      ))}
    </Field>
  );
}
