import CardholderNameContainer from './components/CardholderNameContainer';
import CardExpiryDateContainer from './components/CardExpiryDateContainer';
import CardNumberContainer from './components/CardNumbersContainer';
import CardPreview from './components/CardPreview';
import styled from 'styled-components';
import useCardInfo from './hooks/useCardInfo';
import CardCompanyContainer from './components/CardCompanyContainer';
import CardCVCContainer from './components/CardCVCContainer';
import CardPasswordContainer from './components/CardPasswordContainer';

const App = () => {
  const { cardNumberInfo, cardCompanyInfo, expiryDateInfo, cardholderNameInfo, cardCVCInfo, cardPasswordInfo } =
    useCardInfo();

  return (
    <AppLayout>
      <CardPreview
        cardNumbers={cardNumberInfo.value}
        expiryDate={{ month: expiryDateInfo.month.value, year: expiryDateInfo.year.value }}
        cardholderName={cardholderNameInfo.value}
        cardType={cardCompanyInfo.value}
      />
      <CardInfoWrapper>
        <CardPasswordContainer password={cardPasswordInfo.value} {...cardPasswordInfo} />
        <CardCVCContainer cvc={cardCVCInfo.value} {...cardCVCInfo} />
        <CardholderNameContainer cardholderName={cardholderNameInfo.value} {...cardholderNameInfo} />
        <CardExpiryDateContainer {...expiryDateInfo} />
        <CardCompanyContainer cardCompany={cardCompanyInfo.value} {...cardCompanyInfo} />
        <CardNumberContainer cardNumbers={cardNumberInfo.value} {...cardNumberInfo} />
      </CardInfoWrapper>
    </AppLayout>
  );
};

const AppLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
`;

const CardInfoWrapper = styled.section`
  margin-top: 50px;
`;

export default App;
