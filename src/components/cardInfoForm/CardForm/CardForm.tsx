import React, { useState } from 'react';
import CardInputSection from '../CardInputSection/CardInputSection';
import CardNumberField from '../CardNumberField/CardNumberField';
import CardCVCField from '../CardCVCField/CardCVCField';
import { CARD_IFNO_INPUT_STEP } from '../../../App';
import CardCompanySelect from '../CardCompanySelect/CardCompanySelect';
import { CARD_COMPANY_NAME } from '../../constants/cardCompany';
import CardValidityPeriodField from '../CardValidityPeriodField/CardValidityPeriodField';
import CardPasswordField from '../CardPasswordField/CardPasswordField';
import useCardValidationError from '../../../hooks/useCardValidationError';

interface CardFormProps {
  cardNumber: string[];
  cardCompany: keyof typeof CARD_COMPANY_NAME | undefined;
  cardCVC: string;
  cardValidityPeriod: {
    month: string;
    year: string;
  };
  cardPassword: string;
  handleChangeCardNumber: (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
  ) => void;
  handleChangeCardCompany: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangeValidityPeriod: (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => void;
  handleChangeCVC: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleChangeCardPassword: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function CardForm({
  cardNumber,
  cardCVC,
  cardCompany,
  cardValidityPeriod,
  cardPassword,
  handleChangeCardNumber,
  handleChangeCVC,
  handleChangeCardCompany,
  handleChangeValidityPeriod,
  handleChangeCardPassword,
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
    handleChangeCardNumber(e, i);
    const copy = [...cardNumber];
    copy[i] = e.target.value;
    validateCardNumber(copy);
  };

  const onChangeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeCVC(e);
    validateCardCVC(e.target.value);
  };

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    handleChangeValidityPeriod(e, type);
    const copy = { ...cardValidityPeriod };

    if (type === 'month') copy.month = e.target.value;
    if (type === 'year') copy.year = e.target.value;

    validatePeriod(copy.year, copy.month, type);
  };

  const onChangeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeCardPassword(e);
    validatePassword(e.target.value);
  };

  return (
    <form>
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
    </form>
  );
}

export default CardForm;
