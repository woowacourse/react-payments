import { MouseEventHandler, useEffect, useMemo, useState } from 'react';
import useCardNumberValidation from './useCardNumberValidation';
import { DropdownOptionType } from '../../../../types/dropdown';
import useExpirationDateValidation from './useExpirationDateValidation';
import useCVCValidation from './useCVCValidation';
import useCardPasswordValidation from './useCardPasswordValidation';
import { useNavigate } from 'react-router';
import { INPUT_STEP } from '../config/step';
import { ROUTE_PATH } from '../../../../constants/route';

function usePaymentsForm() {
  const [inputStep, setInputStep] = useState(INPUT_STEP.cardNumber);
  const navigate = useNavigate();
  const {
    inputValues: cardNumberInputValues,
    inputRefs: cardNumberInputRefs,
    errorTypes: cardNumberErrorTypes,
    cardType,
    isInputComplete: isCardNumberInputComplete,
    handleValue: handleCardNumberInputValue,
    handleBlur: handleCardNumberBlur,
  } = useCardNumberValidation();

  const [cardBankValue, setCardBankValue] = useState<DropdownOptionType | null>(
    null
  );
  const cardBankSelected = cardBankValue !== null;

  const {
    inputValues: expirationDateInputValues,
    inputRefs: expirationDateInputRefs,
    isInputComplete: isExpirationDateInputComplete,
    handleInputValue: handleExpirationDateInputValue,
    handleBlur: handleExpirationDateBlur,
  } = useExpirationDateValidation();

  const {
    inputValue: CVCInputValue,
    inputRef: CVCInputRef,
    errorType: CVCErrorType,
    isInputComplete: isCVCInputComplete,
    handleInputValue: handleCVCInputValue,
    handleBlur: handleCVCInputBlur,
  } = useCVCValidation();

  const {
    inputValue: cardPasswordInputValue,
    inputRef: cardPasswordInputRef,
    errorType: cardPasswordErrorType,
    isInputComplete: isCardPasswordInputComplete,
    handleInputValue: handleCardPasswordInputValue,
    handleBlur: handleCardPasswordInputBlur,
  } = useCardPasswordValidation();

  const paymentsFormValues = {
    cardNumber: cardNumberInputValues,
    cardBank: cardBankValue,
    expirationDate: expirationDateInputValues,
    CVC: CVCInputValue,
    cardPassword: cardPasswordInputValue,
  };

  const paymentsFormInputRefs = {
    cardNumber: cardNumberInputRefs,
    expirationDate: expirationDateInputRefs,
    CVC: CVCInputRef,
    cardPassword: cardPasswordInputRef,
  };

  const paymentsFormErrorTypes = {
    cardNumber: cardNumberErrorTypes,
    CVC: CVCErrorType,
    cardPassword: cardPasswordErrorType,
  };

  const paymentsFormHandlers = {
    cardNumber: handleCardNumberInputValue,
    cardBank: setCardBankValue,
    expirationDate: handleExpirationDateInputValue,
    CVC: handleCVCInputValue,
    cardPassword: handleCardPasswordInputValue,
  };

  const paymentFormBlurHandlers = {
    cardNumber: handleCardNumberBlur,
    expirationDate: handleExpirationDateBlur,
    CVC: handleCVCInputBlur,
    cardPassword: handleCardPasswordInputBlur,
  };

  const allInputComplete = useMemo(
    () =>
      [
        isCardNumberInputComplete,
        cardBankSelected,
        isExpirationDateInputComplete,
        isCVCInputComplete,
        isCardPasswordInputComplete,
      ].every((value) => !value),
    [
      isCardNumberInputComplete,
      cardBankSelected,
      isExpirationDateInputComplete,
      isCVCInputComplete,
      isCardPasswordInputComplete,
    ]
  );

  const handleSubmit: MouseEventHandler<HTMLButtonElement> = (event) => {
    event.preventDefault();

    navigate(ROUTE_PATH.complete, {
      state: {
        cardNumberPart1: cardNumberInputValues.cardNumberPart1,
        cardBank: cardBankValue?.label,
      },
    });
  };

  useEffect(
    function moveToNextInputStep() {
      if (inputStep === INPUT_STEP.cardNumber) {
        if (isCardNumberInputComplete) setInputStep(INPUT_STEP.cardBank);
      } else if (inputStep === INPUT_STEP.cardBank) {
        if (cardBankSelected) setInputStep(INPUT_STEP.expirationDate);
      } else if (inputStep === INPUT_STEP.expirationDate) {
        if (isExpirationDateInputComplete) setInputStep(INPUT_STEP.CVC);
      } else if (inputStep === INPUT_STEP.CVC) {
        if (isCVCInputComplete) setInputStep(INPUT_STEP.cardPassword);
      }
    },
    [
      isCardNumberInputComplete,
      cardBankSelected,
      isExpirationDateInputComplete,
      isCVCInputComplete,
    ]
  );

  useEffect(
    function switchInputFieldFocus() {
      if (inputStep === INPUT_STEP.cardNumber) {
        cardNumberInputRefs.cardNumberPart1.current?.focus();
      } else if (inputStep === INPUT_STEP.expirationDate) {
        expirationDateInputRefs.month.current?.focus();
      } else if (inputStep === INPUT_STEP.CVC) {
        CVCInputRef.current?.focus();
      } else if (inputStep === INPUT_STEP.cardPassword) {
        cardPasswordInputRef.current?.focus();
      }
    },
    [inputStep]
  );

  return {
    paymentsFormValues,
    paymentsFormInputRefs,
    paymentsFormErrorTypes,
    paymentsFormHandlers,
    paymentFormBlurHandlers,
    inputStep,
    cardType,
    allInputComplete,
    handleSubmit,
  };
}

export default usePaymentsForm;
