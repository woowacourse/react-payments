import Heading from '../components/Heading';
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
      <Heading />
    </Page>
  );
}

export default CardAddPage;
