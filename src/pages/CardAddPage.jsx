import Head from '../components/Head';
import styled from 'styled-components';

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

function CardAddPage() {
  return (
    <Page>
      <Head title="카드 추가" />
    </Page>
  );
}

export default CardAddPage;
