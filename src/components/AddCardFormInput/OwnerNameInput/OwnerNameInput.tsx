import { Fragment } from 'react';
import Field from '../../common/Field/Field';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';

import {
  isEnglishCharacter,
  isNotEmptyString,
} from '../../../domain/validators';
import { validateInput } from '../../../utils/validateInput';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import useFormFieldFocus from '../../../hooks/useFormFieldFocus';

const { title, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.OWNER_NAME;

function OwnerNameInput({
  values: ownerName,
  errorMessage,
  isError,
  onChange,
  onBlur,
}: InputProps<OwnerName>) {
  const {
    refs: [ref],
    moveToNextInput,
  } = useFormFieldFocus<HTMLInputElement>();

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

    if (result.isValid) moveToNextInput();
  };

  return (
    <Field title={title} labelText={labelText} errorMessage={errorMessage}>
      <Fragment key="ownerName">
        <Label
          htmlFor="ownerName"
          labelText={inputLabelText.ownerName}
          hideLabel
        />
        <Input
          ref={ref}
          id="ownerName"
          name="ownerName"
          placeholder={placeholder}
          value={ownerName.ownerName}
          isError={isError.ownerName}
          isRequired
          handleChange={handleOnChange}
          handleOnBlur={handleOnBlur}
          maxLength={26}
        />
      </Fragment>
    </Field>
  );
}

export default OwnerNameInput;
