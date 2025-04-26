import { useState, useRef } from "react";
import { CARD_VALIDATION_INFO } from "../constants/cardValidationInfo";

export interface CardContextType {
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
  setExpiryHelperText: React.Dispatch<React.SetStateAction<string>>;
  expiryErrorIndex: number | null;
  setExpiryErrorIndex: React.Dispatch<React.SetStateAction<number | null>>;
  expiryInputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;

  cardNumbersHelperText: string;
  setCardNumbersHelperText: React.Dispatch<React.SetStateAction<string>>;
  cardNumbersErrorIndex: number | null;
  setCardNumbersErrorIndex: React.Dispatch<React.SetStateAction<number | null>>;
  cardNumbersInputRefs: React.MutableRefObject<(HTMLInputElement | null)[]>;

  CVCHelperText: string;
  setCVCHelperText: React.Dispatch<React.SetStateAction<string>>;
  CVCInputRef: React.MutableRefObject<HTMLInputElement | null>;

  passwordHelperText: string;
  setPasswordHelperText: React.Dispatch<React.SetStateAction<string>>;
  passwordInputRef: React.MutableRefObject<HTMLInputElement | null>;

  cardColor: string;
  setCardColor: React.Dispatch<React.SetStateAction<string>>;

  showCardCompanySelect: boolean;
  setShowCardCompanySelect: React.Dispatch<React.SetStateAction<boolean>>;
  showExpiryInput: boolean;
  setShowExpiryInput: React.Dispatch<React.SetStateAction<boolean>>;
  showCVCInput: boolean;
  setShowCVCInput: React.Dispatch<React.SetStateAction<boolean>>;
  showPasswordInput: boolean;
  setShowPasswordInput: React.Dispatch<React.SetStateAction<boolean>>;

  isValidCardNumbers: boolean;
  setIsValidCardNumbers: React.Dispatch<React.SetStateAction<boolean>>;
  isValidCardCompany: boolean;
  setIsValidCardCompany: React.Dispatch<React.SetStateAction<boolean>>;
  isValidExpiry: boolean;
  setIsValidExpiry: React.Dispatch<React.SetStateAction<boolean>>;
  isValidCVC: boolean;
  setIsValidCVC: React.Dispatch<React.SetStateAction<boolean>>;
  isValidPassword: boolean;
  setIsValidPassword: React.Dispatch<React.SetStateAction<boolean>>;
  isValidForm: boolean;
  setIsValidForm: React.Dispatch<React.SetStateAction<boolean>>;
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;

  resetCardForm: () => void;
}

export const useCardState = (): CardContextType => {
  const [cardNumbers, setCardNumbers] = useState<string[]>(
    Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill("")
  );
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");
  const [CVC, setCVC] = useState("");
  const [password, setPassword] = useState("");

  const [cardColor, setCardColor] = useState("#333333");

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

  const [showCardCompanySelect, setShowCardCompanySelect] = useState(false);
  const [showExpiryInput, setShowExpiryInput] = useState(false);
  const [showCVCInput, setShowCVCInput] = useState(false);
  const [showPasswordInput, setShowPasswordInput] = useState(false);

  const [isValidCardNumbers, setIsValidCardNumbers] = useState(false);
  const [isValidCardCompany, setIsValidCardCompany] = useState(false);
  const [isValidExpiry, setIsValidExpiry] = useState(false);
  const [isValidCVC, setIsValidCVC] = useState(false);
  const [isValidPassword, setIsValidPassword] = useState(false);
  const [isValidForm, setIsValidForm] = useState(false);

  const [isSubmitted, setIsSubmitted] = useState(false);

  // ✅ resetCardForm 추가
  const resetCardForm = () => {
    setCardNumbers(Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill(""));
    setMonth("");
    setYear("");
    setCVC("");
    setPassword("");
    setCardColor("#333333");

    setExpiryHelperText("");
    setExpiryErrorIndex(null);
    setCardNumbersHelperText("");
    setCardNumbersErrorIndex(null);
    setCVCHelperText("");
    setPasswordHelperText("");

    setShowCardCompanySelect(false);
    setShowExpiryInput(false);
    setShowCVCInput(false);
    setShowPasswordInput(false);

    setIsValidCardNumbers(false);
    setIsValidCardCompany(false);
    setIsValidExpiry(false);
    setIsValidCVC(false);
    setIsValidPassword(false);
    setIsValidForm(false);

    setIsSubmitted(false);
  };

  return {
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
    cardColor,
    setCardColor,
    expiryHelperText,
    setExpiryHelperText,
    expiryErrorIndex,
    setExpiryErrorIndex,
    expiryInputRefs,
    cardNumbersHelperText,
    setCardNumbersHelperText,
    cardNumbersErrorIndex,
    setCardNumbersErrorIndex,
    cardNumbersInputRefs,
    CVCHelperText,
    setCVCHelperText,
    CVCInputRef,
    passwordHelperText,
    setPasswordHelperText,
    passwordInputRef,
    showCardCompanySelect,
    setShowCardCompanySelect,
    showExpiryInput,
    setShowExpiryInput,
    showCVCInput,
    setShowCVCInput,
    showPasswordInput,
    setShowPasswordInput,
    isValidCardNumbers,
    setIsValidCardNumbers,
    isValidCardCompany,
    setIsValidCardCompany,
    isValidExpiry,
    setIsValidExpiry,
    isValidCVC,
    setIsValidCVC,
    isValidPassword,
    setIsValidPassword,
    isValidForm,
    setIsValidForm,
    isSubmitted,
    setIsSubmitted,
    resetCardForm,
  };
};
