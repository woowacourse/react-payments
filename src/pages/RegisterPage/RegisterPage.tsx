import {
  Button,
  CardCompanyInputField,
  CardCVCNumberInputField,
  CardExpirationDateInputField,
  CardNumberInputField,
  CardPasswordInputField,
  CardPreview,
  If,
  Spacing,
} from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { useForm } from '@/hooks';
import {
  CardCompanyInput,
  CardCVCNumberInput,
  CardExpirationDateInput,
  CardNumberInput,
  CardPasswordInput,
} from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './RegisterPage.styles';
import { $, isInputElement } from '@/utils';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export default function RegisterPage() {
  const navigate = useNavigate();

  // 현재 스텝
  const [currentStep, setCurrentStep] = useState<Step>(1);

  // 1. 카드 번호
  const {
    value: cardNumber,
    errors: cardNumberErrors,
    register: cardNumberRegister,
    isValid: isCardNumberIsValid,
  } = useForm<CardNumberInput>({
    defaultValues: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
  });

  // 2. 카드사
  const {
    value: { company: selectedCompany },
    register: cardCompanyRegister,
    isValid: isCardCompanyValid,
  } = useForm<CardCompanyInput>({
    defaultValues: {
      company: '',
    },
  });

  // 3. 카드 유효기간
  const {
    value: cardExpirationDate,
    errors: cardExpirationDateErrors,
    register: cardExpirationDateRegister,
    isValid: isExpirationDateValid,
  } = useForm<CardExpirationDateInput>({
    defaultValues: {
      month: '',
      year: '',
    },
  });

  // 4. 카드 CVC 번호
  const {
    value: cardCVCNumber,
    errors: cardCVCNumberErrors,
    register: cardCVCNumberRegister,
    isValid: isCVCNumberValid,
  } = useForm<CardCVCNumberInput>({
    defaultValues: {
      cvc: '',
    },
  });

  // 5. 비밀번호
  const {
    errors: cardPasswordErrors,
    register: cardPasswordRegister,
    isValid: isPasswordValid,
  } = useForm<CardPasswordInput>({
    defaultValues: {
      password: '',
    },
  });

  // 카드 뒤집기 상태
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleCardRegisterFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCardCompany = CARD_COMPANIES.find((company) => company.id === selectedCompany);
    navigate('/complete', {
      state: {
        firstCardNumber: cardNumber.first,
        cardCompany: selectedCardCompany?.name ?? '',
      },
    });
  };

  useEffect(
    function handleNextInputFocus() {
      const currentFocusedInput = document.activeElement;
      if (!isInputElement(currentFocusedInput)) return;
      if (currentFocusedInput.value?.length < currentFocusedInput?.maxLength) return;

      const currentSequenceNumber = Number(currentFocusedInput.getAttribute('data-sequence'));
      const nextInput = $<HTMLInputElement | HTMLSelectElement>(`[data-sequence="${currentSequenceNumber + 1}"]`);

      if (nextInput) nextInput.focus();
    },
    [cardNumber, cardExpirationDate, cardCVCNumber],
  );

  useEffect(() => {
    if (!isCardNumberIsValid) setCurrentStep(1);
    else if (!isCardCompanyValid) setCurrentStep(2);
    else if (!isExpirationDateValid) setCurrentStep(3);
    else if (!isCVCNumberValid) setCurrentStep(4);
    else if (!isPasswordValid) setCurrentStep(5);
    else setCurrentStep(6);
  }, [isCardNumberIsValid, isCardCompanyValid, isExpirationDateValid, isCVCNumberValid, isPasswordValid]);

  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview
          cardNumber={cardNumber}
          cardExpirationDate={cardExpirationDate}
          selectedCompany={selectedCompany}
          cardCVCNumber={cardCVCNumber}
          isFlipped={isCardFlipped}
        />
      </S.CardPreviewWrapper>

      <Spacing size={30} />

      <S.CardInfoForm onSubmit={handleCardRegisterFormSubmit}>
        <If condition={currentStep === 6}>
          <Button type="submit" isFixed>
            확인
          </Button>
        </If>

        <If condition={currentStep >= 5}>
          <CardPasswordInputField register={cardPasswordRegister} cardPasswordErrors={cardPasswordErrors} />
        </If>

        <If condition={currentStep >= 4}>
          <CardCVCNumberInputField
            register={cardCVCNumberRegister}
            cardCVCNumberErrors={cardCVCNumberErrors}
            onFocus={() => setIsCardFlipped(true)}
            onBlur={() => setIsCardFlipped(false)}
          />
        </If>

        <If condition={currentStep >= 3}>
          <CardExpirationDateInputField
            register={cardExpirationDateRegister}
            cardExpirationDateErrors={cardExpirationDateErrors}
          />
        </If>

        <If condition={currentStep >= 2}>
          <CardCompanyInputField register={cardCompanyRegister} />
        </If>

        <If condition={currentStep >= 1}>
          <CardNumberInputField register={cardNumberRegister} cardNumberErrors={cardNumberErrors} />
        </If>
      </S.CardInfoForm>
    </S.Wrapper>
  );
}
