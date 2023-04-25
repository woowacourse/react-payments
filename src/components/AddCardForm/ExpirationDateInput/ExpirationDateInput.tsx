import { useEffect } from 'react';

import { addSlashInExpirationDate } from '../replacers';
import { checkValidYearMonth } from '../validators';

import type { FormInputValueType } from '../../../types';
import useValidator from '../../../hooks/useValidator';
import LabeledInput from '../LabeledInput/LabeledInput';
import Input from '../../common/Input/Input';

type ExpirationDateInputProps = {
  updateExpirationDate: (expirationDate: FormInputValueType) => void;
};

const ExpirationDateInput = ({ updateExpirationDate }: ExpirationDateInputProps) => {
  const { value, isValid, errorMessage, setValueWithValidation } = useValidator(checkValidYearMonth);

  const setExpirationDate = (event: React.ChangeEvent<HTMLInputElement>) => {
    const expirationDate = event.target.value;
    const expirationDateWithSlash = addSlashInExpirationDate(expirationDate);

    setValueWithValidation(expirationDateWithSlash);
  };

  useEffect(() => {
    updateExpirationDate({ isValid: isValid, value: value });
  }, [value, isValid, updateExpirationDate]);

  return (
    <LabeledInput title="만료일" errorMessage={errorMessage}>
      <Input
        width="40%"
        onChange={setExpirationDate}
        value={value}
        maxLength={5}
        name="expirationDate"
        placeholder="MM/YY"
        required={true}
      />
    </LabeledInput>
  );
};

export default ExpirationDateInput;
