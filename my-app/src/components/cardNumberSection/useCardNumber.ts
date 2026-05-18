import {
  getCardBrand,
  getCardNumberArrayByBrand,
  getCardNumberError,
} from '../../utils/Validation';
import { useErrorTouched } from '../common/commonHooks/useErrorTouched';
import { useFocusRule } from '../common/commonHooks/useFocusRule';
import { useNumberInputCheck } from '../common/commonHooks/useNumberInputCheck';

interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

export const useCardNumber = ({ value, setValue }: Props) => {
  const currentBrand = getCardBrand(value.join(''));
  const maxLengthList = getCardNumberArrayByBrand(currentBrand);

  const { inputRefs, focusMove } = useFocusRule(maxLengthList.length);
  const { handleOnChange } = useNumberInputCheck({
    value,
    setValue,
    maxLengthList,
    valueUpdater: (currentValue, newValue, index) => {
      const newArr = [...currentValue];
      newArr[index] = newValue;

      const newBrand = getCardBrand(newArr.join(''));
      const newFormat = getCardNumberArrayByBrand(newBrand);

      if (newArr.length !== newFormat.length) {
        return newFormat.map((_, index) => newArr[index] || '');
      }

      return newArr;
    },
    onComplete: (index) => focusMove(index),
  });

  const { errors, finalErrorMessage, markingTouched } = useErrorTouched({
    value,
    length: maxLengthList.length,
    errorChecker: (val) => {
      const brand = getCardBrand(val.join(''));
      const currentFormat = getCardNumberArrayByBrand(brand);
      return val.map(
        (num, index) => getCardNumberError(num, currentFormat[index]) !== '',
      );
    },

    errorMessageGenerator: (val) => {
      const brand = getCardBrand(val.join(''));
      const currentFormat = getCardNumberArrayByBrand(brand);
      const errorIndex = val.findIndex(
        (num, index) => getCardNumberError(num, currentFormat[index]) !== '',
      );
      return errorIndex !== -1
        ? getCardNumberError(val[errorIndex], currentFormat[errorIndex])
        : '';
    },
  });

  return {
    inputRefs,
    handleOnChange,
    handleOnBlur: (_val: string, index: number) => markingTouched(index),
    errors,
    finalErrorMessage,
  };
};
