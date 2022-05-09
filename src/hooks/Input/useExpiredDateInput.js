import { useContext, useEffect } from 'react';
import { COUNT } from 'constant';
import { numberRegex } from 'constant/regularExpression';
import { CardContext } from 'context/CardContext';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import validator from 'validation';
import useSomeInput from 'hooks/Input/useSomeInput';

function useExpiredDateInput(inputNames) {
  const { inputtedInfoDispatch } = useContext(CardContext);

  const {
    stateObject: expiredDate,
    setStateObject: setExpiredDate,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
    focusPrevInput,
  } = useSomeInput(inputNames, validator.validateExpiredDate);

  const isValid = Object.values(validations).every(valid => valid);

  const checkNewDateValid = (unit, newDate, data) => {
    if (
      (numberRegex.test(data) || !data) &&
      newDate.length <= COUNT.DATE_MAX_COUNT
    ) {
      return unit === inputNames[0] ? newDate <= COUNT.MAX_MONTH : true;
    }
  };

  const onDateChange = ({ target, nativeEvent: { data, inputType } }) => {
    const unit = target.name;
    const newDate = target.value;

    if (checkNewDateValid(unit, newDate, data)) {
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

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.EXPIRED_DATE,
      value: expiredDate,
      valid: isValid,
    });
  }, [expiredDate, isValid]);

  return {
    expiredDate,
    validations,
    isValid,
    inputRefs,
    onDateChange,
  };
}

export default useExpiredDateInput;
