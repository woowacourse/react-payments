import { useContext, useEffect } from 'react';
import { CardContext } from 'context/CardContext';
import styled from 'styled-components';
import Head from 'components/Modules/Head';
import Card from 'components/Modules/Card';
import AddCard from 'components/Modules/AddCard';
import { LINK } from '../../constant/Link';
import { INPUT_ACTION } from '../../Reducer/InputtedInfoReducer';

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

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

function CardListPage() {
  const { cardData, inputtedInfoDispatch } = useContext(CardContext);

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.CLEAR,
    });
  }, []);

  return (
    <Page>
      <Head>보유 카드</Head>
      <ListContainer>
        {cardData.map(cardInfo => (
          <Wrapper
            key={cardInfo.cardNumber.value.first + cardInfo.cardName.value}
          >
            <Card {...cardInfo} />
            <span>{cardInfo.cardName.value}</span>
          </Wrapper>
        ))}
        <AddCard link={LINK.CARD_ADD_PAGE} />
      </ListContainer>
    </Page>
  );
}

export default CardListPage;
