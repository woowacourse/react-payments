import {
  Container,
  CardListContent,
  CardListTitle,
} from './CardListContainer.styles';

interface Props {
  itemCount: number | null;
  children: React.ReactNode;
}

function CardListContainer({ itemCount, children }: Props) {
  const displayedItemCount = itemCount ? `(${itemCount})` : '';

  return (
    <Container>
      <CardListTitle>보유카드 {displayedItemCount}</CardListTitle>
      <CardListContent>{children}</CardListContent>
    </Container>
  );
}

export default CardListContainer;
