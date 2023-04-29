import Card from '../../components/Card';
import { useCardListContext } from '../../contexts/CardListContexts';
import styled from 'styled-components';
import CardAddButton from './CardAddButton';

type CardListProps = {
  setPageCardRegistration: () => void;
};

const CardList = ({ setPageCardRegistration }: CardListProps) => {
  const { cardList } = useCardListContext();

  return (
    <Styled.Wrapper>
      <Styled.CardListWrapper>
        {cardList.map(({ cardType, cardNumber, owner, expirationDate, alias }) => {
          return (
            <Styled.CardItemWrapper>
              <Card cardType={cardType} cardNumber={cardNumber} owner={owner} expirationDate={expirationDate} />
              <Styled.CardAlias>{alias}</Styled.CardAlias>
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
  height: 100%;
`;

const CardListWrapper = styled.ul`
  padding: 36px 0 10px 0;
  height: 644px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  overflow: scroll;
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
