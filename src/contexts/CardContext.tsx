import {
  createContext,
  useContext,
  useState,
  PropsWithChildren,
  useRef,
  useEffect,
} from "react";
import {
  validateMonth,
  validateYear,
  validateFirstCardNumbers,
  validateCardNumbers,
  validateCVC,
  validatePassword
} from "../domain/validate";
import { CARD_VALIDATION_INFO } from "../constants/CardValidationInfo";
import ERROR from "../constants/errorMessage";
import CustomCardNumbersError from "../error/CustomCardNumbersError";

interface CardContextType {
  cardNumbers: string[];
  setCardNumbers: React.Dispatch<React.SetStateAction<string[]>>;
  month: string;
  setMonth: React.Dispatch<React.SetStateAction<string>>;
  year: string;
  setYear: React.Dispatch<React.SetStateAction<string>>;
  CVC: string;
  setCVC: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;

  expiryHelperText: string;
  expiryErrorIndex: number | null;
  expiryInputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  handleDate: (e: React.ChangeEvent<HTMLInputElement>) => void;

  cardNumbersHelperText: string;
  cardNumbersErrorIndex: number | null;
  cardNumbersInputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;
  handleCardNumbers: (
    index: number
  ) => (e: React.ChangeEvent<HTMLInputElement>) => void;

  CVCHelperText: string;
  CVCInputRef: React.MutableRefObject<HTMLInputElement | null>;
  handleCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;

  passwordHelperText: string;
  passwordInputRef: React.MutableRefObject<HTMLInputElement | null>;
  handlePassword: (e: React.ChangeEvent<HTMLInputElement>) => void;

  cardColor: string;
  setCardColor: React.Dispatch<React.SetStateAction<string>>;

  isValidCardNumbers: boolean;
  setIsValidCardNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  isValidCardCompany: boolean;
  setIsValidCardCompany: React.Dispatch<React.SetStateAction<boolean>>;
  isValidExpiry: boolean;
  setIsValidExpiry: React.Dispatch<React.SetStateAction<boolean>>;
  isValidCVC: boolean;
  setIsValidCVC: React.Dispatch<React.SetStateAction<boolean>>;
}

const CardContext = createContext<CardContextType | null>(null);

