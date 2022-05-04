import { useContext } from 'react';
import styled from 'styled-components';
import Head from '../../components/Modules/Head';
import Card from '../../components/Modules/Card';
import CardAddForm from '../../components/Templates/CardAddForm';
import { CardNumberContext } from '../../context/CardNumberContext';
import { ExpiredDateContext } from '../../context/ExpiredDateContext';
import { CardOwnerContext } from '../../context/CardOwnerContext';
import { PasswordContextProvider } from '../../context/PasswordContext';
import { SecurityNumberContextProvider } from '../../context/SecurityNumberContext';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 25px;
`;

const AddFormContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 19px;
`;

function CardAddPage() {
  const companyNameString = '신한카드';
  const { cardNumberString } = useContext(CardNumberContext);
  const { expiredDateString } = useContext(ExpiredDateContext);
  const { ownerNameString } = useContext(CardOwnerContext);

  return (
    <SecurityNumberContextProvider>
      <PasswordContextProvider>
        <Page>
          <Head>카드 추가</Head>
          <CardContainer>
            <Card
              companyNameString={companyNameString}
              cardNumberString={cardNumberString}
              expiredDateString={expiredDateString}
              ownerNameString={ownerNameString}
            />
          </CardContainer>
          <AddFormContainer>
            <CardAddForm />
          </AddFormContainer>
        </Page>
      </PasswordContextProvider>
    </SecurityNumberContextProvider>
  );
}

export default CardAddPage;
