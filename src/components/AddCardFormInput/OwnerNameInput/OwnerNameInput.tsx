import { useEffect } from 'react';
import Field from '../../common/Field/Field';
import Input from '../../common/Input/Input';
import Label from '../../common/Label/Label';

import {
  isEnglishCharacter,
  isNotEmptyString,
} from '../../../domain/validators';
import { validateInput } from '../../../utils/validateInput';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../../constants/messages';
import { useAddCardFormContext } from '../../../context/AddCardFormContext';
import useFormFieldFocus from '../../../hooks/useFormFieldFocus';

const { title, labelText, placeholder, inputLabelText } =
  ADD_CARD_FORM_FIELDS.OWNER_NAME;

function OwnerNameInput({
  values: ownerName,
  errorMessage,
  isError,
  isFieldComplete,
  handleInputChange,
  handleInputBlur,
}: InputProps<OwnerName>) {
  const { findStep, curStep, setCurStep, setFormValid } =
    useAddCardFormContext();

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
    handleInputChange({ ...result, name, value });
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
    handleInputBlur({ ...result, name, value });

    if (result.isValid) moveToNextInput();
  };

  useEffect(() => {
    setFormValid(isFieldComplete);

    if (isFieldComplete && curStep <= findStep('ownerName')) {
      setCurStep((prev) => prev + 1);
    }
  }, [isFieldComplete]);

  const isVisible = curStep >= findStep('ownerName');
  if (!isVisible) return null;
  return (
    <Field title={title} labelText={labelText} errorMessage={errorMessage}>
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
        autoFocus
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        maxLength={26}
      />
    </Field>
  );
}

export default OwnerNameInput;
