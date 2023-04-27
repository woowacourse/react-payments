import { ChangeEvent } from 'react';
import { checkNumberFormat } from '../../utils/formatChecker';

const useCardNumber = () => {
  const handleInputTypeChange = ({ target, nativeEvent }: ChangeEvent<HTMLInputElement>) => {
    if (
      !(nativeEvent instanceof InputEvent) ||
      target.dataset.value === undefined ||
      target.selectionStart === null
    ) {
      return;
    }

    if (nativeEvent.inputType === 'insertText') {
      const value = nativeEvent.data as string;
      target.dataset.value = checkNumberFormat(value)
        ? target.dataset.value + value
        : target.dataset.value;
    }

    if (nativeEvent.inputType === 'deleteContentBackward') {
      const modifiedValue =
        target.dataset.value.slice(0, target.selectionStart) +
        target.dataset.value.slice(target.selectionStart + 1);
      target.dataset.value = modifiedValue;
    }
  };

  return { handleInputTypeChange };
};

export { useCardNumber };
