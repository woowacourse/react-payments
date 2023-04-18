interface CreditCard {
  name?: string;
  date?: string;
  bank?: string;
  number?: number[];
  securityCode?: number;
  password?: number;
}

interface Props {
  card: CreditCard;
}

export default function CardPreview(props: Props) {
  const { card } = props;

  return (
    <div>
      <div></div>
      <span>{card.number ?? ""}</span>
      <span>{card.name ?? "NAME"}</span>
      <span>{card.date ?? "MM/YY"}</span>
    </div>
  );
}
