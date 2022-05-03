const useInitialCard = (initialValue) => {
  const cardFormSchema = initialValue;

  const addCard = async (values) => {
    console.log(values);
  };

  const onSubmit = async (values) => {
    await addCard(values);
  };

  const onSubmitError = (errors, invalidInputRefs) => {
    const firstInvalidInput = invalidInputRefs[0].element;
    const { errorMessage } = errors[firstInvalidInput.name];

    firstInvalidInput.focus();
    alert(errorMessage);
  };

  return {
    cardFormSchema,
    onSubmit,
    onSubmitError,
  };
};

export default useInitialCard;
