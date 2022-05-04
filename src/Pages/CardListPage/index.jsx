import styled from 'styled-components';
import Head from '../../components/Modules/Head';
import Card from '../../components/Modules/Card';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  padding-bottom: 65px;
`;

const ListContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 26px;
`;

function CardListPage() {
  return (
    <Page>
      <Head>보유 카드</Head>
      <ListContainer>
        <Card
          companyNameString="신한카드"
          cardNumberString="1111-1111-1111-1111"
          expiredDateString="12/32"
          ownerNameString="kam"
        />
        <Card
          companyNameString="우리카드"
          cardNumberString="2222-1111-1111-1111"
          expiredDateString="12/32"
          ownerNameString="woo"
        />
        <Card
          companyNameString="농협카드"
          cardNumberString="3333-1111-1111-1111"
          expiredDateString="12/32"
          ownerNameString="yeong"
        />
      </ListContainer>
    </Page>
  );
}

export default CardListPage;
