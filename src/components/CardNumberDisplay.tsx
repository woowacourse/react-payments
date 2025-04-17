type CardNumberDisplayProps = {
  cardNumber: string;
  isMasked: boolean;
};

const CardNumberDisplay = ({
  cardNumber,
  isMasked = false,
}: CardNumberDisplayProps) => {
  return (
    <span>
      {isMasked
        ? (cardNumber = '*'.repeat(String(cardNumber).length))
        : cardNumber}
    </span>
  );
};

export default CardNumberDisplay;
