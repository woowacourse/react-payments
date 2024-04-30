import validateInputAndSetErrorMessage from './validateInputAndSetErrorMessage';
import checkError from './checkError';

interface Props {
  inputState: InputStates;
  stateText: string;
  setInputState: React.Dispatch<React.SetStateAction<InputStates>>;
  setErrorMessage: React.Dispatch<React.SetStateAction<string>>;
  changeIsValid: ({ state, isValid }: isValidProps) => void;
  errorText: string;
  elseValidator?: () => void;
}

const validateAndCheckError = ({
  inputState,
  stateText,
  errorText,
  setInputState,
  setErrorMessage,
  changeIsValid,
  elseValidator,
}: Props) => {
  validateInputAndSetErrorMessage({
    inputState,
    setInputState,
    setErrorMessage,
    errorText: errorText,
    elseValidator: elseValidator,
  });

  changeIsValid({
    state: stateText,
    isValid: checkError(inputState),
  });
};

export default validateAndCheckError;
