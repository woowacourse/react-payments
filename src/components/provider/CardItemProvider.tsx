import { createContext, useContext } from "react";
import { INPUT_MAX_LENGTH } from "../../constants";
import { isInputsSatisfied } from "../../utils";
import useCardNumber from "../../hooks/cardItemInputs/useCardNumber";
import useExpirationDate from "../../hooks/cardItemInputs/useExpirationDate";
import useName from "../../hooks/cardItemInputs/useName";
import useSecurityCode from "../../hooks/cardItemInputs/useSecurityCode";
import usePassword from "../../hooks/cardItemInputs/usePassword";
import useInput from "../../hooks/useInput";
import { Company } from "../../types/Card";
import useCompany from "../../hooks/cardItemInputs/useCompany";

interface CardItemProviderProps {
  children: React.ReactNode;
}

interface CardItemValue {
  isAllInputSatisfied: () => boolean;
  cardNumber: string[];
  expirationDate: string[];
  name: string;
  securityCode: string;
  password: string[];
  company: Company;
  nickname?: string;
}

interface ErrorMessageValue {
  hasError: () => boolean;
  cardNumberErrorMessage: string;
  expirationDateErrorMessage: string;
  nameErrorMessage: string;
  securityCodeErrorMessage: string;
  passwordErrorMessage: string;
  companyErrorMessage: string;
}

interface CardItemAction {
  onChangeCardNumber: (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeExpirationDate: (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeName: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangeSecurityCode: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePassword: (inputIndex: number) => (event: React.ChangeEvent<HTMLInputElement>) => void;
  setCompany: (company: Company) => void;

  registCardNumberRef: (inputIndex: number, element: HTMLInputElement | null) => void;
  registExpirationDateRef: (inputIndex: number, element: HTMLInputElement | null) => void;
  registPasswordRef: (inputIndex: number, element: HTMLInputElement | null) => void;
}

const CardItemValueContext = createContext<CardItemValue | null>(null);
const CardItemActionContext = createContext<CardItemAction | null>(null);
const ErrorMessageValueContext = createContext<ErrorMessageValue | null>(null);

const CardItemProvider = ({ children }: CardItemProviderProps) => {
  const { cardNumber, cardNumberErrorMessage, onChangeCardNumber, registCardNumberRef } = useCardNumber();
  const { expirationDate, expirationDateErrorMessage, onChangeExpirationDate, registExpirationDateRef } =
    useExpirationDate();
  const { name, nameErrorMessage, onChangeName } = useName();
  const { securityCode, securityCodeErrorMessage, onChangeSecurityCode } = useSecurityCode();
  const { password, passwordErrorMessage, onChangePassword, registPasswordRef } = usePassword();

  const { company, companyErrorMessage, setCompany } = useCompany();
  const { inputValue: nickName, onChange: onChangeNickName } = useInput();

  const isAllInputSatisfied = () => {
    return (
      isInputsSatisfied(cardNumber, INPUT_MAX_LENGTH.CARD_NUMBER) &&
      isInputsSatisfied(expirationDate, INPUT_MAX_LENGTH.EXPIRATION_DATE) &&
      securityCode.length === INPUT_MAX_LENGTH.SECURITY_CODE &&
      isInputsSatisfied(password, INPUT_MAX_LENGTH.PASSWORD)
    );
  };

  const hasError = () => {
    return (
      !!companyErrorMessage ||
      !!cardNumberErrorMessage ||
      !!expirationDateErrorMessage ||
      !!passwordErrorMessage ||
      !!securityCodeErrorMessage
    );
  };

  const cardItemValue = {
    isAllInputSatisfied,
    cardNumber,
    expirationDate,
    name,
    securityCode,
    password,
    company,
    nickName,
  };

  const cardItemAction = {
    onChangeCardNumber,
    onChangeExpirationDate,
    onChangeName,
    onChangeSecurityCode,
    onChangePassword,
    onChangeNickName,
    setCompany,

    registCardNumberRef,
    registExpirationDateRef,
    registPasswordRef,
  };

  const errorMessage = {
    hasError,
    cardNumberErrorMessage,
    expirationDateErrorMessage,
    nameErrorMessage,
    securityCodeErrorMessage,
    passwordErrorMessage,
    companyErrorMessage,
  };

  return (
    <CardItemValueContext.Provider value={cardItemValue}>
      <CardItemActionContext.Provider value={cardItemAction}>
        <ErrorMessageValueContext.Provider value={errorMessage}>{children}</ErrorMessageValueContext.Provider>
      </CardItemActionContext.Provider>
    </CardItemValueContext.Provider>
  );
};

export const useCardItemValue = () => {
  const value = useContext(CardItemValueContext);
  if (value === null) {
    throw new Error("CardItemValue 에러");
  }
  return value;
};

export const useCardItemAction = () => {
  const value = useContext(CardItemActionContext);
  if (value === null) {
    throw new Error("CardItemAction 에러");
  }
  return value;
};

export const useErrorMessageValue = () => {
  const value = useContext(ErrorMessageValueContext);
  if (value === null) {
    throw new Error("ErrorMessageValue 에러");
  }
  return value;
};

export default CardItemProvider;
