import { useState, useMemo } from 'react';
import validator from 'validation';
import { ownerNameInputRegex } from 'constant/regularExpression';

const useOwnerName = () => {
  const [ownerName, setOwnerName] = useState('');

  const isValidOwnerName = useMemo(() => validator.validateOwnerName(ownerName), [ownerName]);

  const handleChangeOwnerNameInput = ({ nativeEvent: { data, inputType }, target }) => {
    if (validator.isInvalidInputData(ownerNameInputRegex, data, inputType)) {
      return;
    }

    setOwnerName(target.value.toUpperCase());
  };

  return {
    ownerName,
    isValidOwnerName,
    handleChangeOwnerNameInput,
  };
};

export default useOwnerName;
