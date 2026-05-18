import { CARD_BRANDS } from '../../../../constants/constants';
import type { Card } from '../../../../types/card';
import {
  BrandLabel,
  CardNumber,
  CardThumb,
  DeleteButton,
  ExpireDate,
  Info,
  Row,
} from './CardItem.styles';

type Props = {
  card: Card;
  onDelete: (id: string) => void;
};

export function CardItem({ card, onDelete }: Props) {
  const brand = CARD_BRANDS[card.cardBrand];

  const handleDelete = () => {
    if (!window.confirm('이 카드를 삭제하시겠습니까?')) return;
    onDelete(card.id);
  };

  return (
    <Row>
      <CardThumb color={brand?.color ?? '#cccccc'} />
      <Info>
        <BrandLabel>{brand?.label ?? card.cardBrand}</BrandLabel>
        <CardNumber>{card.cardNumber}</CardNumber>
        <ExpireDate>유효기간 {card.expireDate}</ExpireDate>
      </Info>
      <DeleteButton type="button" onClick={handleDelete} aria-label="카드 삭제">
        ×
      </DeleteButton>
    </Row>
  );
}
