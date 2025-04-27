import React, { useEffect, useReducer, useState } from 'react';
import CardInputSection from '../CardInputSection/CardInputSection';
import CardNumberField from '../CardNumberField/CardNumberField';
import CardCVCField from '../CardCVCField/CardCVCField';
import { CARD_IFNO_INPUT_STEP } from '../../../App';
import CardCompanySelect from '../CardCompanySelect/CardCompanySelect';
import { CARD_COMPANY_NAME } from '../../constants/cardCompany';
import CardValidityPeriodField from '../CardValidityPeriodField/CardValidityPeriodField';
import { checkValideDate } from '../../../utils/checkValideDate';
import CardPasswordField from '../CardPasswordField/CardPasswordField';

const VALIDITY_PERIOD = {
  MAX_LENGTH: 2,
};

interface Action {
  type:
    | 'VALIDATE_CARD_NUMBER'
    | 'VALIDATE_CARD_CVC'
    | 'VALIDATE_CARD_VALIDITY_PERIOD'
    | 'VALIDATE_CARD_PASSWORD';
  payload: {
    cardNumber?: string[];
    cardCVC?: string;
    cardValidityPeriod?: {
      month: string;
      year: string;
      type: 'month' | 'year';
    };
    cardPassword?: string;
  };
}

interface FormState {
  isCardNumberError: boolean[];
  isErrorCardValidityPeriod: {
    month: boolean;
    year: boolean;
  };
  isCardCVCError: boolean;
  isErrorCardPassword: boolean;
  cardNumberErrorMessage: string;
  cardCVCErrorMessage: string;
  cardValidityMessage: string;
  cardPasswordErrorMessage: string;
}

const initialState: FormState = {
  isCardNumberError: [false, false, false, false],
  isErrorCardValidityPeriod: { month: false, year: false },
  isCardCVCError: false,
  isErrorCardPassword: false,
  cardNumberErrorMessage: '',
  cardCVCErrorMessage: '',
  cardValidityMessage: '',
  cardPasswordErrorMessage: '',
};

type ExpiryField = 'month' | 'year';

interface ValidationResult {
  message: string;
  field: ExpiryField | null;
}

const validateExpiry = (
  monthStr: string,
  yearStr: string,
  focueType: ExpiryField,
): ValidationResult => {
  const INVALID_DATE_MSG = '현재보다 이전값을 유효기간으로 선택할 수 없습니다.';
  const FORMAT_MSG = 'MM형식으로 입력해주세요. (ex. 01)';
  const MONTH_RANGE_MSG = '1~12사이의 올바른 월을 입력해 주세요.';

  const month = Number(monthStr);
  const year = Number(yearStr);
  const currentYear = Number(new Date().getFullYear().toString().slice(2));

  if (focueType === 'month') {
    if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
    if (month < 1 || month > 12)
      return { message: MONTH_RANGE_MSG, field: 'month' };
  }
  if (focueType === 'year') {
    if (yearStr.length < 2) return { message: FORMAT_MSG, field: 'year' };
    if (year < currentYear) return { message: INVALID_DATE_MSG, field: 'year' };
  }

  const invalidField = checkValideDate(monthStr, yearStr);
  if (invalidField) {
    return { message: INVALID_DATE_MSG, field: invalidField };
  }

  if (focueType === 'month') {
    if (year < currentYear) return { message: INVALID_DATE_MSG, field: 'year' };
    if (yearStr.length < 2) return { message: FORMAT_MSG, field: 'year' };
  }

  if (focueType === 'year') {
    if (month < 1 || month > 12)
      return { message: MONTH_RANGE_MSG, field: 'month' };
    if (monthStr.length < 2) return { message: FORMAT_MSG, field: 'month' };
  }

  return { message: '', field: null };
};

