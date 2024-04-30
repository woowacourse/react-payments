export default function checkError(inputState: InputStates) {
  for (const key in inputState) {
    const state = inputState[key];
    if (state.hasError || !state.isFilled) {
      return false;
    }
  }
  return true;
}
