import { INPUT_TYPE } from 'constant';
import { MutableRefObject } from 'react';

interface UseFocusArgs {
  validate: (target: string) => boolean;
  inputNames: string[];
  validations: { [k: string]: boolean };
  inputRefs: { [k: string]: MutableRefObject<HTMLInputElement | null> };
  currentInputRef: MutableRefObject<string | undefined>;
}

function useFocus<T>({
  validate,
  inputNames,
  validations,
  inputRefs,
  currentInputRef,
}: UseFocusArgs) {
  const focusNextInput = (currentInputName: string) => {
    if (currentInputName !== inputNames[inputNames.length - 1]) {
      const currentIndex = inputNames.findIndex(name => name === currentInputName);
      inputRefs[inputNames[currentIndex + 1]].current?.focus();
    }
  };

  const focusPrevInput = (currentInputName: string, newNumber: string, inputType: string) => {
    if (
      currentInputName !== inputNames[0] &&
      newNumber.length === 0 &&
      inputType === INPUT_TYPE.BACKWARD
    ) {
      const currentIndex = inputNames.findIndex(name => name === currentInputName);
      inputRefs[inputNames[currentIndex - 1]].current?.focus();
    }
  };

  const focusInvalidInput = (name: string) => {
    if (name && validate(inputRefs[name].current!.value)) {
      if (Object.values(validations).every(isValid => isValid)) {
        return;
      }
      const invalidInputName = Object.keys(validations).find(name => !validations[name]);
      if (invalidInputName) {
        inputRefs[invalidInputName].current?.focus();
      }
    }
  };

  if (currentInputRef.current) {
    focusInvalidInput(currentInputRef.current);
  }

  return { focusNextInput, focusPrevInput };
}

export default useFocus;
