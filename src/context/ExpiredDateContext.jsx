import { createContext } from 'react';
import { PLACEHOLDER } from '../constant';
import validator from '../../src/validation';
import useFocus from '../hooks/useFocus';
import { numberRegex } from '../constant/regularExpression';
import useSomeInput from '../hooks/useSomeInput';

const ExpiredDateContext = createContext();

function ExpiredDateContextProvider({ children }) {
  const datePlaceholder = { month: 'MM', year: 'YY' };
  const units = ['month', 'year'];
  const {
    stateObject: expiredDate,
    setStateObject: setExpiredDate,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
  } = useSomeInput(units);

  const { focusPrevInput } = useFocus({
    validate: validator.validateExpiredDate,
    inputNames: units,
    validations,
    inputRefs,
    currentInputRef: currentInputRef,
  });

  const isValid = Object.values(validations).every(valid => valid);

  const expiredDateString = Object.values(expiredDate).some(date => date)
    ? `${expiredDate.month}/${expiredDate.year}`
    : PLACEHOLDER.DATE;

  const onDateChange = ({ target, nativeEvent: { data, inputType } }) => {
    if ((numberRegex.test(data) || !data) && target.value.length <= 2) {
      const unit = target.name;
      const newDate = target.value;

      updateDate(unit, newDate);
      updateValidation(unit, newDate);
      focusPrevInput(unit, newDate, inputType);
      currentInputRef.current = unit;
    }
  };

  const updateDate = (unit, date) => {
    setExpiredDate(prevDate => ({ ...prevDate, [unit]: date }));
  };

  const updateValidation = (unit, date) => {
    setValidations(prevValidations => ({
      ...prevValidations,
      [unit]: validator.validateDate(date),
    }));
  };

  return (
    <ExpiredDateContext.Provider
      value={{
        datePlaceholder,
        expiredDate,
        expiredDateString,
        validations,
        isValid,
        inputRefs,
        onDateChange,
      }}
    >
      {children}
    </ExpiredDateContext.Provider>
  );
}

export { ExpiredDateContext, ExpiredDateContextProvider };
