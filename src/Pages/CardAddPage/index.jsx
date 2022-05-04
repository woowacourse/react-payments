import styled from 'styled-components';
import Head from '../../components/Modules/Head';
import CardSection from '../../components/Templates/CardSection';
import CardAddForm from '../../components/Templates/CardAddForm';
import { CardNumberContextProvider } from '../../context/CardNumberContext';
import { ExpiredDateContextProvider } from '../../context/ExpiredDateContext';
import { CardOwnerContextProvider } from '../../context/CardOwnerContext';
import { PasswordContextProvider } from '../../context/PasswordContext';
import { SecurityNumberContextProvider } from '../../context/SecurityNumberContext';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardAddFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 19px;
`;

function CardAddPage() {
  return (
    <CardNumberContextProvider>
      <ExpiredDateContextProvider>
        <CardOwnerContextProvider>
          <SecurityNumberContextProvider>
            <PasswordContextProvider>
              <Page>
                <Head>카드 추가</Head>
                <CardSection />
                <CardAddFormContainer>
                  <CardAddForm link="/react-payments/cardComplete" />
                </CardAddFormContainer>
              </Page>
            </PasswordContextProvider>
          </SecurityNumberContextProvider>
        </CardOwnerContextProvider>
      </ExpiredDateContextProvider>
    </CardNumberContextProvider>
  );
}

export default CardAddPage;
