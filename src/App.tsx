import CardholderNameContainer from './components/CardholderNameContainer';
import CardExpiryDateContainer from './components/CardExpiryDateContainer';
import CardNumberContainer from './components/CardNumbersContainer';
import CardPreview from './components/CardPreview';
import styled from 'styled-components';
import useCardInfo from './hooks/useCardInfo';
import CardCompanyContainer from './components/CardCompanyContainer';

const App = () => {
  const { cardNumberInfo, cardholderNameInfo, expiryDateInfo, cardCompanyInfo } = useCardInfo();

  return (
    <AppLayout>
      <CardPreview
        cardNumbers={cardNumberInfo.value}
        expiryDate={{ month: expiryDateInfo.month.value, year: expiryDateInfo.year.value }}
        cardholderName={cardholderNameInfo.value}
        cardType={cardCompanyInfo.value}
      />
      <CardInfoWrapper>
        <CardCompanyContainer cardCompany={cardCompanyInfo.value} {...cardCompanyInfo} />
        <CardNumberContainer cardNumbers={cardNumberInfo.value} {...cardNumberInfo} />
        <CardExpiryDateContainer {...expiryDateInfo} />
        <CardholderNameContainer cardholderName={cardholderNameInfo.value} {...cardholderNameInfo} />
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
