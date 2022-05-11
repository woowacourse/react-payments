import { INPUT_TYPE } from 'constant';

function useFocus({
  validate,
  inputNames,
  validations,
  inputRefs,
  currentInputRef,
}) {
  const focusNextInput = currentInputName => {
    if (currentInputName !== inputNames[inputNames.length - 1]) {
      const currentIndex = inputNames.findIndex(
        name => name === currentInputName
      );
      inputRefs[inputNames[currentIndex + 1]].current.focus();
    }
  };

  const focusPrevInput = (currentInputName, newNumber, inputType) => {
    if (
      currentInputName !== inputNames[0] &&
      newNumber.length === 0 &&
      inputType === INPUT_TYPE.BACKWARD
    ) {
      const currentIndex = inputNames.findIndex(
        name => name === currentInputName
      );
      inputRefs[inputNames[currentIndex - 1]].current.focus();
    }
  };

  const focusInvalidInput = name => {
    if (name && validate(inputRefs[name].current.value)) {
      if (Object.values(validations).every(isValid => isValid)) {
        return;
      }
      const invalidInputName = Object.keys(validations).find(
        name => !validations[name]
      );
      inputRefs[invalidInputName].current.focus();
    }
  };

  focusInvalidInput(currentInputRef.current);

  return { focusNextInput, focusPrevInput };
}

export default useFocus;
