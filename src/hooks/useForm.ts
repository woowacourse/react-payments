import useCardNumbers from './useCardNumbers';
import useExpirationDate from './useExpirationDate';
import useUserName from './useUserName';

interface FormState {
  cardNumbers: string[];
  expirationDate: string[];
  userName: string;
}

const useForm = (defaultValues: FormState) => {
  const { cardNumberState, setCardNumberState, cardNumberErrorState, showImageCondition } =
    useCardNumbers(defaultValues.cardNumbers);
  const { expirationDateState, setExpirationDateState, expirationDateErrorState } =
    useExpirationDate(defaultValues.expirationDate);
  const { userNameState, setUserNameState, isUserNameError } = useUserName(defaultValues.userName);

  const previewProps = {
    cardNumberState,
    expirationDateState,
    userNameState,
    showImageCondition,
  };

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
  };

  return { previewProps, formProps };
};

export default useForm;
