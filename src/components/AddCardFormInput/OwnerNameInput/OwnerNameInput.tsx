import { Fragment, useEffect } from 'react';
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
import {
  AddCardFormContextType,
  useAddCardFormContext,
} from '../../../context/AddCardFormContext';

const { title, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.OWNER_NAME;

function OwnerNameInput({
  values: ownerName,
  errorMessage,
  isError,
  isFieldComplete,
  onChange,
  onBlur,
}: InputProps<OwnerName>) {
  const { findStep, curStep, setCurStep, setFormValid } =
    useAddCardFormContext() as AddCardFormContextType;

  const {
    refs: [ref],
    moveToNextInput,
  } = useFormFieldFocus<HTMLInputElement>();

  const name: OwnerNameKey = 'ownerName';
  const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;

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

  useEffect(() => {
    setFormValid(isFieldComplete);

    if (isFieldComplete && curStep <= findStep('ownerName')) {
      setCurStep((prev) => prev + 1);
    }
  }, [isFieldComplete]);

  return (
    curStep >= findStep('ownerName') && (
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
    )
  );
}

export default OwnerNameInput;
