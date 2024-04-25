import useCardInformationErrorState, {
  CardNumbersErrorState,
} from "./useCardInformationErrorState";

import isAlphabetOrWhiteSpace from "../utils/isAlphabetOrWhiteSpace";
import { isCardIssuer } from "../constants/cardIssuers";
import isNumericString from "../utils/isNumericString";
import useBoolean from "./useBoolean";
import useCardInformation from "./useCardInformation";
import useReadyForSubmit from "./useReadyForSubmit";

const validateCardPasswordOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("비밀번호는 숫자만 입력할 수 있어요");
  }
};

const validateCardPasswordOnBlur = (inputValue: string) => {
  if (inputValue.length !== 2) {
    throw new Error("비밀번호는 두 자리 숫자로 입력해 주세요");
  }
};

// ---

const validateCardCvcOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("CVC는 숫자만 입력할 수 있어요");
  }
};

const validateCardCvcOnblur = (inputValue: string) => {
  if (!(inputValue.length === 3 || inputValue.length === 4)) {
    throw new Error("CVC는 세 자리 또는 네 자리 숫자로 입력해 주세요");
  }
};

// ---

const validateCardNumberOnChange = (inputValue: string) => {
  if (!isNumericString(inputValue)) {
    throw new Error("카드 번호는 숫자만 입력할 수 있어요");
  }
};

const validateCardNumberOnBlur = (inputValue: string) => {
  if (inputValue.length !== 4) {
    throw new Error("네 자리 수를 입력해주세요");
  }
};

// ---

const validateExpiration = {
  onChange: {
    month: (inputValue: string) => {
      if (!isNumericString(inputValue)) {
        throw new Error("월은 숫자만 입력할 수 있어요");
      }
    },
    year: (inputValue: string) => {
      if (!isNumericString(inputValue)) {
        throw new Error("년도는 숫자만 입력할 수 있어요");
      }
    },
  },
  onBlur: {
    month: (expirationMonth: string) => {
      if (expirationMonth.length !== 2) {
        throw new Error("월을 'MM' 형식으로 입력해 주세요");
      }

      if (Number(expirationMonth) < 1 || Number(expirationMonth) > 12) {
        throw new Error("월을 01 ~ 12 범위로 입력해 주세요");
      }
    },
    year: (expirationYear: string) => {
      if (expirationYear.length !== 2) {
        throw new Error("년도를 'YY' 형식으로 입력해 주세요");
      }

      if (Number(expirationYear) < 24) {
        throw new Error("유효한 년도를 입력해 주세요");
      }
    },
  },
};

// ---

const validateOwnerNameOnChange = (inputValue: string) => {
  if (!isAlphabetOrWhiteSpace(inputValue)) {
    throw new Error("영문자만 입력할 수 있어요");
  }
};

const validateOwnerNameOnBlur = (inputValue: string) => {
  if (inputValue.length === 0) {
    throw new Error("카드 소유자 이름을 입력해 주세요");
  }
};

// ---

const validateCardIssuerOnBlur = (inputValue: string) => {
  if (inputValue === "") {
    throw new Error("카드사를 선택해 주세요");
  }
};

