import { OPTION } from '../constants/option';
import REGEX from '../constants/regex';
import ERROR_MESSAGE from '../constants/errorMessage';

const formatMonth = ({
  inputState,
  setInputState,
}: {
  inputState: InputStates;
  setInputState: (value: React.SetStateAction<InputStates>) => void;
}) => {
  if (REGEX.oneToNine.test(inputState[0].value)) {
    setInputState((prevState) => ({
      ...prevState,
      0: {
        ...prevState[0],
        value: '0' + prevState[0].value,
        isFilled: true,
      },
    }));
  } else if (REGEX.zero.test(inputState[0].value)) {
    setInputState((prevState) => ({
      ...prevState,
      0: {
        ...prevState[0],
        value: OPTION.minMonth,
      },
    }));
  } else if (
    !REGEX.month.test(inputState[0].value) &&
    inputState[0].value.length
  ) {
    setInputState((prevState) => ({
      ...prevState,
      0: {
        ...prevState[0],
        value: OPTION.maxMonth,
      },
    }));
  }
};

const validateExpired = ({
  inputState,
  setErrorMessage,
}: {
  inputState: InputStates;
  setErrorMessage: (value: React.SetStateAction<string>) => void;
}) => {
  const inputExpirationDate = new Date(
    `20${inputState[1].value}-${inputState[0].value}-01`,
  );
  const currentDate = new Date();

  if (inputExpirationDate < currentDate) {
    inputState[0].hasError = true;
    inputState[1].hasError = true;
    setErrorMessage(ERROR_MESSAGE.expiredCard);
  } else {
    setErrorMessage('');
  }
};

export { formatMonth, validateExpired };
