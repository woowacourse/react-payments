import CardPreview from './components/CardPreview/CardPreview';
import CardInputSection from './components/cardInfoForm/CardInputSection/CardInputSection';
import CardNumberField from './components/cardInfoForm/CardNumberField/CardNumberField';
import CardValidityPeriodField from './components/cardInfoForm/CardValidityPeriodField/CardValidityPeriodField';
import CardCVCField from './components/cardInfoForm/CardCVCField/CardCVCField';
import styled from '@emotion/styled';
import useCardNumber from './hooks/useCardNumber';
import useCardValidityPeriod from './hooks/useCardValidityPeriod';
import useCardCVC from './hooks/useCardCVC';
import { useRef, useState } from 'react';
import CardCompanySelect from './components/cardInfoForm/CardCompanySelect/CardCompanySelect';
import { CARD_COMPANY_NAME } from './components/constants/cardCompany';
import CardPasswordField from './components/cardInfoForm/CardPasswordField/CardPasswordField';

export const CARD_IFNO_INPUT_STEP = {
  cardCompany: 'cardCompany',
  validityPeriod: 'validityPeriod',
  cvc: 'cvc',
  password: 'password',
} as const;

function App() {
  const showRef = useRef({
    cardCompany: false,
    validityPeriod: false,
    cvc: false,
    password: false,
  });

  const showNextStep = (step: keyof typeof CARD_IFNO_INPUT_STEP) => {
    if (showRef.current[step]) return;

    showRef.current[step] = true;
  };

  const { cardNumber, onChange, isError, errorMessage } = useCardNumber({
    showNextStep,
  });

  const {
    cardValidityPeriod,
    isErrorCardValidityPeriod,
    onChangeCardValidityPeriod,
    errorMessage: cardValidityPeriodErrorMessage,
  } = useCardValidityPeriod({
    showNextStep,
  });

  const {
    cardCVC,
    isCardCVCError,
    onChangeCVC,
    checkCardCVCError,
    errorMessage: cardCVCErrorMessage,
  } = useCardCVC({
    showNextStep,
  });

  const [cardCompany, setCardCompany] = useState<
    keyof typeof CARD_COMPANY_NAME | undefined
  >();

  const isCardCompany = (v: string): v is keyof typeof CARD_COMPANY_NAME => {
    return v in CARD_COMPANY_NAME;
  };

  const onChangeCardCompany = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;

    if (isCardCompany(value)) {
      setCardCompany(value);

      showNextStep(CARD_IFNO_INPUT_STEP.validityPeriod);
    }
  };

  const [cardPassword, setCardPassword] = useState('');
  const [cardPasswordErrorMessage, setCardPasswordErrorMessage] = useState('');

  const onChangeCardPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
    const originValue = e.target.value;
    const value = originValue.replace(/[^0-9]/g, '');

    if (value.length > 2) {
      return;
    }

    if (value.length > 0 && value.length < 2) {
      setCardPasswordErrorMessage('잘못');
    } else {
      setCardPasswordErrorMessage('');
    }
    setCardPassword(value);
  };

  const check = () => {
    return cardPassword.length > 0 && cardPassword.length < 2;
  };

  return (
    <AppLayout>
      <CardPreview
        cardNumber={cardNumber}
        cardValidityPeriod={cardValidityPeriod}
        cardCompany={cardCompany}
      />
      <CardForm>
        {showRef.current.password && (
          <CardInputSection
            title="비밀번호를 입력해 주세요"
            description="앞의 2자리를 입력해주세요"
            errorMessage={
              cardPasswordErrorMessage ? cardPasswordErrorMessage : ''
            }
          >
            <CardPasswordField
              cardPassword={cardPassword}
              isError={check()}
              onChange={onChangeCardPassword}
            />
          </CardInputSection>
        )}

        {showRef.current.cvc && (
          <CardInputSection
            title="CVC 번호를 입력해 주세요"
            errorMessage={checkCardCVCError() ? cardCVCErrorMessage : ''}
          >
            <CardCVCField
              cardCVC={cardCVC}
              isError={isCardCVCError}
              onChange={onChangeCVC}
            />
          </CardInputSection>
        )}
        {showRef.current.validityPeriod && (
          <CardInputSection
            title="카드 유효기간을 입력해 주세요"
            description="월/년도(MMYY)를 순서대로 입력해 주세요."
            errorMessage={
              cardValidityPeriodErrorMessage
                ? cardValidityPeriodErrorMessage
                : ''
            }
          >
            <CardValidityPeriodField
              cardValidityPeriod={cardValidityPeriod}
              isError={isErrorCardValidityPeriod}
              onChange={onChangeCardValidityPeriod}
            />
          </CardInputSection>
        )}
        {showRef.current.cardCompany && (
          <CardInputSection
            title="카드사를 선택해 주세요"
            description="현재 국내 카드사만 가능합니다."
            errorMessage={errorMessage ? errorMessage : ''}
          >
            <CardCompanySelect
              cardCompany={cardCompany}
              onChange={onChangeCardCompany}
            />
          </CardInputSection>
        )}
        <CardInputSection
          title="결제할 카드 번호 입력"
          description="본인 명의의 카드만 결제 가능합니다."
          errorMessage={errorMessage ? errorMessage : ''}
        >
          <CardNumberField
            cardNumber={cardNumber}
            isError={isError}
            onChange={onChange}
          />
        </CardInputSection>
      </CardForm>
    </AppLayout>
  );
}

export default App;

const AppLayout = styled.main`
  width: 376px;

  display: flex;
  flex-direction: column;

  margin: 0 auto;
  padding: 70px 30px;
`;

const CardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 38px;
  margin-top: 45px;
`;
