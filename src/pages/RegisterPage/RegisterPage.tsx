import {
  Button,
  CardCompany,
  CardCVCNumber,
  CardExpirationDate,
  CardNumber,
  CardPassword,
  CardPreview,
  Spacing,
} from '@/components';
import { CARD_COMPANIES } from '@/constants';
import { useForm } from '@/hooks';
import {
  CardCompanyInputType,
  CardCVCNumberInputType,
  CardExpirationDateInputType,
  CardNumberInputType,
  CardPasswordInputType,
} from '@/types';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './RegisterPage.styles';

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
  } = useForm<CardNumberInputType>({
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
  } = useForm<CardCompanyInputType>({
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
  } = useForm<CardExpirationDateInputType>({
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
  } = useForm<CardCVCNumberInputType>({
    defaultValues: {
      cvc: '',
    },
  });

  // 5. 비밀번호
  const {
    errors: cardPasswordErrors,
    register: cardPasswordRegister,
    isValid: isPasswordValid,
  } = useForm<CardPasswordInputType>({
    defaultValues: {
      password: '',
    },
  });

  // 카드 뒤집기 상태
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const selectedCardCompany = CARD_COMPANIES.find((company) => company.id === selectedCompany);
    navigate('/complete', {
      state: {
        firstCardNumber: cardNumber.first,
        cardCompany: selectedCardCompany?.name ?? '',
      },
    });
  };

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
      <S.CardInfoForm onSubmit={handleSubmit}>
        {currentStep >= 5 && <CardPassword register={cardPasswordRegister} cardPasswordErrors={cardPasswordErrors} />}

        {currentStep >= 4 && (
          <CardCVCNumber
            register={cardCVCNumberRegister}
            cardCVCNumberErrors={cardCVCNumberErrors}
            onFocus={() => setIsCardFlipped(true)}
            onBlur={() => setIsCardFlipped(false)}
          />
        )}

        {currentStep >= 3 && (
          <CardExpirationDate
            register={cardExpirationDateRegister}
            cardExpirationDateErrors={cardExpirationDateErrors}
          />
        )}

        {currentStep >= 2 && <CardCompany register={cardCompanyRegister} />}

        {currentStep >= 1 && <CardNumber register={cardNumberRegister} cardNumberErrors={cardNumberErrors} />}

        {currentStep === 6 && (
          <Button type="submit" isFixed>
            확인
          </Button>
        )}
      </S.CardInfoForm>
    </S.Wrapper>
  );
}
