import { useNavigate } from 'react-router-dom';
import styled from '@emotion/styled';
import CardInputSection from '../CardInputSection/CardInputSection';
import CardNumberField from '../CardNumberField/CardNumberField';
import { CARD_COMPANY_NAME } from '../../constants/cardCompany';
import CardValidityPeriodField from '../CardValidityPeriodField/CardValidityPeriodField';
import useCardValidationError from '../../../hooks/useCardValidationError';
import CardCompanySection from '../CardCompanySection/CardCompanySection';
import CardCVCSection from '../CardCVCSection/CardCVCSection';
import CardPasswordSection from '../CardPasswordSection/CardPasswordSection';

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
  const {
    state,
    validateCardNumber,
    validateCardCVC,
    validatePeriod,
    validatePassword,
  } = useCardValidationError();

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

  const isCardNumberValid = () => {
    return (
      state.isCardNumberError.every((e) => !e) &&
      cardNumber.every((e) => e !== '')
    );
  };

  const isCardValidityPeriodValid = () => {
    return (
      Object.values(state.isErrorCardValidityPeriod).every((e) => !e) &&
      Object.values(cardValidityPeriod).every((e) => e !== '')
    );
  };

  const isCardCVCValid = () => {
    return cardCVC !== '' && !state.isCardCVCError;
  };

  return (
    <Form onSubmit={handleSubmit}>
      <CardPasswordSection
        cardPassword={cardPassword}
        onChangeCardPassword={onChangeCardPassword}
        isError={state.isErrorCardPassword}
        errorMessage={state.cardPasswordErrorMessage}
        isValid={isCardCVCValid}
      />
      <CardCVCSection
        cardCVC={cardCVC}
        onChangeCardCVC={onChangeCardCVC}
        isError={state.isCardCVCError}
        errorMessage={state.cardCVCErrorMessage}
        isValid={isCardValidityPeriodValid}
      />
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
      <CardCompanySection
        cardCompany={cardCompany}
        handleChangeCardCompany={handleChangeCardCompany}
        isValid={isCardNumberValid}
      />
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
