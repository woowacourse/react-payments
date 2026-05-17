import { useEffect, useRef, useState } from 'react';
import type { CardCompany } from '../context/CardContext';
import { BrandValidator } from '../validators/BrandValidator';
import { useNavigate } from 'react-router-dom';

export function useCardForm() {
  // input 상태 초기화
  const [cardCompany, setCardCompany] = useState<CardCompany>('');

  const [cardNumber, setCardNumber] = useState(['', '', '', '']);

  const [cardExpiryDate, setCardExpiryDate] = useState({
    'expiry-month': '',
    'expiry-year': '',
  });

  const [cardCVC, setCardCVC] = useState('');

  const [cardPassword, setCardPassword] = useState('');

  // Focus, step 상태 관련
  const [currentStep, setCurrentStep] = useState(0);

  const cardNumberFirstRef = useRef<HTMLInputElement>(null);
  const expiryMonthRef = useRef<HTMLInputElement>(null);
  const cardCVCRef = useRef<HTMLInputElement>(null);
  const cardPasswordRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (currentStep === 1) expiryMonthRef.current?.focus();
    if (currentStep === 2) cardCVCRef.current?.focus();
    if (currentStep === 3) cardPasswordRef.current?.focus();
  }, [currentStep]);

  // Form 완료 검증 로직
  const networkBrand =
    cardNumber[0].length > 0 ? BrandValidator.detectNetworkBrand(cardNumber.join('')).brand : '';
  const lastDigitLength = networkBrand === 'diners' ? 2 : networkBrand === 'amex' ? 3 : 4;
  const isFormComplete =
    cardCompany !== '' &&
    cardNumber[0].length === 4 &&
    cardNumber[1].length === 4 &&
    cardNumber[2].length === 4 &&
    cardNumber[3].length === lastDigitLength &&
    cardExpiryDate['expiry-month'].length === 2 &&
    cardExpiryDate['expiry-year'].length === 2 &&
    cardCVC.length === 3 &&
    cardPassword.length === 2;

  // Form 완료시 navigate 방지 핸들러

  const navigate = useNavigate();
  const handleFormSubmit = (e: React.SubmitEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!isFormComplete) return;
    navigate('/react-payments/complete', {
      state: { firstDigits: cardNumber[0], cardCompany: cardCompany },
    });
  };

  return {
    cardCompany,
    cardNumber,
    cardExpiryDate,
    cardCVC,
    cardPassword,
    isFormComplete,
    networkBrand,
    refs: { cardNumberFirstRef, expiryMonthRef, cardCVCRef, cardPasswordRef },
    currentStep,
    onCardNumberComplete: () => setCurrentStep((s) => Math.max(s, 1)),
    onCardCompanySelected: () => setCurrentStep((s) => Math.max(s, 2)),
    onCardExpiryDateComplete: () => setCurrentStep((s) => Math.max(s, 3)),
    onCardCVCComplete: () => setCurrentStep((s) => Math.max(s, 4)),
    setCardCompany,
    setCardNumber,
    setCardExpiryDate,
    setCardCVC,
    setCardPassword,
    handleFormSubmit,
  };
}
