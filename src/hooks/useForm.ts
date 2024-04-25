import useCVCNumber from './useCVCNumber';
import useCardBrand from './useCardBrand';
import useCardNumbers from './useCardNumbers';
import useExpirationDate from './useExpirationDate';
import usePassword from './usePassword';
import useUserName from './useUserName';

interface FormState {
  cardNumbers: string[];
  expirationDate: string[];
  userName: string;
  cardBrand: null;
  cvcNumber: string;
  password: string;
}

const useForm = (defaultValues: FormState) => {
  const { cardNumberState, setCardNumberState, cardNumberErrorState, showImageCondition } =
    useCardNumbers(defaultValues.cardNumbers);
  const { expirationDateState, setExpirationDateState, expirationDateErrorState } =
    useExpirationDate(defaultValues.expirationDate);
  const { userNameState, setUserNameState, isUserNameError } = useUserName(defaultValues.userName);
  const { cardBrandState, setCardBrandState, isCardBrandError } = useCardBrand(
    defaultValues.cardBrand,
  );
  const {
    cvcNumberState,
    setCVCNumberState,
    isCVCNumberError,
    isFocusCVCPreview,
    setIsFocusCVCPreview,
  } = useCVCNumber(defaultValues.cvcNumber);
  const { passwordState, setPasswordState, isPasswordError } = usePassword(defaultValues.password);

  const previewProps = {
    cardNumberState,
    expirationDateState,
    userNameState,
    showImageCondition,
    cardBrandState,
    cvcNumberState,
    isFocusCVCPreview,
  };

  const isFormError =
    cardNumberErrorState.isFieldError ||
    expirationDateErrorState.isFieldError ||
    userNameState === '' ||
    isUserNameError ||
    cardBrandState === null ||
    isCardBrandError ||
    cvcNumberState === '' ||
    isCVCNumberError ||
    passwordState === '' ||
    isPasswordError;

  const formProps = {
    cardNumbers: {
      cardNumberState,
      setCardNumberState,
      cardNumberErrorState,
    },
    expirationDate: {
      expirationDateState,
      setExpirationDateState,
      expirationDateErrorState,
    },
    userName: {
      userNameState,
      setUserNameState,
      isUserNameError,
    },
    cardBrand: {
      cardBrandState,
      setCardBrandState,
    },
    cvcNumber: {
      cvcNumberState,
      setCVCNumberState,
      isCVCNumberError,
      setIsFocusCVCPreview,
    },
    password: {
      passwordState,
      setPasswordState,
      isPasswordError,
    },
  };

  return { previewProps, formProps, isFormError };
};

export default useForm;
