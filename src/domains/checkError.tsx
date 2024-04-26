export default function checkError(inputState: InputStates) {
  let hasAnyError = false;
  let hasAnyNotFilled = false;
  Object.keys(inputState).map((key) => {
    const state = inputState[key];
    if (state.hasError) {
      hasAnyError = true;
    }
    if (!state.isFilled) {
      hasAnyNotFilled = true;
    }
  });

  if (hasAnyError || hasAnyNotFilled) {
    return false;
  }

  return true;
}
