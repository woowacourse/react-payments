import { useContext, useEffect } from 'react';
import ExpiredDateInput from 'components/Modules/ExpiredDateInput';
import { CardContext, CardContextValue } from 'context/CardContext';
import { EXPIRED_DATE_INPUT_NAMES } from 'constant/inputNames';
import validator from 'validation';
import { COUNT } from 'constant';
import { numberRegex } from 'constant/regularExpression';
import useSomeInput from 'hooks/useSomeInput';
import { INPUT_ACTION } from 'Reducer/InputtedInfoReducer';

function ExpiredDateInputContainer() {
  const { inputtedInfoDispatch } = useContext(CardContext) as CardContextValue;

  const {
    stateObject: expiredDate,
    setStateObject: setExpiredDate,
    validations,
    setValidations,
    inputRefs,
    currentInputRef,
    focusPrevInput,
  } = useSomeInput(EXPIRED_DATE_INPUT_NAMES, validator.validateExpiredDate);

  const isValid = Object.values(validations).every(valid => valid);

  const checkNewDateValid = (unit: string, newDate: string, data: string) => {
    if ((numberRegex.test(data) || !data) && newDate.length <= COUNT.DATE_MAX_COUNT) {
      return unit === EXPIRED_DATE_INPUT_NAMES[0] ? Number(newDate) <= COUNT.MAX_MONTH : true;
    }
  };

  const onDateChange = ({ target, nativeEvent: { data, inputType } }: any) => {
    const unit = target.name;
    const newDate = target.value;

    if (checkNewDateValid(unit, newDate, data)) {
      updateDate(unit, newDate);
      updateValidation(unit, newDate);
      focusPrevInput(unit, newDate, inputType);
      currentInputRef.current = unit;
    }
  };

  const updateDate = (unit: string, date: string) => {
    setExpiredDate(prevDate => ({ ...prevDate, [unit]: date }));
  };

  const updateValidation = (unit: string, date: string) => {
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

  return (
    <ExpiredDateInput
      expiredDate={expiredDate}
      validations={validations}
      inputRefs={inputRefs}
      onDateChange={onDateChange}
    />
  );
}

export default ExpiredDateInputContainer;
