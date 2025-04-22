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
    register,
  } = useForm<CardNumberInputType>({
    defaultValues: {
      first: '',
      second: '',
      third: '',
      fourth: '',
    },
    validation: {
      first: {
        required: true,
        length: 4,
        errorMessage: '카드 번호는 4자리의 숫자로 입력해주세요.',
      },
      second: {
        required: true,
        length: 4,
        errorMessage: '카드 번호는 4자리의 숫자로 입력해주세요.',
      },
      third: {
        required: true,
        length: 4,
        errorMessage: '카드 번호는 4자리의 숫자로 입력해주세요.',
      },
      fourth: {
        required: true,
        length: 4,
        errorMessage: '카드 번호는 4자리의 숫자로 입력해주세요.',
      },
    },
  });

  // 비밀번호
  const [cardPassword, setCardPassword] = useState<string>('');
  const [cardPasswordErrorMessage, setCardPasswordErrorMessage] = useState<string>('');

  // 카드 유효기간
  const [cardExpirationDate, setCardExpirationDate] = useState<CardExpirationDateInputType>({
    month: '',
    year: '',
  });
  const [cardExpirationDateErrorMessage, setCardExpirationDateErrorMessage] = useState<CardExpirationDateInputType>({
    month: '',
    year: '',
  });

  // 카드 CVC 번호
  const [cardCVCNumber, setCardCVCNumber] = useState<CardCVCNumberInputType>('');
  const [cardCVCNumberErrorMessage, setCardCVCNumberErrorMessage] = useState<CardCVCNumberInputType>('');

  // 카드사
  const [selectedCompany, setSelectedCompany] = useState<CardCompanyInputType>('');

  // 카드 뒤집기 상태
  const [isCardFlipped, setIsCardFlipped] = useState(false);

  const cardType = getCardType(cardNumber.first);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const selectedCardCompany = CARD_COMPANIES.find((company) => company.id === selectedCompany);
    navigate('/complete', {
      state: {
        cardNumber: cardNumber.first,
        cardCompany: selectedCardCompany?.name || '',
      },
    });
  };

  const isCardNumberValid = Object.values(cardNumber).every((value) => value.length === 4);
  const isCardCompanyValid = Boolean(selectedCompany);
  const isExpirationDateValid = cardExpirationDate.month && cardExpirationDate.year;
  const isCVCNumberValid = cardCVCNumber.length === 3;
  const isPasswordValid = cardPassword.length === 2;

  useEffect(() => {
    if (currentStep === 1 && isCardNumberValid) {
      setCurrentStep(2);
    }
  }, [currentStep, isCardNumberValid]);

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
            cardExpirationDate={cardExpirationDate}
            setCardExpirationDate={setCardExpirationDate}
            cardExpirationDateErrorMessage={cardExpirationDateErrorMessage}
            setCardExpirationDateErrorMessage={setCardExpirationDateErrorMessage}
          />
        )}

        {isCardNumberValid && <CardCompany selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />}

        {currentStep >= 1 && <CardNumber register={register} cardNumberErrorMessage={cardNumberErrors} />}

        {currentStep === 6 && isPasswordValid && <Button type="submit">확인</Button>}
      </S.CardInfoForm>
    </S.Wrapper>
  );
}
