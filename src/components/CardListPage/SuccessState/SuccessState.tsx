import { useNavigate } from 'react-router-dom';
import { CardItem } from './CardItem/CardItem';
import type { Card } from '../../../types/card';
import {
  CardPlaceholder,
  Container,
  DashedAddButton,
  EmptyBox,
  EmptyDescription,
  EmptyHeading,
  List,
  SolidAddButton,
  Title,
} from './SuccessState.styles';

type Props = {
  cards: Card[];
  onDelete: (id: string) => void;
};

export function SuccessState({ cards, onDelete }: Props) {
  const isEmpty = cards.length === 0;
  const AddButton = isEmpty ? SolidAddButton : DashedAddButton;
  const addButtonLabel = isEmpty ? '카드 추가하기' : '+ 카드 추가';

  const navigate = useNavigate();

  const handleAdd = () => {
    navigate('/addCard');
  };

  return (
    <Container>
      <Title>보유 카드{isEmpty ? '' : ` (${cards.length})`}</Title>

      {isEmpty ? (
        <EmptyBox>
          <CardPlaceholder />
          <EmptyHeading>등록된 카드가 없습니다</EmptyHeading>
          <EmptyDescription>
            아래 버튼을 눌러 첫 카드를 등록해보세요
          </EmptyDescription>
        </EmptyBox>
      ) : (
        <List>
          {cards.map((card) => (
            <CardItem key={card.id} card={card} onDelete={onDelete} />
          ))}
        </List>
      )}

      <AddButton type="button" onClick={handleAdd}>
        {addButtonLabel}
      </AddButton>
    </Container>
  );
}
