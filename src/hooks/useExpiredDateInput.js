import { useContext, useEffect } from 'react';
import { COUNT } from 'constant';
import { numberRegex } from 'constant/regularExpression';
import { CardContext } from 'context/CardContext';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';
import validator from 'validation';
import useFocus from 'hooks/useFocus';
import useSomeInput from 'hooks/useSomeInput';

function useExpiredDateInput(inputNames) {
  const { inputtedInfoDispatch } = useContext(CardContext);

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
