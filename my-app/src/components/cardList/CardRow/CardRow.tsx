import type { CardListItem } from "../../../apis/cards";
import { useDeleteCard } from "../../../hooks/queries/useDeleteCard";
import { ISSUERS, isIssuerCode } from "../../../constants/issuers";

type Props = {
  card: CardListItem;
  onDelete: () => void;
};

const CardRow = ({ card, onDelete }: Props) => {
  const { remove } = useDeleteCard();
  const issuer = isIssuerCode(card.issuerCode) ? ISSUERS[card.issuerCode] : null;

  const handleDelete = async () => {
    if (!window.confirm("정말 삭제하시겠습니까?")) return;
    await remove(card.id);
    onDelete();
  };

  return (
    <li>
      <div style={{ backgroundColor: issuer?.color ?? "#333", width: 16, height: 16 }} />
      <div>
        <p>{issuer?.label ?? card.issuerCode}</p>
        <p>{card.number}</p>
        <p>유효기간 {card.expirationDate}</p>
      </div>
      <button onClick={handleDelete} aria-label="카드 삭제">×</button>
    </li>
  );
};

export default CardRow;
