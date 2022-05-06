import { COUNT, PLACEHOLDER } from '../constant';
import { numberRegex } from '../constant/regularExpression';
import validator from '../validation';
import useFocus from './useFocus';
import useSomeInput from './useSomeInput';

function useExpiredDateInput(inputNames) {
  const {
    stateObject: expiredDate,
    setStateObject: setExpiredDate,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
  } = useSomeInput(inputNames);

  const { focusPrevInput } = useFocus({
    validate: validator.validateExpiredDate,
    inputNames: inputNames,
    validations,
    inputRefs,
    currentInputRef: currentInputRef,
  });

  const isValid = Object.values(validations).every(valid => valid);

  const expiredDateString = Object.values(expiredDate).some(date => date)
    ? `${expiredDate.month}/${expiredDate.year}`
    : PLACEHOLDER.DATE;

  const onDateChange = ({ target, nativeEvent: { data, inputType } }) => {
    if (
      (numberRegex.test(data) || !data) &&
      target.value.length <= COUNT.DATE_MAX_COUNT
    ) {
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

  return {
    expiredDate,
    expiredDateString,
    validations,
    isValid,
    inputRefs,
    onDateChange,
  };
}

export default useExpiredDateInput;
