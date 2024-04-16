interface Props {
  cardInfo: CardInfo;
}

const CreditCard: React.FC<Props> = ({
  cardInfo: {
    cardNumbers,
    cardValidityPeriod: { month, year },
    ownerName,
  },
}) => {
  return (
    <div>
      {cardNumbers} | {month} | {year} | {ownerName}
    </div>
  );
};

export default CreditCard;
