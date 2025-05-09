import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import CardInputSection from '../cardInfoInputSections/CardInputSection/CardInputSection';
import CardNumberField from '../cardInfoFields/CardNumberField/CardNumberField';
import { CARD_COMPANY_NAME } from '../../constants/cardCompany';
import CardValidityPeriodField from '../cardInfoFields/CardValidityPeriodField/CardValidityPeriodField';
import CardCompanySection from '../cardInfoInputSections/CardCompanySection/CardCompanySection';
import CardCVCSection from '../cardInfoInputSections/CardCVCSection/CardCVCSection';
import CardPasswordSection from '../cardInfoInputSections/CardPasswordSection/CardPasswordSection';
import { validateExpiry } from '../../../utils/validateExpiry';

interface CardFormProps {
  cardNumber: {
    value: string[];
    isErrors: boolean[];
    errorMessage: string;
  };
  cardCompany: keyof typeof CARD_COMPANY_NAME | undefined;
  cardValidityPeriod: {
    value: {
      month: string;
      year: string;
    };
    isError: {
      month: boolean;
      year: boolean;
    };
    errorMessage: string;
  };
  cardCVC: {
    value: string;
    isError: boolean;
    errorMessage: string;
  };
  cardPassword: {
    value: string;
    isError: boolean;
    errorMessage: string;
  };
  setCardNumber: (cardNumber: {
    value: string[];
    isErrors: boolean[];
    errorMessage: string;
  }) => void;
  handleChangeCardCompany: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setCardValidityPeriod: React.Dispatch<
    React.SetStateAction<{
      value: {
        month: string;
        year: string;
      };
      isError: {
        month: boolean;
        year: boolean;
      };
      errorMessage: string;
    }>
  >;
  setCardCVC: (cvc: {
    value: string;
    isError: boolean;
    errorMessage: string;
  }) => void;
  setCardPassword: (password: {
    value: string;
    isError: boolean;
    errorMessage: string;
  }) => void;
}

function CardForm({
  cardNumber,
  cardCVC,
  cardCompany,
  cardValidityPeriod,
  cardPassword,
  setCardNumber,
  setCardCVC,
  handleChangeCardCompany,
  setCardValidityPeriod,
  setCardPassword,
}: CardFormProps) {
  const [stepShow, setStepShow] = useState({
    cardCompany: false,
    cardCVC: false,
    cardPassword: false,
  });

  const onChangeStep = (step: 'cardCompany' | 'cardCVC' | 'cardPassword') => {
    setStepShow((prev) => ({ ...prev, [step]: true }));
  };

  const onChangeCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
  ) => {
    const copy = [...cardNumber.value];
    copy[i] = e.target.value;

    const errors = copy.map((v) => v.length !== 4);
    const message = errors.some(Boolean)
      ? '카드 번호는 4자리씩 입력해야 합니다.'
      : '';

    setCardNumber({
      value: copy,
      isErrors: errors,
      errorMessage: message,
    });

    if (!errors.some(Boolean)) {
      onChangeStep('cardCompany');
    }
  };

  const onChangeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isError = value.length !== 3;
    const message = isError ? 'CVC는 3자리 숫자여야 합니다.' : '';

    setCardCVC({
      value: value,
      isError: isError,
      errorMessage: message,
    });
    if (!isError) {
      onChangeStep('cardPassword');
    }
  };

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    const copy = { ...cardValidityPeriod.value };
    const { value } = e.target;

    if (type === 'month') copy.month = value;
    if (type === 'year') copy.year = value;

    const { message, field } = validateExpiry(copy.month, copy.year, type);

    const isError = field
      ? {
          month: type === 'month' ? false : false,
          year: false,
          [field]: true,
        }
      : { month: false, year: false };

    setCardValidityPeriod((prev) => ({
      ...prev,
      value: {
        ...prev.value,
        [type]: value,
      },
      isError: isError,
      errorMessage: message,
    }));

    if (!isError.month && !isError.year) {
      onChangeStep('cardCVC');
    }
  };

  const onChangeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    const isError = value.length > 0 && value.length < 2;
    const message = isError ? '비밀번호는 두자리 입니다.' : '';

    setCardPassword({
      value: value,
      isError: isError,
      errorMessage: message,
    });
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = checkIsValid();

    if (isValid) {
      navigate('/Completion', {
        state: {
          startCardNumber: cardNumber.value[0],
          cardCompany: cardCompany,
        },
      });
    }
  };

  const checkIsValid = () => {
    const errorMessages = [
      cardNumber.errorMessage,
      cardValidityPeriod.errorMessage,
      cardCVC.errorMessage,
      cardPassword.errorMessage,
    ];
    const isError = errorMessages.some((e) => e !== '');

    const values = [
      ...cardNumber.value,
      cardCompany,
      cardValidityPeriod.value.month,
      cardValidityPeriod.value.year,
      cardCVC.value,
      cardPassword.value,
    ];

    const isNoneValue = values.some((e) => !e);

    return !isError && !isNoneValue;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardPasswordSection
        cardPassword={cardPassword.value}
        onChangeCardPassword={onChangeCardPassword}
        isError={cardPassword.isError}
        errorMessage={cardPassword.errorMessage}
        show={stepShow.cardPassword}
      />
      <CardCVCSection
        cardCVC={cardCVC.value}
        onChangeCardCVC={onChangeCardCVC}
        isError={cardCVC.isError}
        errorMessage={cardCVC.errorMessage}
        show={stepShow.cardCVC}
      />
      {cardCompany && (
        <CardInputSection
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
          errorMessage={cardValidityPeriod.errorMessage}
        >
          <CardValidityPeriodField
            cardValidityPeriod={cardValidityPeriod.value}
            isError={cardValidityPeriod.isError}
            onChange={onChangeCardValidityPeriod}
          />
        </CardInputSection>
      )}
      <CardCompanySection
        cardCompany={cardCompany}
        handleChangeCardCompany={handleChangeCardCompany}
        show={stepShow.cardCompany}
      />
      <CardInputSection
        title="결제할 카드 번호 입력"
        errorMessage={cardNumber.errorMessage}
      >
        <CardNumberField
          cardNumber={cardNumber.value}
          isError={cardNumber.isErrors}
          onChange={onChangeCardNumber}
        />
      </CardInputSection>
      <SubmitButton disabled={!checkIsValid()} isError={!checkIsValid()}>
        확인
      </SubmitButton>
    </Form>
  );
}

export default CardForm;

const Form = styled.form`
  height: 500px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 45px;
  overflow: auto;
`;

const SubmitButton = styled.button<{ isError: boolean }>`
  width: 100%;
  height: 52px;
  left: 0px;
  bottom: 0px;
  background: #333333;
  color: white;
  position: absolute;
  font-weight: 700;
  cursor: ${(props) => (props.isError ? 'auto' : 'pointer')};
  opacity: ${(props) => (props.isError ? 0.4 : 1)};
`;
