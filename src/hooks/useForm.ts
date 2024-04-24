import useCardBrand from './useCardBrand';
import useCardNumbers from './useCardNumbers';
import useExpirationDate from './useExpirationDate';
import useUserName from './useUserName';

interface FormState {
  cardNumbers: string[];
  expirationDate: string[];
  userName: string;
  cardBrand: null;
}

const useForm = (defaultValues: FormState) => {
  const { cardNumberState, setCardNumberState, cardNumberErrorState, showImageCondition } =
    useCardNumbers(defaultValues.cardNumbers);
  const { expirationDateState, setExpirationDateState, expirationDateErrorState } =
    useExpirationDate(defaultValues.expirationDate);
  const { userNameState, setUserNameState, isUserNameError } = useUserName(defaultValues.userName);
  const { cardBrandState, setCardBrandState } = useCardBrand(defaultValues.cardBrand);

  const previewProps = {
    cardNumberState,
    expirationDateState,
    userNameState,
    showImageCondition,
    cardBrandState,
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
    cardBrand: {
      cardBrandState,
      setCardBrandState,
    },
  };

  return { previewProps, formProps };
};

export default useForm;
