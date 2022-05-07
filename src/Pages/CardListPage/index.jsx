import styled from 'styled-components';
import Head from '../../components/Modules/Head';
import Card from '../../components/Modules/Card';
import { useContext } from 'react';
import { CardContext } from '../../context/CardContext';
import { Fragment } from 'react';

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
  const { cardData } = useContext(CardContext);

  return (
    <Page>
      <Head>보유 카드</Head>
      <ListContainer>
        {cardData.map(cardInfo => (
          <Fragment key={cardInfo.cardNumber.value}>
            <Card {...cardInfo} />
            <p>{cardInfo.nickName.value}</p>
          </Fragment>
        ))}
      </ListContainer>
    </Page>
  );
}

export default CardListPage;
