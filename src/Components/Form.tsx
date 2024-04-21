import { Dispatch, SetStateAction, createContext, useState } from "react";
import FormField from "./FormField";

const initError = () => ({
  errorMessage: "",
  isError: false,
});

const initCardNumbersError: CardNumbersError = {
  firstNumbers: initError(),
  secondNumbers: initError(),
  thirdNumbers: initError(),
  fourthNumbers: initError(),
};

const initCardValidityPeriod: CardValidityPeriodError = {
  month: initError(),
  year: initError(),
};

const initCardOwnerInfo: CardOwnerInfoError = {
  name: initError(),
};

export const CardNumberErrorContext = createContext<
  [CardNumbersError, Dispatch<SetStateAction<CardNumbersError>>] | null
>(null);
export const CardValidityPeriodErrorContext = createContext<
  [CardValidityPeriodError, Dispatch<SetStateAction<CardValidityPeriodError>>] | null
>(null);
export const CardOwnerInfoErrorContext = createContext<
  [CardOwnerInfoError, Dispatch<SetStateAction<CardOwnerInfoError>>] | null
>(null);

const Form = () => {
  const cardNumberErrorState = useState(initCardNumbersError);
  const cardValidityPeriodErrorState = useState(initCardValidityPeriod);
  const cardOwnerInfoErrorState = useState(initCardOwnerInfo);

  return (
    <form>
      <CardNumberErrorContext.Provider value={cardNumberErrorState}>
        <CardValidityPeriodErrorContext.Provider value={cardValidityPeriodErrorState}>
          <CardOwnerInfoErrorContext.Provider value={cardOwnerInfoErrorState}>
            <FormField.CardNumberField />
            <FormField.CardValidityPeriodField />
            <FormField.CardOwnerField />
          </CardOwnerInfoErrorContext.Provider>
        </CardValidityPeriodErrorContext.Provider>
      </CardNumberErrorContext.Provider>
    </form>
  );
};

export default Form;
