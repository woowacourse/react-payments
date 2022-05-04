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
        <Card />
        <Card />
        <Card />
      </ListContainer>
    </Page>
  );
}

export default CardListPage;
