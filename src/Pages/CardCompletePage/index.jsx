import { useContext, useEffect } from 'react';
import { CardContext } from '../../context/CardContext';
import styled from 'styled-components';
import Card from '../../components/Modules/Card';
import CardNickNameForm from '../../components/Templates/CardNickNameForm';
import { useNavigate } from 'react-router-dom';

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
  const { inputtedInfo } = useContext(CardContext);
  const navigator = useNavigate();

  useEffect(() => {
    if (Object.keys(inputtedInfo).length === 0) {
      alert('유효하지 않은 접근입니다.');
      navigator('/react-payments/cardList');
      return;
    }
  }, []);

  return (
    <Page>
      <Title>카드등록이 완료되었습니다.</Title>
      <CardSection>
        <Card {...inputtedInfo} />
      </CardSection>
      <CardNickNameForm link="/react-payments/cardList" />
    </Page>
  );
}

export default CardCompletePage;
