import useCVCNumber from './useCVCNumber';
import useCardBrand from './useCardBrand';
import useCardNumbers from './useCardNumbers';
import useCreateNextField from './useCreateNextField';
import useExpirationDate from './useExpirationDate';
import usePassword from './usePassword';
import useUserName from './useUserName';

interface FormState {
  cardNumbers: string[];
  expirationDate: string[];
  userName: string;
  cardBrand: string;
  cvcNumber: string;
  password: string;
}

const useForm = (defaultValues: FormState) => {
  const { isFieldShowCount, showNextFieldOnValid } = useCreateNextField();
  const {
    cardNumberState,
    setCardNumberState,
    cardNumberErrorState,
    showImageCondition,
    resetCardNumbers,
  } = useCardNumbers(defaultValues.cardNumbers, showNextFieldOnValid);
  const { cardBrandState, onChangeCardBrand, isCardBrandError, resetCardBrand } = useCardBrand(
    defaultValues.cardBrand,
    showNextFieldOnValid,
  );
  const {
    expirationDateState,
    setExpirationDateState,
    expirationDateErrorState,
    resetExpirationDate,
  } = useExpirationDate(defaultValues.expirationDate, showNextFieldOnValid);
  const { userNameState, onChangeUserName, isUserNameError, resetUserName } = useUserName(
    defaultValues.userName,
  );
  const {
    cvcNumberState,
    onChangeCVC,
    isCVCNumberError,
    isFocusCVCPreview,
    setIsFocusCVCPreview,
    resetCVCNumber,
  } = useCVCNumber(defaultValues.cvcNumber, showNextFieldOnValid);
  const { passwordState, onChangePassword, isPasswordError, resetPassword } = usePassword(
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
      onChangeUserName,
      isUserNameError,
      showNextFieldOnValid,
    },
    cardBrand: {
      cardBrandState,
      onChangeCardBrand,
    },
    cvcNumber: {
      cvcNumberState,
      onChangeCVC,
      isCVCNumberError,
      setIsFocusCVCPreview,
    },
    password: {
      passwordState,
      onChangePassword,
      isPasswordError,
    },
    isFieldShowCount,
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