function formReducer(state: FormState, action: Action): FormState {
  switch (action.type) {
    case 'VALIDATE_CARD_NUMBER': {
      const nums = action.payload.cardNumber || [];
      const errors = nums.map((v) => v !== '' && v.length !== 4);

      const message = errors.some(Boolean)
        ? '카드 번호는 4자리씩 입력해야 합니다.'
        : '';
      return {
        ...state,
        isCardNumberError: errors,
        cardNumberErrorMessage: message,
      };
    }
    case 'VALIDATE_CARD_CVC': {
      const cvc = action.payload.cardCVC || '';
      const isError = cvc.length !== 3;
      const msg = isError ? 'CVC는 3자리 숫자여야 합니다.' : '';
      return {
        ...state,
        isCardCVCError: isError,
        cardCVCErrorMessage: msg,
      };
    }
    case 'VALIDATE_CARD_VALIDITY_PERIOD': {
      const { type, month, year } = action.payload.cardValidityPeriod!;

      const { message, field } = validateExpiry(month, year, type);

      const isError = field
        ? {
            month: type === 'month' ? false : false,
            year: false,
            [field]: true,
          }
        : { month: false, year: false };

      return {
        ...state,
        isErrorCardValidityPeriod: isError,
        cardValidityMessage: message,
      };
    }
    case 'VALIDATE_CARD_PASSWORD': {
      const password = action.payload.cardPassword || '';
      const isError = password.length > 0 && password.length < 2;

      return {
        ...state,
        isErrorCardPassword: isError,
        cardPasswordErrorMessage: isError ? '비밀번호는 두자리 입니다.' : '',
      };
    }
    default:
      return state;
  }
}

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
  const [state, dispatch] = useReducer(formReducer, initialState);

  const [show, setShow] = useState({
    cardCompany: false,
    cvc: false,
    password: false,
  });

  const showNextStep = (step: keyof typeof CARD_IFNO_INPUT_STEP) => {
    if (show[step]) return;

    setShow((prev) => ({ ...prev, [step]: true }));
  };

  const onChangeCardNumber = (
    e: React.ChangeEvent<HTMLInputElement>,
    i: number,
  ) => {
    handleChangeCardNumber(e, i);
    const copy = [...cardNumber];
    copy[i] = e.target.value;
    dispatch({ type: 'VALIDATE_CARD_NUMBER', payload: { cardNumber: copy } });
  };

  const onChangeCardCVC = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeCVC(e);
    dispatch({
      type: 'VALIDATE_CARD_CVC',
      payload: { cardCVC: e.target.value },
    });
  };

  const onChangeCardValidityPeriod = (
    e: React.ChangeEvent<HTMLInputElement>,
    type: 'month' | 'year',
  ) => {
    handleChangeValidityPeriod(e, type);
    const copy = { ...cardValidityPeriod };

    if (type === 'month') copy.month = e.target.value;
    if (type === 'year') copy.year = e.target.value;

    dispatch({
      type: 'VALIDATE_CARD_VALIDITY_PERIOD',
      payload: {
        cardValidityPeriod: {
          ...copy,
          type,
        },
      },
    });
  };

  const onChangeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    handleChangeCardPassword(e);
    dispatch({
      type: 'VALIDATE_CARD_PASSWORD',
      payload: { cardPassword: e.target.value },
    });
  };

  useEffect(() => {
    if (
      state.isCardNumberError.every((e) => !e) &&
      cardNumber.every((e) => e !== '')
    ) {
      showNextStep(CARD_IFNO_INPUT_STEP.cardCompany);
    }

    if (
      Object.values(state.isErrorCardValidityPeriod).every((e) => !e) &&
      Object.values(cardValidityPeriod).every((e) => e !== '')
    ) {
      showNextStep(CARD_IFNO_INPUT_STEP.cvc);
    }

    if (cardCVC !== '' && !state.isCardCVCError) {
      showNextStep(CARD_IFNO_INPUT_STEP.password);
    }
  }, [
    cardNumber,
    cardValidityPeriod,
    cardCVC,
    state.isCardNumberError,
    state.isErrorCardValidityPeriod,
    state.isCardCVCError,
  ]);

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
