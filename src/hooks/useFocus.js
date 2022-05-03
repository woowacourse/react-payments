function useFocus({
  validate,
  inputNames,
  validations,
  inputRefs,
  currentInputRef,
}) {
  const focusPrevInput = (currentInput, newNumber, inputType) => {
    if (
      currentInput !== inputNames[0] &&
      newNumber.length === 0 &&
      inputType === 'deleteContentBackward'
    ) {
      const currentIndex = inputNames.findIndex(name => name === currentInput);
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

  return { focusPrevInput };
}

export default useFocus;
