import { CARD_BRANDS } from '../../../constants/constants';
import {
  AddButton,
  BrandLabel,
  CardNumber,
  CardThumb,
  Container,
  DeleteButton,
  ExpireDate,
  Info,
  List,
  Row,
  Title,
} from './HasCardsState.styles';

const mockCards = [
  { id: '1', cardNumber: '5511 **** **** 9012', cardBrand: 'BC', expireDate: '12/28' },
  { id: '2', cardNumber: '4111 **** **** 1111', cardBrand: 'SHINHAN', expireDate: '06/30' },
  { id: '3', cardNumber: '5234 **** **** 7890', cardBrand: 'KAKAO', expireDate: '09/27' },
];

export function HasCardsState() {
  const handleDelete = () => {};
  const handleAdd = () => {};

  return (
    <Container>
      <Title>보유 카드 ({mockCards.length})</Title>
      <List>
        {mockCards.map((card) => {
          const brand = CARD_BRANDS[card.cardBrand];
          return (
            <Row key={card.id}>
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
        })}
      </List>
      <AddButton type="button" onClick={handleAdd}>
        + 카드 추가
      </AddButton>
    </Container>
  );
}