export const CardProvider = ({ children }: PropsWithChildren) => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(
    Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill("")
  );
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");

  const [expiryHelperText, setExpiryHelperText] = useState("");
  const [expiryErrorIndex, setExpiryErrorIndex] = useState<number | null>(null);
  const expiryInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [cardNumbersHelperText, setCardNumbersHelperText] = useState("");
  const [cardNumbersErrorIndex, setCardNumbersErrorIndex] = useState<
    number | null
  >(null);
  const cardNumbersInputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const [CVCHelperText, setCVCHelperText] = useState("");
  const CVCInputRef = useRef<HTMLInputElement | null>(null);

  const [passwordHelperText, setPasswordHelperText] = useState("");
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const [cardColor, setCardColor] = useState<string>("#333333");

  const [isValidCardNumbers, setIsValidCardNumbers] = useState(false);
  const [isValidCardCompany, setIsValidCardCompany] = useState(false);
  const [isValidExpiry, setIsValidExpiry] = useState(false);
  const [isValidCVC, setIsValidCVC] = useState(false);

  useEffect(() => {
    const isAllFilled = cardNumbers.every(
      (num) => num.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH
    );
  
    if (isAllFilled && cardNumbersHelperText === "") setIsValidCardNumbers(true);
  }, [cardNumbers, cardNumbersHelperText]);

  useEffect(() => {
    if (cardColor !== "#333333") setIsValidCardCompany(true);
  }, [cardColor]);

  useEffect(() => {
    const isAllFilled = month.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH && year.length === CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH;
    if (isAllFilled && expiryHelperText === "") setIsValidExpiry(true);
  }, [month, year, expiryHelperText])

  useEffect(() => {
    if (CVC.length === CARD_VALIDATION_INFO.CVC_MAX_LENGTH && CVCHelperText === "") setIsValidCVC(true);
  }, [CVC, CVCHelperText])
  

  const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    try {
      if (name === "month") {
        setMonth(value);
        validateMonth(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        expiryInputRefs.current[1]?.focus();
        validateYear(year, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
      } else if (name === "year") {
        setYear(value);
        validateMonth(month, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
        validateYear(value, CARD_VALIDATION_INFO.EXPIRE_DATE_MAX_LENGTH);
      }

      setExpiryHelperText("");
      setExpiryErrorIndex(null);
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message === ERROR.EXPIRY.INVALID_MONTH) {
          expiryInputRefs.current[0]?.focus();
          setExpiryErrorIndex(0);
        } else if (error.message === ERROR.EXPIRY.INVALID_YEAR) {
          expiryInputRefs.current[1]?.focus();
          setExpiryErrorIndex(1);
        }
        setExpiryHelperText(error.message);
      }
    }
  };

  const handleCardNumbers =
    (index: number) => (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      try {
        const newCardNumbers = [...cardNumbers];
        newCardNumbers[index] = e.target.value;
        setCardNumbers(newCardNumbers);

        validateFirstCardNumbers(newCardNumbers[0]);
        validateCardNumbers(
          newCardNumbers,
          CARD_VALIDATION_INFO.CARD_MAX_LENGTH
        );

        if (cardNumbersHelperText !== "") {
          cardNumbersInputRefs.current[index]?.focus();
        }
        setCardNumbersHelperText("");
        setCardNumbersErrorIndex(null);

        if (
          value.length === CARD_VALIDATION_INFO.CARD_MAX_LENGTH &&
          index < CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS - 1
        ) {
          cardNumbersInputRefs.current[index + 1]?.focus();
        }
      } catch (error: unknown) {
        if (error instanceof CustomCardNumbersError) {
          if (error.message === ERROR.CARD_NUMBER.INVALID) {
            cardNumbersInputRefs.current[0]?.focus();
            setCardNumbersErrorIndex(0);
          } else {
            cardNumbersInputRefs.current[error.index]?.focus();
            setCardNumbersErrorIndex(error.index);
          }
          setCardNumbersHelperText(error.message);
        }
      }
    };

  const handleCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setCVC(e.target.value);
      validateCVC(e.target.value, CARD_VALIDATION_INFO.CVC_MAX_LENGTH);
      setCVCHelperText("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setCVCHelperText(error.message);
        CVCInputRef.current?.focus();
      }
    }
  };

  const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      setPassword(e.target.value);
      validatePassword(e.target.value, CARD_VALIDATION_INFO.PASSWORD_MAX_LENGTH);
      setPasswordHelperText("");
    } catch (error: unknown) {
      if (error instanceof Error) {
        setPasswordHelperText(error.message);
        passwordInputRef.current?.focus();
      }
    }
  };

  return (
    <CardContext.Provider
      value={{
        cardNumbers,
        setCardNumbers,
        month,
        setMonth,
        year,
        setYear,
        CVC,
        setCVC,
        password,
        setPassword,
        expiryHelperText,
        expiryErrorIndex,
        expiryInputRefs,
        handleDate,
        cardNumbersHelperText,
        cardNumbersErrorIndex,
        cardNumbersInputRefs,
        handleCardNumbers,
        CVCHelperText,
        CVCInputRef,
        handleCVC,
        passwordHelperText,
        passwordInputRef,
        handlePassword,
        cardColor,
        setCardColor,
        isValidCardNumbers,
        setIsValidCardNumbers,
        isValidCardCompany,
        setIsValidCardCompany,
        isValidExpiry,
        setIsValidExpiry,
        isValidCVC,
        setIsValidCVC
      }}
    >
      {children}
    </CardContext.Provider>
  );
};

export const useCardContext = () => {
  const context = useContext(CardContext);
  if (!context) {
    throw new Error("CardProvider 안에서 사용 가능");
  }
  return context;
};
