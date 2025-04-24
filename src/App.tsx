import CardPreview from './components/CardPreview/CardPreview';
import CardInputSection from './components/cardInfoForm/CardInputSection/CardInputSection';
import CardNumberField from './components/cardInfoForm/CardNumberField/CardNumberField';
import CardValidityPeriodField from './components/cardInfoForm/CardValidityPeriodField/CardValidityPeriodField';
import CardCVCField from './components/cardInfoForm/CardCVCField/CardCVCField';
import styled from '@emotion/styled';
import useCardNumber from './hooks/useCardNumber';
import useCardValidityPeriod from './hooks/useCardValidityPeriod';
import useCardCVC from './hooks/useCardCVC';
import CardCompanyField from './components/cardInfoForm/CardCompanyField/CardCompanyField';
import { useCardCompany } from './hooks/useCardCompany';

function App() {
  const {
    cardNumber,
    onChange,
    errorMessage: cardNumberErrorMessage,
  } = useCardNumber();

  const {
    cardValidityPeriod,
    onChangeCardValidityPeriod,
    errorMessage: cardValidityPeriodErrorMessage,
  } = useCardValidityPeriod();

  const {
    cardCVC,
    onChangeCVC,
    errorMessage: cardCVCErrorMessage,
  } = useCardCVC();

  const {
    selectedCard,
    CARD_COMPANY_NAMES,
    CARD_COMPANY_COLORS,
    CARD_COMPANY_PLACEHOLDER,
    onClickCardCompany,
  } = useCardCompany();

  const getErrorMessageFromList = (errorMessageList: string[]) => {
    const filteredErrorMessageList = errorMessageList.filter(
      (errorMessage) => errorMessage !== '',
    );

    if (filteredErrorMessageList.length === 0) {
      return '';
    }
    return filteredErrorMessageList[0];
  };

  return (
    <AppLayout>
      <CardPreview
        cardNumber={cardNumber}
        cardValidityPeriod={cardValidityPeriod}
      />
      <CardForm>
        <CardInputSection
          title="결제할 카드 번호 입력"
          description="본인 명의의 카드만 결제 가능합니다."
          errorMessage={getErrorMessageFromList(cardNumberErrorMessage)}
        >
          <CardNumberField
            cardNumber={cardNumber}
            isError={cardNumberErrorMessage.map((errorMessage) =>
              Boolean(errorMessage),
            )}
            onChange={onChange}
          />
        </CardInputSection>
        <CardInputSection
          title="카드사를 선택해 주세요"
          description="현재 국내 카드사만 가능합니다."
          errorMessage={''}
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
        >
          <CardValidityPeriodField
            cardValidityPeriod={cardValidityPeriod}
            isError={{
              month: Boolean(cardValidityPeriodErrorMessage.month),
              year: Boolean(cardValidityPeriodErrorMessage.year),
            }}
            onChange={onChangeCardValidityPeriod}
          />
        </CardInputSection>
        <CardInputSection
          title="CVC 번호를 입력해 주세요"
          errorMessage={cardCVCErrorMessage}
        >
          <CardCVCField
            cardCVC={cardCVC}
            isError={Boolean(cardCVCErrorMessage)}
            onChange={onChangeCVC}
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
