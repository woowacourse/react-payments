import { useNavigate } from 'react-router-dom';
import type { Card } from '../../../types/card';
import { CARD_BRANDS, type CardBrand } from '../../../constants/constants';
import {
  BrandLabel,
  CardNumber,
  CardPlaceholder,
  CardThumb,
  Container,
  DashedAddButton,
  DeleteButton,
  EmptyBox,
  EmptyDescription,
  EmptyHeading,
  ExpireDate,
  Info,
  List,
  Row,
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

  const handleDelete = (id: string) => {
    if (!window.confirm('이 카드를 삭제하시겠습니까?')) return;

    onDelete(id);
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
          {cards.map((card) => {
            const brand = CARD_BRANDS[card.cardBrand as CardBrand];
            return (
              <Row key={card.id}>
                <CardThumb color={brand.color} />
                <Info>
                  <BrandLabel>{brand.label}</BrandLabel>
                  <CardNumber>{card.cardNumber}</CardNumber>
                  <ExpireDate>유효기간 {card.expireDate}</ExpireDate>
                </Info>
                <DeleteButton
                  type="button"
                  onClick={() => handleDelete(card.id)}
                  aria-label="카드 삭제"
                >
                  ×
                </DeleteButton>
              </Row>
            );
          })}
        </List>
      )}

      <AddButton type="button" onClick={handleAdd}>
        {addButtonLabel}
      </AddButton>
    </Container>
  );
}
