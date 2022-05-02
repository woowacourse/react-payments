import styled from 'styled-components';
import Head from '../../components/Modules/Head';
import Card from '../../components/Modules/Card';
import CardAddForm from '../../components/Templates/CardAddForm';

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
  return (
    <Page>
      <Head>카드 추가</Head>
      <CardContainer>
        <Card
          companyName="신한카드"
          cardNumbers={[1111]}
          ownerName="kam"
          expiredDate="11/11"
        />
      </CardContainer>
      <AddFormContainer>
        <CardAddForm />
      </AddFormContainer>
    </Page>
  );
}

export default CardAddPage;
