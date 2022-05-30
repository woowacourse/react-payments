import { useState, useMemo } from 'react';
import validator from 'validation';
import { numberRegex } from 'constant/regularExpression';

const useSecurityNumber = () => {
  const [securityNumber, setSecurityNumber] = useState('');

  const isValidSecurityNumber = useMemo(
    () => validator.validateSecurityNumber(securityNumber),
    [securityNumber]
  );

  const handleChangeSecurityNumber = ({ nativeEvent: { data, inputType }, target }) => {
    if (validator.isInvalidInputData(numberRegex, data, inputType)) {
      return;
    }

    setSecurityNumber(target.value);
  };

  return {
    securityNumber,
    isValidSecurityNumber,
    handleChangeSecurityNumber,
  };
};

export default useSecurityNumber;
