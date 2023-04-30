import { useContext } from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Title from '../common/Title';
import AddCardButton from '../CardListPageComponents/AddCardButton';
import CardList from '../CardListPageComponents/CardList';
import { CardContext } from '../../context/CardContext';

interface CardListPageProps {
  onOpen: () => void;
}

const CardListPage = ({ onOpen }: CardListPageProps) => {
  const cardList = useContext(CardContext);

  return (
    <>
      <Header title='보유카드' />
      <ContentContainer>
        {!cardList && (
          <Title title='새로운 카드를 등록해주세요.' fontSize={18} />
        )}
        <CardList onOpen={onOpen} />
        <AddCardButton onOpen={onOpen} />
      </ContentContainer>
    </>
  );
};

const ContentContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 20px 0;
`;

export default CardListPage;
