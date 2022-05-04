import { useContext } from 'react';
import styled from 'styled-components';
import Card from '../../components/Modules/Card';
import CardNickNameForm from '../../components/Templates/CardNickNameForm';
import { CardNumberContext } from '../../context/CardNumberContext';
import { ExpiredDateContext } from '../../context/ExpiredDateContext';
import { CardOwnerContext } from '../../context/CardOwnerContext';

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
  const companyNameString = '신한카드';
  const { cardNumberString } = useContext(CardNumberContext);
  const { expiredDateString } = useContext(ExpiredDateContext);
  const { ownerNameString } = useContext(CardOwnerContext);

  return (
    <Page>
      <Title>카드등록이 완료되었습니다.</Title>
      <CardSection>
        <Card
          companyNameString={companyNameString}
          cardNumberString={cardNumberString}
          expiredDateString={expiredDateString}
          ownerNameString={ownerNameString}
        />
      </CardSection>
      <CardNickNameForm />
    </Page>
  );
}

export default CardCompletePage;
