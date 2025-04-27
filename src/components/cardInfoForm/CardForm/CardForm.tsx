import React, { useState } from 'react';
import styled from '@emotion/styled';
import CardInputSection from '../CardInputSection/CardInputSection';
import CardNumberField from '../CardNumberField/CardNumberField';
import CardCVCField from '../CardCVCField/CardCVCField';
import { CARD_IFNO_INPUT_STEP } from '../../../App';
import CardCompanySelect from '../CardCompanySelect/CardCompanySelect';
import { CARD_COMPANY_NAME } from '../../constants/cardCompany';
import CardValidityPeriodField from '../CardValidityPeriodField/CardValidityPeriodField';
import CardPasswordField from '../CardPasswordField/CardPasswordField';
import useCardValidationError from '../../../hooks/useCardValidationError';
import { useNavigate } from 'react-router-dom';

interface CardFormProps {
  cardNumber: string[];
  cardCompany: keyof typeof CARD_COMPANY_NAME | undefined;
  cardCVC: string;
  cardValidityPeriod: {
    month: string;
    year: string;
  };
  cardPassword: string;
  setCardNumber: (cardNumber: string[]) => void;
  handleChangeCardCompany: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  setCardValidityPeriod: React.Dispatch<
    React.SetStateAction<{ month: string; year: string }>
  >;
  setCardCVC: (cvc: string) => void;
  setCardPassword: (password: string) => void;
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
  const [show, setShow] = useState({
    cardCompany: false,
    cvc: false,
    password: false,
  });

  const showNextStep = (step: keyof typeof CARD_IFNO_INPUT_STEP) => {
    if (show[step]) return;

    setShow((prev) => ({ ...prev, [step]: true }));
  };

  const {
    state,
    validateCardNumber,
    validateCardCVC,
    validatePeriod,
    validatePassword,
  } = useCardValidationError({
    cardNumber,
    cardCVC,
    cardValidityPeriod,
    showNextStep,
  });

  const onChangeCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
  ) => {
    const copy = [...cardNumber];
    copy[i] = e.target.value;

    setCardNumber(copy);
    validateCardNumber(copy);
  };

  const onChangeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCardCVC(value);
    validateCardCVC(value);
  };

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    const copy = { ...cardValidityPeriod };
    const { value } = e.target;

    if (type === 'month') copy.month = value;
    if (type === 'year') copy.year = value;

    setCardValidityPeriod((prev) => ({
      ...prev,
      [type]: value,
    }));
    validatePeriod(copy.year, copy.month, type);
  };

  const onChangeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;

    setCardPassword(value);
    validatePassword(value);
  };

  const navigate = useNavigate();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const isValid = checkIsValid();

    if (isValid) {
      navigate('/Completion', {
        state: {
          startCardNumber: cardNumber[0],
          cardCompany: cardCompany,
        },
      });
    }
  };

  const checkIsValid = () => {
    const errorMessages = [
      state.cardCVCErrorMessage,
      state.cardNumberErrorMessage,
      state.cardPasswordErrorMessage,
      state.cardValidityMessage,
    ];
    const isError = errorMessages.some((e) => e !== '');

    const values = [
      ...cardNumber,
      cardCompany,
      cardValidityPeriod.month,
      cardValidityPeriod.year,
      cardCVC,
      cardPassword,
    ];

    const isNoneValue = values.some((e) => !e);

    return !isError && !isNoneValue;
  };

  return (
    <Form onSubmit={handleSubmit}>
      {show.password && (
        <CardInputSection
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요"
          errorMessage={state.cardPasswordErrorMessage}
        >
          <CardPasswordField
            cardPassword={cardPassword}
            isError={state.isErrorCardPassword}
            onChange={onChangeCardPassword}
          />
        </CardInputSection>
      )}
      {show.cvc && (
        <CardInputSection
          title="CVC 번호를 입력해 주세요"
          errorMessage={state.cardCVCErrorMessage}
        >
          <CardCVCField
            cardCVC={cardCVC}
            isError={state.isCardCVCError}
            onChange={onChangeCardCVC}
          />
        </CardInputSection>
      )}
      {cardCompany && (
        <CardInputSection
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
          errorMessage={state.cardValidityMessage}
        >
          <CardValidityPeriodField
            cardValidityPeriod={cardValidityPeriod}
            isError={state.isErrorCardValidityPeriod}
            onChange={onChangeCardValidityPeriod}
          />
        </CardInputSection>
      )}
      {show.cardCompany && (
        <CardInputSection
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
          errorMessage={''}
        >
          <CardCompanySelect
            cardCompany={cardCompany}
            onChange={handleChangeCardCompany}
          />
        </CardInputSection>
      )}
      <CardInputSection
        title="결제할 카드 번호 입력"
        errorMessage={state.cardNumberErrorMessage}
      >
        <CardNumberField
          cardNumber={cardNumber}
          isError={state.isCardNumberError}
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
