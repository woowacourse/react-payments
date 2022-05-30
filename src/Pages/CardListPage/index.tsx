import { useContext, useEffect } from 'react';
import { CardContext, CardContextValue } from 'context/CardContext';
import styled from 'styled-components';
import Head from 'components/Modules/Head';
import AddCard from 'components/Modules/AddCard';
import { LINK } from '../../constant/Link';
import { INPUT_ACTION } from '../../Reducer/InputtedInfoReducer';
import CardContainer from 'containers/Card/CardContainer';

function CardListPage() {
  const { cardData, inputtedInfoDispatch } = useContext(CardContext) as CardContextValue;

  useEffect(() => {
    inputtedInfoDispatch({
      type: INPUT_ACTION.CLEAR,
    });
  }, []);

  return (
    <Page>
      <Head>보유 카드</Head>
      <ListWrapper>
        {cardData.map(cardInfo => (
          <Wrapper key={cardInfo?.cardNumber!.value!.first + cardInfo.cardName.value}>
            <CardContainer {...cardInfo} disable={false} />
            <span>{cardInfo.cardName.value}</span>
          </Wrapper>
        ))}
        <AddCard link={LINK.CARD_ADD_PAGE} />
      </ListWrapper>
    </Page>
  );
}

export default CardListPage;

const Page = styled.div`
  display: flex;
  flex-direction: column;
  gap: 65px;
  padding-bottom: 65px;
`;

const ListWrapper = styled.div`
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
