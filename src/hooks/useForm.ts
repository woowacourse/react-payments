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
  const {
    cardNumberState,
    setCardNumberState,
    cardNumberErrorState,
    showImageCondition,
    resetCardNumbers,
  } = useCardNumbers(defaultValues.cardNumbers);
  const {
    expirationDateState,
    setExpirationDateState,
    expirationDateErrorState,
    resetExpirationDate,
  } = useExpirationDate(defaultValues.expirationDate);
  const { userNameState, setUserNameState, isUserNameError, resetUserName } = useUserName(
    defaultValues.userName,
  );
  const { cardBrandState, setCardBrandState, isCardBrandError, resetCardBrand } = useCardBrand(
    defaultValues.cardBrand,
  );
  const {
    cvcNumberState,
    setCVCNumberState,
    isCVCNumberError,
    isFocusCVCPreview,
    setIsFocusCVCPreview,
    resetCVCNumber,
  } = useCVCNumber(defaultValues.cvcNumber);
  const { passwordState, setPasswordState, isPasswordError, resetPassword } = usePassword(
    defaultValues.password,
  );

  const resetForm = () => {
    resetCardNumbers();
    resetCardBrand();
    resetExpirationDate();
    resetCVCNumber();
    resetUserName();
    resetPassword();
  };

  const previewProps = {
    cardNumberState,
    expirationDateState,
    userNameState,
    showImageCondition,
    cardBrandState,
    cvcNumberState,
    isFocusCVCPreview,
    setIsFocusCVCPreview,
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

  const formValues = {
    cardNumbers: [
      cardNumberState.first,
      cardNumberState.second,
      cardNumberState.third,
      cardNumberState.fourth,
    ],
    expirationDate: [expirationDateState.month, expirationDateState.year],
    userName: userNameState,
    cardBrand: cardBrandState,
    cvcNumber: cvcNumberState,
    password: passwordState,
  };

  return { previewProps, formProps, isFormError, resetForm, formValues };
};

export default useForm;
