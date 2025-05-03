import { useState, useRef } from "react";
import { CARD_VALIDATION_INFO } from "../constants/cardValidationInfo";

export interface FormValues {
  cardNumbers: string[];
  expirationDate: {
    month: string;
    year: string;
  };
  CVC: string;
  password: string;
  cardCompany: string;
  cardColor: string;
}

export interface FormErrors {
  expiry: {
    message: string;
    index: number | null;
  };
  cardNumbers: {
    message: string;
    index: number | null;
  };
  CVC: string;
  password: string;
}

export const useCardState = () => {
  const [formValues, setFormValues] = useState<FormValues>({
    cardNumbers: Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill(""),
    expirationDate: {
      month: "",
      year: "",
    },
    CVC: "",
    password: "",
    cardCompany: "",
    cardColor: "#333333",
  });

  const [formErrors, setFormErrors] = useState<FormErrors>({
    expiry: { message: "", index: null },
    cardNumbers: { message: "", index: null },
    CVC: "",
    password: "",
  });

  const [isOpenSelectCardCompany, setIsOpenSelectCardCompany] = useState(false);

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

  const expiryInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const cardNumbersInputRefs = useRef<(HTMLInputElement | null)[]>([]);
  const CVCInputRef = useRef<HTMLInputElement | null>(null);
  const passwordInputRef = useRef<HTMLInputElement | null>(null);

  const resetCardForm = () => {
    setFormValues({
      cardNumbers: Array(CARD_VALIDATION_INFO.TOTAL_CARD_INPUTS).fill(""),
      expirationDate: { month: "", year: "" },
      CVC: "",
      password: "",
      cardCompany: "",
      cardColor: "#333333",
    });

    setFormErrors({
      expiry: { message: "", index: null },
      cardNumbers: { message: "", index: null },
      CVC: "",
      password: "",
    });

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
    formValues,
    setFormValues,
    formErrors,
    setFormErrors,
    expiryInputRefs,
    cardNumbersInputRefs,
    CVCInputRef,
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
    isOpenSelectCardCompany,
    setIsOpenSelectCardCompany,
    resetCardForm,
  };
};
