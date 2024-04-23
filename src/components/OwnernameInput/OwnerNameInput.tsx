import { Fragment } from 'react';
import Field from '../common/Field/Field';
import Input from '../common/Input/Input';
import Label from '../common/Label/Label';

import { isNotEmptyString, isEnglishCharacter } from '../../domain/validators';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../constants/messages';
import { CustomInputHandlerProps } from '../../hooks/useAddCardFormField';
import { validateInput } from '../../utils/validateInput';

const { title, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.OWNER_NAME;

interface OwnerNameInputProps {
  ownerName: OwnerName;
  errorMessage: string;
  isError: Record<string, boolean>;
  onChange: (props: CustomInputHandlerProps<OwnerName>) => void;
  onBlur: (props: CustomInputHandlerProps<OwnerName>) => void;
}

function OwnerNameInput({
  ownerName,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: OwnerNameInputProps) {
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as OwnerNameKey;

    const validators = [
      {
        test: () => value === '' || isEnglishCharacter(value),
        errorMessage: ERRORS.isNotAlphabet,
      },
    ];
    const result = validateInput(value, validators);
    onChange({ ...result, name, value });
  };

  const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const { value } = event.target;
    const name = event.target.name as OwnerNameKey;

    const validators = [
      {
        test: isNotEmptyString,
        errorMessage: ERRORS.invalidOwnerName,
      },
    ];
    const result = validateInput(value, validators);
    onBlur({ ...result, name, value });
  };

  return (
    <Field title={title} labelText={labelText} errorMessage={errorMessage}>
      {Object.keys(ownerName).map((n) => {
        const name = n as keyof OwnerName;
        return (
          <Fragment key={name}>
            <Label htmlFor={name} labelText={inputLabelText[name]} hideLabel />
            <Input
              id={name}
              name={name}
              placeholder={placeholder}
              value={ownerName[name]}
              isError={isError[name]}
              isRequired
              handleChange={handleOnChange}
              handleOnBlur={handleOnBlur}
              maxLength={26}
            />
          </Fragment>
        );
      })}
    </Field>
  );
}

export default OwnerNameInput;
