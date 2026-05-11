import { getCardBrand, getCardNumberArrayByBrand, getCardNumberError } from "../../utils/Validation";
import { useInputShell } from "../common/commonHook/useInputShell";


interface Props {
  value: string[];
  setValue: (value: string[]) => void;
}

export const useCardNumber = ({value, setValue}: Props) => {
  const currentBrand = getCardBrand(value.join(''));
  const maxLengthList = getCardNumberArrayByBrand(currentBrand);

  return useInputShell({
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

    errorChecker: (val) => {
      const brand = getCardBrand(val.join(''));
      const currentFormat = getCardNumberArrayByBrand(brand);
      return val.map((num, index) => getCardNumberError(num, currentFormat[index]) !== '');
    },

    errorMessageGenerator: (val) => {
      const brand = getCardBrand(val.join(''));
      const currentFormat = getCardNumberArrayByBrand(brand);
      const errorIndex = val.findIndex((num, index) => getCardNumberError(num, currentFormat[index]) !== '');
      return errorIndex !== -1 ? getCardNumberError(val[errorIndex], currentFormat[errorIndex]) : '';
    },
  });
};