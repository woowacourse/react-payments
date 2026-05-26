import type { CardListItem } from "../../../apis/cards";
import { ISSUERS, isIssuerCode } from "../../../constants/issuers";
import DeleteButton from "../DeleteButton/DeleteButton";

type Props = {
  card: CardListItem;
  onDelete: () => void;
};

const CardRow = ({ card, onDelete }: Props) => {
  const issuer = isIssuerCode(card.issuerCode) ? ISSUERS[card.issuerCode] : null;

  return (
    <li>
      <div style={{ backgroundColor: issuer?.color ?? "#333", width: 16, height: 16 }} />
      <div>
        <p>{issuer?.label ?? card.issuerCode}</p>
        <p>{card.number}</p>
        <p>유효기간 {card.expirationDate}</p>
      </div>
      <DeleteButton cardId={card.id} onDelete={onDelete} />
    </li>
  );
};

export default CardRow;
