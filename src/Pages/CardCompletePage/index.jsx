import styled from 'styled-components';
import Card from '../../components/Modules/Card';
import CardNickNameForm from '../../components/Templates/CardNickNameForm';
import { NickNameContextProvider } from '../../context/NickNameContext';

const Page = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 27px;
  margin-top: 130px;
`;

const Title = styled.p`
  margin-bottom: 77px;
  font-weight: 400;
  font-size: 24px;
  line-height: 28px;
`;

const CardSection = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-bottom: 33px;
`;

function CardCompletePage() {
  return (
    <NickNameContextProvider>
      <Page>
        <Title>카드등록이 완료되었습니다.</Title>
        <CardSection>
          <Card />
        </CardSection>
        <CardNickNameForm />
      </Page>
    </NickNameContextProvider>
  );
}

export default CardCompletePage;