const useCardEnrollForm = () => {
  const {
    flag: isCvcFocused,
    setTrue: setIsCvcFocused,
    setFalse: setCvcBlurred,
  } = useBoolean(false);

  const {
    cardInformation,
    setCardNumbers,
    setCardIssuer,
    setCardExpiration,
    setCardOwnerName,
    setCardCvc,
    setCardPassword,
  } = useCardInformation();

  const {
    cardInformationErrorState,
    updateCardNumbersErrorState,
    updateCardIssuerErrorState,
    updateCardExpirationErrorState,
    updateCardOwnerNameErrorState,
    updateCvcErrorState,
    updatePasswordErrorState,
  } = useCardInformationErrorState();

  const { isReadyForSubmit } = useReadyForSubmit([
    cardInformation,
    cardInformationErrorState,
  ]);

  return {
    isCvcFocused,
    isReadyForSubmit,

    cardInformation,

    cardPassword: {
      valueState: cardInformation.cardPassword,
      errorState: cardInformationErrorState.cardPassword,
      onCardPasswordChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
          validateCardPasswordOnChange(event.target.value);
          setCardPassword(event.target.value);
          updatePasswordErrorState({ isError: false, errorMessage: "" });
        } catch (error) {
          if (!(error instanceof Error)) {
            return;
          }
          updatePasswordErrorState({
            isError: true,
            errorMessage: error.message,
          });
        }
      },
      onCardPasswordBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        try {
          validateCardPasswordOnBlur(event.target.value);
          updatePasswordErrorState({ isError: false, errorMessage: "" });
        } catch (error) {
          if (!(error instanceof Error)) {
            return;
          }
          updatePasswordErrorState({
            isError: true,
            errorMessage: error.message,
          });
        }
      },
    },

    cardCvc: {
      valueState: cardInformation.cardCvc,
      errorState: cardInformationErrorState.cardCvc,
      onCardCvcChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
          validateCardCvcOnChange(event.target.value);
          setCardCvc(event.target.value);
          updateCvcErrorState({ isError: false, errorMessage: "" });
        } catch (error) {
          if (error instanceof Error) {
            updateCvcErrorState({ isError: true, errorMessage: error.message });
          }
        }
      },
      onCardCvcBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        setCvcBlurred();
        try {
          validateCardCvcOnblur(event.target.value);
          updateCvcErrorState({ isError: false, errorMessage: "" });
        } catch (error) {
          if (error instanceof Error) {
            updateCvcErrorState({ isError: true, errorMessage: error.message });
          }
        }
      },
      onCardCvcFocus: () => {
        setIsCvcFocused();
      },
    },

    cardNumbers: {
      valueState: cardInformation.cardNumbers,
      errorState: cardInformationErrorState.cardNumbers,
      onCardNumberChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        targetCardNumberIndex: number
      ) => {
        try {
          validateCardNumberOnChange(event.target.value);
          setCardNumbers(event.target.value, targetCardNumberIndex);
          updateCardNumbersErrorState({
            isError: cardInformationErrorState.cardNumbers.isError.map(
              (isError, index) =>
                index === targetCardNumberIndex ? false : isError
            ) as CardNumbersErrorState["isError"],
            errorMessage: "",
          });
        } catch (error) {
          if (error instanceof Error) {
            updateCardNumbersErrorState({
              isError: cardInformationErrorState.cardNumbers.isError.map(
                (isError, index) =>
                  index === targetCardNumberIndex ? true : isError
              ) as CardNumbersErrorState["isError"],
              errorMessage: error.message,
            });
          }
        }
      },
      onCardNumberBlur: (
        event: React.FocusEvent<HTMLInputElement>,
        targetCardNumberIndex: number
      ) => {
        try {
          validateCardNumberOnBlur(event.target.value);
          updateCardNumbersErrorState({
            isError: cardInformationErrorState.cardNumbers.isError.map(
              (isError, index) =>
                index === targetCardNumberIndex ? false : isError
            ) as CardNumbersErrorState["isError"],
            errorMessage: "",
          });
        } catch (error) {
          if (error instanceof Error) {
            updateCardNumbersErrorState({
              isError: cardInformationErrorState.cardNumbers.isError.map(
                (isError, index) =>
                  index === targetCardNumberIndex ? true : isError
              ) as CardNumbersErrorState["isError"],
              errorMessage: error.message,
            });
          }
        }
      },
    },

    cardExpiration: {
      valueState: cardInformation.cardExpiration,
      errorState: cardInformationErrorState.cardExpiration,
      onExpirationChange: (
        event: React.ChangeEvent<HTMLInputElement>,
        targetKey: "month" | "year"
      ) => {
        try {
          validateExpiration.onChange[targetKey](event.target.value);
          updateCardExpirationErrorState({
            isError: {
              ...cardInformationErrorState.cardExpiration.isError,
              [targetKey]: false,
            },
            errorMessage: "",
          });
          setCardExpiration(event.target.value, targetKey);
        } catch (error) {
          if (error instanceof Error) {
            updateCardExpirationErrorState({
              isError: {
                ...cardInformationErrorState.cardExpiration.isError,
                [targetKey]: true,
              },
              errorMessage: error.message,
            });
          }
        }
      },
      onExpirationBlur: (
        event: React.FocusEvent<HTMLInputElement>,
        targetKey: "month" | "year"
      ) => {
        try {
          validateExpiration.onBlur[targetKey](event.target.value);
          updateCardExpirationErrorState({
            isError: {
              ...cardInformationErrorState.cardExpiration.isError,
              [targetKey]: false,
            },
            errorMessage: "",
          });
        } catch (error) {
          if (error instanceof Error) {
            updateCardExpirationErrorState({
              isError: {
                ...cardInformationErrorState.cardExpiration.isError,
                [targetKey]: true,
              },
              errorMessage: error.message,
            });
          }
        }
      },
    },

    cardOwnerName: {
      valueState: cardInformation.cardOwnerName,
      errorState: cardInformationErrorState.cardOwnerName,
      onOwnerNameChange: (event: React.ChangeEvent<HTMLInputElement>) => {
        try {
          validateOwnerNameOnChange(event.target.value);
          const upperName = event.target.value.toUpperCase();
          setCardOwnerName(upperName);
          updateCardOwnerNameErrorState({ isError: false, errorMessage: "" });
        } catch (error) {
          if (error instanceof Error) {
            updateCardOwnerNameErrorState({
              isError: true,
              errorMessage: error.message,
            });
          }
        }
      },
      onOwnerNameBlur: (event: React.FocusEvent<HTMLInputElement>) => {
        try {
          validateOwnerNameOnBlur(event.target.value);
          updateCardOwnerNameErrorState({ isError: false, errorMessage: "" });
        } catch (error) {
          if (error instanceof Error) {
            updateCardOwnerNameErrorState({
              isError: true,
              errorMessage: error.message,
            });
          }
        }
      },
    },

    cardIssuer: {
      valueState: cardInformation.cardIssuer,
      errorState: cardInformationErrorState.cardIssuer,
      onCardIssuerChange: (event: React.ChangeEvent<HTMLSelectElement>) => {
        if (!isCardIssuer(event.target.value)) {
          return;
        }
        setCardIssuer(event.target.value);
        updateCardIssuerErrorState({
          isError: false,
          errorMessage: "",
        });
      },
      onCardIssuerBlur: (event: React.FocusEvent<HTMLSelectElement>) => {
        try {
          validateCardIssuerOnBlur(event.target.value);
        } catch (error) {
          if (!(error instanceof Error)) {
            return;
          }
          updateCardIssuerErrorState({
            isError: true,
            errorMessage: error.message,
          });
        }
      },
    },
  };
};

export default useCardEnrollForm;
