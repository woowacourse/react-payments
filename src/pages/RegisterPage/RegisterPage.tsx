import { getCardType } from '@/App/utils';
import {
  CardCompany,
  CardCVCNumber,
  CardExpirationDate,
  CardNumber,
  CardPassword,
  CardPreview,
  Spacing,
} from '@/components';
import Button from '@/components/Button/Button';
import { CARD_COMPANIES } from '@/constants';
import useForm from '@/hooks/useForm';
import {
  CardCompanyInputType,
  CardCVCNumberInputType,
  CardExpirationDateInputType,
  CardNumberInputType,
  CardPasswordInputType,
} from '@/types/input';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './RegisterPage.styles';

type Step = 1 | 2 | 3 | 4 | 5 | 6;

export default function RegisterPage() {
  const navigate = useNavigate();

  // 현재 스텝
  const [currentStep, setCurrentStep] = useState<Step>(1);

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

  // 비밀번호
  const [cardPassword, setCardPassword] = useState<CardPasswordInputType>('');
  const [cardPasswordErrorMessage, setCardPasswordErrorMessage] = useState<CardPasswordInputType>('');

  // 카드 유효기간
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

  // 카드 CVC 번호
  const [cardCVCNumber, setCardCVCNumber] = useState<CardCVCNumberInputType>('');
  const [cardCVCNumberErrorMessage, setCardCVCNumberErrorMessage] = useState<CardCVCNumberInputType>('');

  // 카드사
  const {
    value: { company: selectedCompany },
    register: cardCompanyRegister,
    isValid: isCardCompanyValid,
  } = useForm<{ company: CardCompanyInputType }>({
    defaultValues: {
      company: '',
    },
  });

  // 카드 뒤집기 상태
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const cardType = getCardType(cardNumber.first);
  const isCVCNumberValid = cardCVCNumber.length === 3;
  const isPasswordValid = cardPassword.length === 2;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedCardCompany = CARD_COMPANIES.find((company) => company.id === selectedCompany);
    navigate('/complete', {
      state: {
        cardNumber: cardNumber.first,
        cardCompany: selectedCardCompany?.name || '',
        cardExpirationDateMonth: cardExpirationDate.month,
        cardExpirationDateYear: cardExpirationDate.year,
        cardCVCNumber: cardCVCNumber,
        cardPassword: cardPassword,
      },
    });
  };

  useEffect(() => {
    if (currentStep === 1 && isCardNumberIsValid) {
      setCurrentStep(2);
    }
  }, [currentStep, isCardNumberIsValid]);

  useEffect(() => {
    if (currentStep === 2 && isCardCompanyValid) {
      setCurrentStep(3);
    }
  }, [currentStep, isCardCompanyValid]);

  useEffect(() => {
    if (currentStep === 3 && isExpirationDateValid) {
      setCurrentStep(4);
    }
  }, [currentStep, isExpirationDateValid]);

  useEffect(() => {
    if (currentStep === 4 && isCVCNumberValid) {
      setCurrentStep(5);
    }
  }, [currentStep, isCVCNumberValid]);

  useEffect(() => {
    if (currentStep === 5 && isPasswordValid) {
      setCurrentStep(6);
    }
  }, [currentStep, isPasswordValid]);

  return (
    <S.Wrapper>
      <S.CardPreviewWrapper>
        <CardPreview
          cardType={cardType}
          cardNumber={cardNumber}
          cardExpirationDate={cardExpirationDate}
          selectedCompany={selectedCompany}
          cardCVCNumber={cardCVCNumber}
          isFlipped={isCardFlipped}
        />
      </S.CardPreviewWrapper>
      <Spacing size={30} />
      <S.CardInfoForm onSubmit={handleSubmit}>
        {currentStep >= 5 && isCVCNumberValid && (
          <CardPassword
            cardPassword={cardPassword}
            setCardPassword={setCardPassword}
            cardPasswordErrorMessage={cardPasswordErrorMessage}
            setCardPasswordErrorMessage={setCardPasswordErrorMessage}
          />
        )}

        {currentStep >= 4 && isExpirationDateValid && (
          <CardCVCNumber
            cardCVCNumber={cardCVCNumber}
            setCardCVCNumber={setCardCVCNumber}
            cardCVCNumberErrorMessage={cardCVCNumberErrorMessage}
            setCardCVCNumberErrorMessage={setCardCVCNumberErrorMessage}
            onFocus={() => setIsCardFlipped(true)}
            onBlur={() => setIsCardFlipped(false)}
          />
        )}

        {currentStep >= 3 && isCardCompanyValid && (
          <CardExpirationDate
            register={cardExpirationDateRegister}
            cardExpirationDateErrorMessage={cardExpirationDateErrors}
          />
        )}

        {isCardNumberIsValid && <CardCompany register={cardCompanyRegister} />}

        {currentStep >= 1 && <CardNumber register={cardNumberRegister} cardNumberErrorMessage={cardNumberErrors} />}

        {currentStep === 6 && isPasswordValid && <Button type="submit">확인</Button>}
      </S.CardInfoForm>
    </S.Wrapper>
  );
}
