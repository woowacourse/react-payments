import { CARD_BRANDS } from '../../../../constants/constants';
import {
  BrandLabel,
  CardNumber,
  CardThumb,
  DeleteButton,
  ExpireDate,
  Info,
  Row,
} from './CardItem.styles';

export type Card = {
  id: string;
  cardNumber: string;
  cardBrand: string;
  expireDate: string;
  cvc: string;
  cardPassword: string;
};

type Props = {
  card: Card;
};

export function CardItem({ card }: Props) {
  const brand = CARD_BRANDS[card.cardBrand];

  const handleDelete = () => {};

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
