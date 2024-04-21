interface Types {
  inputState: InputStates;
  setInputState: React.Dispatch<React.SetStateAction<InputStates>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  errorText: string;
  elseValidator?: () => void;
}

export default function validateInputAndSetErrorMessage({
  inputState,
  setInputState,
  setErrorMessage,
  errorText,
  elseValidator,
}: Types) {
  let hasAnyError = false;

  const newState = Object.keys(inputState).reduce<InputStates>((acc, key) => {
    const field = inputState[key];
    if (!field.isFilled) {
      acc[key] = { ...field, hasError: true };
      hasAnyError = true;
    } else {
      acc[key] = field;
    }
    return acc;
  }, {});

  setInputState(newState);

  if (hasAnyError) {
    setErrorMessage(errorText);
  } else {
    elseValidator ? elseValidator() : setErrorMessage('');
  }
}
