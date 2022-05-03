function useFocus({ validate, orders, validations, refs, currentOrderRef }) {
  const focusPrevOrder = (currentOrder, newNumber, inputType) => {
    if (
      currentOrder !== orders[0] &&
      newNumber.length === 0 &&
      inputType === 'deleteContentBackward'
    ) {
      const currentIndex = orders.findIndex(order => order === currentOrder);
      refs[orders[currentIndex - 1]].current.focus();
    }
  };

  const focusInvalidInput = order => {
    if (order && validate(refs[order].current.value)) {
      if (Object.values(validations).every(isValid => isValid)) {
        return;
      }
      const invalidOrder = Object.keys(validations).find(
        order => !validations[order]
      );
      refs[invalidOrder].current.focus();
    }
  };

  focusInvalidInput(currentOrderRef.current);

  return { focusPrevOrder };
}

export default useFocus;
