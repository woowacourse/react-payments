function useFocus({
  validate,
  orders,
  validations,
  inputRefs,
  currentInputRef,
}) {
  const focusPrevOrder = (currentOrder, newNumber, inputType) => {
    if (
      currentOrder !== orders[0] &&
      newNumber.length === 0 &&
      inputType === 'deleteContentBackward'
    ) {
      const currentIndex = orders.findIndex(order => order === currentOrder);
      inputRefs[orders[currentIndex - 1]].current.focus();
    }
  };

  const focusInvalidInput = order => {
    if (order && validate(inputRefs[order].current.value)) {
      if (Object.values(validations).every(isValid => isValid)) {
        return;
      }
      const invalidOrder = Object.keys(validations).find(
        order => !validations[order]
      );
      inputRefs[invalidOrder].current.focus();
    }
  };

  focusInvalidInput(currentInputRef.current);

  return { focusPrevOrder };
}

export default useFocus;
