import Input from '../common/Input/Input';
import Field from '../common/Field/Field';
import Label from '../common/Label/Label';

import useAddCardInput, { InputType } from '../../hooks/useAddCardInput';

import { isEnglishCharacter } from '../../domain/validators';

import { ADD_CARD_FORM_FIELDS, ERRORS } from '../../constants/messages';
import { Fragment, useEffect } from 'react';

const { OWNER_NAME } = ADD_CARD_FORM_FIELDS;

interface OwnerNameInputProps {
  setCardData: (key: keyof CardInfo, newData: CardInfo[keyof CardInfo]) => void;
}

function OwnerNameInput({ setCardData }: OwnerNameInputProps) {
  const validateInputOnChange = ({ value }: InputType) => {
    if (value !== '' && !isEnglishCharacter(value)) {
      return { isValid: false, errorMsg: ERRORS.isNotAlphabet };
    }
    return { isValid: true, errorMsg: '' };
  };

  const updateCardData = () => {
    setCardData('ownerName', Object.values(ownerName));
  };

  const {
    values: ownerName,
    errMsg,
    isError,
    onChange,
    onBlur,
  } = useAddCardInput<OwnerName>({
    initialValues: {
      ownerName: '',
    },
    initialErrors: {
      ownerName: false,
    },
    validateInputOnChange,
    updateCardData,
  });

  useEffect(() => {
    console.log(ownerName);
  }, [ownerName]);

  return (
    <Field
      title={OWNER_NAME.title}
      labelText={OWNER_NAME.labelText}
      errMsg={errMsg}
    >
      {Object.keys(ownerName).map((n) => {
        const name = n as keyof OwnerName;
        return (
          <Fragment key={name}>
            <Label htmlFor={name} labelText={name} hideLabel />
            <Input
              id={name}
              name={name}
              placeholder={OWNER_NAME.placeholder}
              value={ownerName[name]}
              isError={isError[name]}
              isRequired
              handleChange={onChange}
              handleOnBlur={onBlur}
              maxLength={26}
            />
          </Fragment>
        );
      })}
    </Field>
  );
}

export default OwnerNameInput;
