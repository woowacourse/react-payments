import styled from 'styled-components';
import Head from 'components/Modules/Head';
import Card from 'components/Modules/Card';
import { useContext } from 'react';
import { CardContext } from 'context/CardContext';
import { Fragment } from 'react';
import AddCard from 'components/Modules/AddCard';
import { LINK } from '../../constant/Link';

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
  const { cardData, inputtedInfo } = useContext(CardContext);
  console.log('inputtedInfo :>> ', inputtedInfo);
  return (
    <Page>
      <Head>보유 카드</Head>
      <ListContainer>
        {cardData.map(cardInfo => (
          <Fragment
            key={cardInfo.cardNumber.value.fist + cardInfo.cardName.value}
          >
            <Card {...cardInfo} />
            <span>{cardInfo.cardName.value}</span>
          </Fragment>
        ))}
        <AddCard link={LINK.CARD_ADD_PAGE} />
      </ListContainer>
    </Page>
  );
}

export default CardListPage;
