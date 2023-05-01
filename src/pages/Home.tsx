import { useContext } from 'react';
import styled from 'styled-components';
import AddCardButton from '../components/AddCardButton/AddCardButton';
import Card from '../components/Card/Card';
import Layout from '../components/Layout/Layout';
import { CardContext } from '../context/CardProvider';
import { CardType } from '../types/Card';

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
`;

const EmptyCardText = styled.p`
  color: #575757;
  font-weight: 700;
  margin-bottom: 8px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
`;

const Home = () => {
  const { cards } = useContext(CardContext);
  return (
    <Layout>
      <CardContainer>
        {cards.length === 0 && (
          <EmptyCardText>새로운 카드를 등록해주세요.</EmptyCardText>
        )}
        {cards.map(
          ({
            id,
            cardNumbers,
            expiredDate,
            cardOwnerName,
            cardCompany,
            nickname,
          }: CardType) => (
            <CardWrapper key={id}>
              <Card
                cardNumbers={cardNumbers}
                expiredDate={expiredDate}
                cardOwnerName={cardOwnerName}
                cardCompany={cardCompany}
              />
              <p>{nickname}</p>
            </CardWrapper>
          )
        )}
        <AddCardButton></AddCardButton>
      </CardContainer>
    </Layout>
  );
};

export default Home;
