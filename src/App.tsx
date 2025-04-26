import CardPreview from './components/CardPreview/CardPreview';
import CardInfoForm from './components/CardInfoForm/CardInfoForm';
import CardInputSection from './components/CardInfoForm/CardInputSection/CardInputSection';
import CardNumberField from './components/CardInfoForm/CardNumberField/CardNumberField';
import CardValidityPeriodField from './components/CardInfoForm/CardValidityPeriodField/CardValidityPeriodField';
import CardCVCField from './components/CardInfoForm/CardCVCField/CardCVCField';
import CardCompanyField from './components/CardInfoForm/CardCompanyField/CardCompanyField';
import CardPasswordField from './components/CardInfoForm/CardPasswordField/CardPasswordField';
import styled from '@emotion/styled';

import useCardForm from './hooks/useCardForm';

function App() {
  const {
    formData,
    eventHandlers,
    cardCompany,
    validation,
    status,
    setInputRef,
  } = useCardForm();

  const {
    cardNumber,
    cardValidityPeriod,
    cardCVC,
    selectedCard,
    cardPassword,
  } = formData;

  const {
    onChangeCardNumber,
    onChangeCardValidityPeriod,
    onChangeCVC,
    onClickCardCompany,
    onChangeCardPassword,
  } = eventHandlers;

  const {
    NAMES: CARD_COMPANY_NAMES,
    COLORS: CARD_COMPANY_COLORS,
    PLACEHOLDER: CARD_COMPANY_PLACEHOLDER,
  } = cardCompany;

  const {
    cardNumberErrorMessage,
    cardValidityPeriodErrorMessage,
    cardCVCErrorMessage,
    cardPasswordErrorMessage,
    getErrorMessageFromList,
  } = validation;

  const { canSubmit, step, STEP_NAME } = status;

  const { setCardNumberInputRef, setCardValidityPeriodInputRef } = setInputRef;

  return (
    <AppLayout>
      <CardPreview
        cardNumber={cardNumber}
        cardValidityPeriod={cardValidityPeriod}
        CARD_COMPANY_COLORS={CARD_COMPANY_COLORS}
      />
      <CardInfoForm canSubmit={canSubmit} step={step}>
        <CardInputSection
          title="결제할 카드 번호 입력"
          description="본인 명의의 카드만 결제 가능합니다."
          errorMessage={getErrorMessageFromList(cardNumberErrorMessage)}
          name={STEP_NAME.CardNumber}
        >
          <CardNumberField
            cardNumber={cardNumber}
            isError={cardNumberErrorMessage.map((errorMessage) =>
              Boolean(errorMessage),
            )}
            onChange={onChangeCardNumber}
            setInputRef={setCardNumberInputRef}
          />
        </CardInputSection>
        <CardInputSection
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
          errorMessage={''}
          name={STEP_NAME.CardCompany}
        >
          <CardCompanyField
            selectedCard={selectedCard}
            CARD_COMPANY_NAMES={CARD_COMPANY_NAMES}
            CARD_COMPANY_PLACEHOLDER={CARD_COMPANY_PLACEHOLDER}
            onClickCardCompany={onClickCardCompany}
          />
        </CardInputSection>
        <CardInputSection
          title="카드 유효기간을 입력해 주세요"
          description="월/년도(MMYY)를 순서대로 입력해 주세요."
          errorMessage={getErrorMessageFromList(
            Object.values(cardValidityPeriodErrorMessage),
          )}
          name={STEP_NAME.CardValidityPeriod}
        >
          <CardValidityPeriodField
            cardValidityPeriod={cardValidityPeriod}
            isError={{
              month: Boolean(cardValidityPeriodErrorMessage.month),
              year: Boolean(cardValidityPeriodErrorMessage.year),
            }}
            onChange={onChangeCardValidityPeriod}
            setCardValidityPeriodInputRef={setCardValidityPeriodInputRef}
          />
        </CardInputSection>
        <CardInputSection
          title="CVC 번호를 입력해 주세요"
          errorMessage={cardCVCErrorMessage}
          name={STEP_NAME.CardCVC}
        >
          <CardCVCField
            cardCVC={cardCVC}
            isError={Boolean(cardCVCErrorMessage)}
            onChange={onChangeCVC}
          />
        </CardInputSection>
        <CardInputSection
          title="비밀번호를 입력해 주세요"
          description="앞의 2자리를 입력해주세요"
          errorMessage={cardPasswordErrorMessage}
          name={STEP_NAME.CardPassword}
        >
          <CardPasswordField
            cardPassword={cardPassword}
            isError={Boolean(cardPasswordErrorMessage)}
            onChange={onChangeCardPassword}
          />
        </CardInputSection>
      </CardInfoForm>
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
