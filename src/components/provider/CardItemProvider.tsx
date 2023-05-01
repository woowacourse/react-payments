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
  company: Company | undefined;
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
  onChangeCardNumber: (inputIndex: number) => (inputValue: string) => void;
  onChangeExpirationDate: {
    onChangeMonth: (inputValue: string) => void;
    onChangeYear: (inputValue: string) => void;
  };
  onChangeName: (inputValue: string) => void;
  onChangeSecurityCode: (inputValue: string) => void;
  onChangePassword: (inputIndex: number) => (inputValue: string) => void;
  setCompany: (company: Company) => void;
}

const CardItemValueContext = createContext<CardItemValue | null>(null);
const CardItemActionContext = createContext<CardItemAction | null>(null);
const ErrorMessageValueContext = createContext<ErrorMessageValue | null>(null);

const CardItemProvider = ({ children }: CardItemProviderProps) => {
  const { cardNumber, cardNumberErrorMessage, onChangeCardNumber } = useCardNumber();
  const { expirationDate, expirationDateErrorMessage, onChangeExpirationDate } = useExpirationDate();
  const { name, nameErrorMessage, onChangeName } = useName();
  const { securityCode, securityCodeErrorMessage, onChangeSecurityCode } = useSecurityCode();
  const { password, passwordErrorMessage, onChangePassword } = usePassword();

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
