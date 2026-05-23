import AddCardButton from './AddCardButton/AddCardButton';
import CardListItem from './CardListItem/CardListItem';
import { CardListContainer, CardItemList } from './CardList.styles';
import { deleteCardItem } from '../../../apis/card';

interface Props {
  cardList: {
    id: string;
    issuerCode: string;
    number: string;
    expirationDate: string;
  }[];
  onRefresh: () => void;
}

function CardList({ cardList, onRefresh }: Props) {
  async function handleDelete(cardId: string) {
    try {
      await deleteCardItem(cardId);
      onRefresh();
    } catch {
      alert('카드 삭제에 실패했습니다. 잠시 후 다시 시도해주세요.');
    }
  }

  return (
    <CardListContainer>
      <CardItemList>
        {cardList.map((card) => (
          <CardListItem key={card.id} card={card} onDelete={handleDelete} />
        ))}
      </CardItemList>
      <AddCardButton />
    </CardListContainer>
  );
}

export default CardList;
