import styled from 'styled-components';
import Head from '../../components/Modules/Head';
import CardSection from '../../components/Templates/CardSection';
import CardAddForm from '../../components/Templates/CardAddForm';

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
    <Page>
      <Head>카드 추가</Head>
      <CardSection />
      <CardAddFormContainer>
        <CardAddForm link="/react-payments/cardComplete" />
      </CardAddFormContainer>
    </Page>
  );
}

export default CardAddPage;
