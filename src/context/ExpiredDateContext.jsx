import { createContext, useState, useRef } from 'react';
import { PLACEHOLDER } from '../constant';
import validator from '../../src/validation';
import useFocus from '../hooks/useFocus';
import { numberRegex } from '../constant/regularExpression';

const ExpiredDateContext = createContext();

function ExpiredDateContextProvider({ children }) {
  const datePlaceholder = { month: 'MM', year: 'YY' };
  const units = ['month', 'year'];
  const [expiredDate, setExpiredDate] = useState(
    Object.fromEntries(units.map(unit => [unit, '']))
  );
  const [validations, setValidation] = useState(
    Object.fromEntries(units.map(unit => [unit, false]))
  );
  const refs = Object.fromEntries(units.map(unit => [unit, useRef()]));
  const currentUnitRef = useRef();

  const isValid = Object.values(validations).every(valid => valid);

  const expiredDateString = Object.values(expiredDate).some(date => date)
    ? `${expiredDate.month}/${expiredDate.year}`
    : PLACEHOLDER.DATE;

  const { focusPrevOrder } = useFocus({
    validate: validator.validateExpiredDate,
    orders: units,
    validations,
    refs,
    currentOrderRef: currentUnitRef,
  });

  const onDateChange = ({ target, nativeEvent: { data, inputType } }) => {
    if ((numberRegex.test(data) || !data) && target.value.length <= 2) {
      const unit = target.name;
      const newDate = target.value;

      updateDate(unit, newDate);
      updateValidation(unit, newDate);
      focusPrevOrder(unit, newDate, inputType);
      currentUnitRef.current = unit;
    }
  };

  const updateDate = (unit, date) => {
    setExpiredDate(prevDate => ({ ...prevDate, [unit]: date }));
  };

  const updateValidation = (unit, date) => {
    setValidation(prevValidations => ({
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
        refs,
        currentUnitRef,
        onDateChange,
      }}
    >
      {children}
    </ExpiredDateContext.Provider>
  );
}

export { ExpiredDateContext, ExpiredDateContextProvider };
