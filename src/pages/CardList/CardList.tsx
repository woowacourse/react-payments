import Card from '../../components/Card';
import { useCardListContext } from '../../contexts/CardListContexts';
import styled from 'styled-components';
import CardAddButton from './CardAddButton';
import Header from '../../components/Header';

type CardListProps = {
  setPageCardRegistration: () => void;
};

const CardList = ({ setPageCardRegistration }: CardListProps) => {
  const { cardList } = useCardListContext();

  return (
    <Styled.Wrapper>
      <Header title="보유 카드" />
      <Styled.CardListWrapper>
        {cardList.map((card) => {
          return (
            <Styled.CardItemWrapper>
              <Card card={card} />
              <Styled.CardAlias>{card.alias}</Styled.CardAlias>
            </Styled.CardItemWrapper>
          );
        })}
        <Styled.CardItemWrapper>
          <CardAddButton onClick={setPageCardRegistration} />
        </Styled.CardItemWrapper>
      </Styled.CardListWrapper>
    </Styled.Wrapper>
  );
};

export default CardList;

const Wrapper = styled.div`
  padding: 20px 20px 0 20px;
  height: 100%;
`;

const CardListWrapper = styled.ul`
  padding: 20px 0 10px 0;
  height: 644px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: scroll;

  @media (max-width: 500px) {
    min-height: -webkit-fill-available;
  }
`;

const CardItemWrapper = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardAlias = styled.div`
  margin-top: 10px;
`;

const Styled = {
  Wrapper,
  CardListWrapper,
  CardItemWrapper,
  CardAlias,
};
