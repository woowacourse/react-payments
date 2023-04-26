import styled from 'styled-components';
import Header from '../common/Header';
import Title from '../common/Title';
import AddCardButton from '../CardListPageComponents/AddCardButton';
import CardList from '../CardListPageComponents/CardList';
import type { CardItemInfo } from '../../types/Card';

interface CardListPageProps {
  cardList: CardItemInfo[];
  cardColor: string;
  bankName: string;
  onOpen: () => void;
}

const CardListPage = ({
  cardList,
  cardColor,
  bankName,
  onOpen,
}: CardListPageProps) => {
  return (
    <>
      <Header title='보유카드' />
      <ContentContainer>
        {!cardList.length && (
          <Title title='새로운 카드를 등록해주세요.' fontSize={18} />
        )}
        <CardList
          cardList={cardList}
          cardColor={cardColor}
          bankName={bankName}
        />
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
