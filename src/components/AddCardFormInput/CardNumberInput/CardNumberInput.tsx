import { Fragment } from 'react/jsx-runtime';
import Field from '../../common/Field/Field';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';

import { hasFourDigit, isInteger } from '../../../domain/validators';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import { CustomInputHandlerProps } from '../../../hooks/useAddCardFormField';
import { validateInput } from '../../../utils/validateInput';

interface CardNumberInputProps {
  values: CardNumbers;
  errorMessage: string;
  isError: Record<string, boolean>;
  onChange: (props: CustomInputHandlerProps<CardNumbers>) => void;
  onBlur: (props: CustomInputHandlerProps<CardNumbers>) => void;
}

const { title, description, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.CARD_NUMBER;

export default function CardNumberInput({
  values: cardNumbers,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: CardNumberInputProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as CardNumbersKey;

    const validators = [{ test: isInteger, errorMessage: ERRORS.isNotInteger }];
    const result = validateInput(value, validators);
    onChange({ ...result, name, value });
  };

  const handleOnBlur = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as CardNumbersKey;

    const validators = [
      { test: hasFourDigit, errorMessage: ERRORS.isNotFourDigit },
    ];
    const result = validateInput(value, validators);
    onBlur({ ...result, name, value });
  };

  return (
    <Field
      title={title}
      description={description}
      labelText={labelText}
      errorMessage={errorMessage}
    >
      {Object.keys(cardNumbers).map((n) => {
        const name = n as keyof CardNumbers;
        return (
          <Fragment key={name}>
            <Label htmlFor={name} labelText={inputLabelText[name]} hideLabel />
            <Input
              id={name}
              name={name}
              placeholder={placeholder}
              value={cardNumbers[name]}
              isError={isError[name]}
              handleChange={handleOnChange}
              handleOnBlur={handleOnBlur}
              maxLength={4}
            />
          </Fragment>
        );
      })}
    </Field>
  );
}
