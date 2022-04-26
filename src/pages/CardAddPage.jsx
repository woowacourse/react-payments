import Head from '../components/Head';
import styled from 'styled-components';
import Card from '../components/Card';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  align-self: center;
  width: 100%;
  height: 158px;
  padding-top: 25px;
`;

function CardAddPage() {
  return (
    <Page>
      <Head title="카드 추가" />
      <CardSection>
        <Card
          companyName={'포코카드'}
          cardNumbers={[1111, 2222, 3333, 4444]}
          ownerName={'SUN'}
          expiredDate={{ month: 12, year: 24 }}
        />
      </CardSection>
    </Page>
  );
}

export default CardAddPage;
